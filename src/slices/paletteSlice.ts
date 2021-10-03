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
  paletteFromAPI: [], // Palette fetched from API.
  mainPalette: [], // Palette modified by the user to fit their taste.
  locked: ['N', 'N', 'N', 'N'], // Locked colors.
  stepsNumber: 2,
  steps: {
    light: [],
    dark: [],
  },
  loading: false,
  error: null,
};

export const fetchPalette = createAsyncThunk<
  ColorType[],
  void,
  { state: Store }
>('palette/fetchPalette', async (undefined, { getState }) => {
  // Get a 5 colors palette from Colormind API.
  const { locked } = getState().palette;
  const response = await fetch('http://colormind.io/api/', {
    method: 'POST',
    body: JSON.stringify({
      model: 'default',
      input: [...locked, 'N'],
    }),
  });
  const json = await response.json();
  const { result }: { result: Values[] } = json; // Color RGB.

  // Get color formats from the RGB.
  const palette = result.map(
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
      return {
        ...state,
        stepsNumber: state.stepsNumber + 1,
      };
    },

    decrementSteps(state) {
      return {
        ...state,
        stepsNumber: state.stepsNumber - 1,
      };
    },

    toggleLock: {
      reducer(state, action: PayloadAction<{ color: Values }>) {
        /**
         * Search for the color in the locked array.
         * If it is in the array, unlock it.
         * If it is not in the array, lock it if there are < 4 colors locked.
         */
        const colorIndex = state.locked.findIndex(
          (color) => Array.isArray(color)
            && color.join('') === action.payload.color.join(''),
        );

        // If the color is locked, unlock it.
        if (colorIndex !== -1) {
          state.locked[colorIndex] = 'N';
        } else {
          // If the color is not unlocked yet, lock if it there are < 4 colors locked.
          const freeLock = state.locked.findIndex((lock) => lock === 'N');
          if (freeLock !== -1) {
            state.locked[freeLock] = action.payload.color;
          }
        }
      },

      prepare(color: Values) {
        return {
          payload: {
            color,
          },
        };
      },
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchPalette.pending, (state: PaletteState) => {
        state.loading = true;
      })
      .addCase(fetchPalette.fulfilled, (state: PaletteState, action) => {
        state.paletteFromAPI = action.payload;
        state.mainPalette = action.payload;
        state.loading = false;
      })
      .addCase(fetchPalette.rejected, (state: PaletteState) => {
        state.loading = false;
        state.error = 'Sorry, something went wrong.';
      });
  },
});

export const {
  setSteps, incrementSteps, decrementSteps, toggleLock,
} = paletteSlice.actions;

export const getPaletteFromAPI = (state: Store): PaletteType => state.palette.paletteFromAPI;

export const getMainPalette = (state: Store): PaletteType => state.palette.mainPalette;

export const getSteps = (state: Store): Steps => state.palette.steps;

export const getStepsNumber = (state: Store): number => state.palette.stepsNumber;

export const getLocked = (state: Store): (Values | 'N')[] => state.palette.locked;

export default paletteSlice.reducer;
