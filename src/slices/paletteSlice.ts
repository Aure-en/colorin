import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import Color from 'color';
import colorName from '../utils/colorName';
import {
  Color as ColorType,
  Palette as PaletteType,
  Steps,
  Values,
} from '../ts/colors/colors';
import PaletteState from '../ts/colors/palette';
import Store from '../ts/store';

const initialState: PaletteState = {
  models: [], // Models from Colormind
  paletteFromAPI: [], // Palette fetched from API.
  mainPalette: [], // Palette modified by the user to fit their taste.
  locked: ['N', 'N', 'N', 'N', 'N'], // Locked colors.
  stepsNumber: 2,
  steps: {
    light: [],
    dark: [],
  },
  palettes: [], // Group of palettes from API.
  loading: {
    models: false,
    palette: false,
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

  const paletteWithLocked = result.map((color, index) => (Array.isArray(locked[index]) ? color : <number[]>locked[index]));

  // Get color formats from the RGB.
  const palette = paletteWithLocked.map(
    (
      color,
    ): {
      rgb: Values;
      hex: string;
      hsl: Values;
    } => {
      const colorObj = Color.rgb(color);
      const colorHex = colorObj.hex();
      const colorHsl = colorObj.hsl().array();
      return {
        rgb: color,
        hex: colorHex,
        hsl: colorHsl,
      };
    },
  );

  // Get nearest color name for every palette color.
  const paletteWithName: PaletteType = palette.map(
    (color): ColorType => ({
      ...color,
      name: colorName(color.hex).name,
    }),
  );

  return paletteWithName;
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
          palette.map((color: ColorType): ColorType => {
            // Lighten the color
            const colorObject = Color.rgb(color.rgb);
            const luminosity = colorObject.hsl().array()[2];
            const lighter = colorObject.lightness(
              ((100 - luminosity) / (state.stepsNumber + 1)) * step + luminosity,
            );

            // Get new color values
            const rgb = lighter.rgb().array();
            const hex = lighter.hex();
            const hsl = lighter.hsl().array();

            // Get color name
            const { name } = colorName(hex);

            return {
              name,
              rgb,
              hex,
              hsl,
            };
          }),
        );

        // Dark steps
        steps.dark.push(
          palette.map((color: ColorType): ColorType => {
            // Darken the color
            const colorObject = Color.rgb(color.rgb);
            const luminosity = colorObject.hsl().array()[2];
            const darker = colorObject.lightness(
              luminosity - (luminosity / (state.stepsNumber + 1)) * step,
            );

            // Get new color values
            const rgb = darker.rgb().array();
            const hex = darker.hex();
            const hsl = darker.hsl().array();

            // Get color name
            const { name } = colorName(hex);

            return {
              name,
              rgb,
              hex,
              hsl,
            };
          }),
        );
      }

      return {
        ...state,
        steps,
      };
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
  },

  extraReducers(builder) {
    builder
      .addCase(fetchPalette.pending, (state: PaletteState) => {
        state.loading.palette = true;
      })
      .addCase(fetchPalette.fulfilled, (state: PaletteState, action) => {
        state.paletteFromAPI = action.payload;
        state.mainPalette = JSON.parse(JSON.stringify([...action.payload]));
        state.loading.palette = false;
      })
      .addCase(fetchPalette.rejected, (state: PaletteState) => {
        state.loading.palette = false;
        state.error = 'Sorry, something went wrong.';
      })
      .addCase(fetchModels.pending, (state: PaletteState) => {
        state.loading.models = true;
      })
      .addCase(fetchModels.fulfilled, (state: PaletteState, action) => {
        state.models = action.payload;
        state.loading.models = false;
      })
      .addCase(fetchModels.rejected, (state: PaletteState) => {
        state.loading.models = false;
        state.error = 'Sorry, something went wrong.';
      });
  },
});

export const {
  setSteps, incrementSteps, decrementSteps, toggleLock, reset,
} = paletteSlice.actions;

export const getPaletteFromAPI = (state: Store): PaletteType => state.palette.paletteFromAPI;

export const getMainPalette = (state: Store): PaletteType => state.palette.mainPalette;

export const getSteps = (state: Store): Steps => state.palette.steps;

export const getStepsNumber = (state: Store): number => state.palette.stepsNumber;

export const getLocked = (state: Store): (Values | 'N')[] => state.palette.locked;

export const getModels = (state: Store): string[] => state.palette.models;

export const isPaletteLoading = (state: Store): boolean => state.palette.loading.palette;

export default paletteSlice.reducer;
