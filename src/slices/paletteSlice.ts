import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {
  getColorFromHex,
  getColorFromRgb,
  getBrighterStep,
  getDarkerStep,
  getColorSteps,
} from '../utils/color';
import {
  Color as ColorType,
  Palette as PaletteType,
  Steps,
  Values,
} from '../ts/colors/colors';
import PaletteState, { Loading } from '../ts/colors/palette';
import Store from '../ts/store';

const initialState: PaletteState = {
  models: [], // Models from Colormind
  paletteFromAPI: [], // Palette fetched from API.
  palettesFromAPI: [], // Palettes fetched from API.
  mainPalette: [], // Palette modified by the user to fit their taste.
  locked: ['N', 'N', 'N', 'N', 'N'], // Locked colors.
  stepsNumber: 2,
  steps: {
    light: [],
    dark: [],
  },
  loading: {
    models: 'idle',
    palette: 'idle',
    palettes: 'idle',
  },
  error: null,
};

export const fetchModels = createAsyncThunk('palette/fetchModels', async () => {
  // Get available models from the Colormind API.
  const response = await fetch('http://colormind.io/list/');
  const json = await response.json();
  const { result }: { result: string[] } = json;
  return result;
});

export const fetchPalette = createAsyncThunk<
  ColorType[],
  void,
  { state: Store }
>('palette/fetchPalette', async (undefined, { getState }) => {
  // Get a 5 colors palette from Colormind API.
  const { models, locked } = getState().palette;
  const response = await fetch('http://colormind.io/api/', {
    method: 'POST',
    body: JSON.stringify({
      model:
        // Select a random model
        models.length === 0
          ? 'default'
          : models[Math.floor(Math.random() * models.length)],
      input: locked,
    }),
  });
  const json = await response.json();
  const { result }: { result: Values[] } = json; // Color RGB.

  const paletteWithLocked = result.map((color, index) => (Array.isArray(locked[index]) ? <number[]>locked[index] : color));

  // Get color formats and name
  const palette = paletteWithLocked.map(
    (rgb): ColorType => getColorFromRgb(rgb),
  );

  // Set up ids.
  const paletteWithId = palette.map((color, index) => ({
    ...color,
    id: index,
  }));

  return paletteWithId;
});

export const fetchPalettes = createAsyncThunk<
  ColorType[][],
  void,
  { state: Store }
>('palette/fetchPalettes', async (undefined, { getState }) => {
  // Get 20 palettes from Colormind API.
  const { models } = getState().palette;

  const responses: Values[][] = await Promise.all(
    Array(20)
      .fill('')
      .map(async () => {
        const response = await fetch('http://colormind.io/api/', {
          method: 'POST',
          body: JSON.stringify({
            model:
              // Select a random model
              models.length === 0
                ? 'default'
                : models[Math.floor(Math.random() * models.length)],
          }),
        });
        const json = await response.json();
        const { result }: { result: Values[] } = json; // Color RGB.
        return result;
      }),
  );

  // Get color formats and name
  const palettes = responses.map((palette) => palette.map((rgb): ColorType => getColorFromRgb(rgb)));
  return palettes;
});

const paletteSlice = createSlice({
  name: 'palette',
  initialState,
  reducers: {
    setSteps(state) {
      const steps: Steps = {
        light: [],
        dark: [],
      };

      const palette: PaletteType = state.mainPalette;

      /**
       * For all steps:
       * - Get their values (rgb, hex, hsl)
       * - Get their names
       */
      for (let step = 1; step <= state.stepsNumber; step += 1) {
        // Light steps
        steps.light.unshift(
          palette.map(
            (color: ColorType): ColorType => getBrighterStep(color, step),
          ),
        );

        // Dark steps
        steps.dark.push(
          palette.map(
            (color: ColorType): ColorType => getDarkerStep(color, step),
          ),
        );
      }

      return {
        ...state,
        steps,
      };
    },

    setStep: {
      reducer(
        state,
        action: PayloadAction<{ index: number; color: ColorType }>,
      ) {
        const steps = getColorSteps(action.payload.color, state.stepsNumber);

        for (let step = 0; step < state.stepsNumber; step += 1) {
          state.steps.light[step][action.payload.index] = steps.light[step];
          state.steps.dark[step][action.payload.index] = steps.dark[step];
        }
      },

      prepare(index: number, hex: string) {
        return {
          payload: {
            index,
            color: getColorFromHex(hex),
          },
        };
      },
    },

    setPalette: {
      reducer(state, action: PayloadAction<{ palette: PaletteType }>) {
        state.paletteFromAPI = action.payload.palette.map((color, index) => ({
          ...color,
          id: index,
        }));
        state.mainPalette = action.payload.palette.map((color, index) => ({
          ...color,
          id: index,
        }));
      },

      prepare(palette: PaletteType) {
        return {
          payload: {
            palette,
          },
        };
      },
    },

    incrementSteps(state) {
      state.stepsNumber += 1;
    },

    decrementSteps(state) {
      state.stepsNumber -= 1;
    },

    reset(state) {
      state.mainPalette = JSON.parse(JSON.stringify([...state.paletteFromAPI]));
    },

    toggleLock: {
      reducer(state, action: PayloadAction<{ index: number; color: Values }>) {
        // If the color is already locked, unlock it.
        if (
          Array.isArray(state.locked[action.payload.index])
          && (<number[]>state.locked[action.payload.index]).join('')
            === action.payload.color.join('')
        ) {
          state.locked[action.payload.index] = 'N';
          // If the selected color is not already locked, lock it.
        } else {
          state.locked[action.payload.index] = action.payload.color;
        }
      },

      prepare(index: number, color: Values) {
        return {
          payload: {
            color,
            index,
          },
        };
      },
    },

    updatePalette: {
      reducer(
        state,
        action: PayloadAction<{ index: number; color: ColorType }>,
      ) {
        state.mainPalette[action.payload.index] = {
          ...state.mainPalette[action.payload.index],
          ...action.payload.color,
        };
      },

      prepare(index: number, hex: string) {
        // Return color with all formats and names.
        return {
          payload: {
            color: getColorFromHex(hex),
            index,
          },
        };
      },
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchPalette.pending, (state: PaletteState) => {
        state.loading.palette = 'pending';
      })
      .addCase(fetchPalette.fulfilled, (state: PaletteState, action) => {
        state.paletteFromAPI = action.payload;
        state.mainPalette = JSON.parse(JSON.stringify([...action.payload]));
        state.loading.palette = 'fulfilled';
      })
      .addCase(fetchPalette.rejected, (state: PaletteState) => {
        state.loading.palette = 'rejected';
        state.error = 'Sorry, something went wrong.';
      })
      .addCase(fetchModels.pending, (state: PaletteState) => {
        state.loading.models = 'pending';
      })
      .addCase(fetchModels.fulfilled, (state: PaletteState, action) => {
        state.models = action.payload;
        state.loading.models = 'fulfilled';
      })
      .addCase(fetchModels.rejected, (state: PaletteState) => {
        state.loading.models = 'rejected';
        state.error = 'Sorry, something went wrong.';
      })
      .addCase(fetchPalettes.pending, (state: PaletteState) => {
        state.loading.palettes = 'pending';
      })
      .addCase(fetchPalettes.fulfilled, (state: PaletteState, action) => {
        state.palettesFromAPI = action.payload;
        state.loading.palettes = 'fulfilled';
      })
      .addCase(fetchPalettes.rejected, (state: PaletteState) => {
        state.loading.palettes = 'rejected';
        state.error = 'Sorry, something went wrong.';
      });
  },
});

export const {
  setSteps,
  setStep,
  incrementSteps,
  decrementSteps,
  toggleLock,
  reset,
  updatePalette,
  setPalette,
} = paletteSlice.actions;

export const getPaletteFromAPI = (state: Store): PaletteType => state.palette.paletteFromAPI;

export const getPalettesFromAPI = (state: Store): PaletteType[] => state.palette.palettesFromAPI;

export const getMainPalette = (state: Store): PaletteType => state.palette.mainPalette;

export const getSteps = (state: Store): Steps => state.palette.steps;

export const getStepsNumber = (state: Store): number => state.palette.stepsNumber;

export const getLocked = (state: Store): (Values | 'N')[] => state.palette.locked;

export const getModels = (state: Store): string[] => state.palette.models;

export const getModelsLoading = (state: Store): Loading => state.palette.loading.models;

export const getPaletteLoading = (state: Store): Loading => state.palette.loading.palette;

export const getPalettesLoading = (state: Store): Loading => state.palette.loading.palettes;

export const getColor = (state: Store, index: number): ColorType => state.palette.mainPalette[index];

export default paletteSlice.reducer;
