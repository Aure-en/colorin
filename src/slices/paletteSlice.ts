import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Color from 'color';
import { Color as ColorType, Values } from '../ts/colors';
import Palette from '../ts/palette';
import Store from '../ts/store';

const initialState: Palette = {
  input: ['N', 'N', 'N', 'N', 'N'],
  paletteFromAPI: [],
  mainPalette: [],
  loading: false,
  error: null,
};

export const fetchPalette = createAsyncThunk<
  ColorType[],
  void,
  { state: Palette }
>('palette/fetchPalette', async (undefined, { getState }) => {
  // Get a 5 colors palette from Colormind API.
  const { input } = getState();
  const paletteRes = await fetch('http://colormind.io/api/', {
    method: 'POST',
    body: JSON.stringify({
      model: 'default',
      input,
    }),
  });
  const paletteJson = await paletteRes.json();
  const palette = paletteJson.result;

  // Convert to string of HEX to use the color-name-list API.
  const paletteToHex = palette
    .map((color: Values) => Color.rgb(color).hex())
    .map((color: string) => color.replace('#', ''))
    .join(',');

  // Fetch names from the color-name-list API.
  const colorsRes = await fetch(`
    https://api.color.pizza/v1/?values=${paletteToHex}
  `);
  const colorsJson = await colorsRes.json();

  // Format response to fix the type Color.
  const result = colorsJson.colors.map((color: {
    name: string,
    hex: string,
    hsl: {
      h: number,
      s: number,
      l: number,
    },
    rgb: {
      r: number,
      g: number,
      b: number,
    },
    luminance: number,
    distance: number,
  }) => ({
    name: color.name,
    hex: color.hex,
    rgb: [color.rgb.r, color.rgb.g, color.rgb.b],
    hsl: [color.hsl.h, color.hsl.s, color.hsl.l],
  }));

  return result;
});

const paletteSlice = createSlice({
  name: 'palette',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPalette.pending, (state: Palette) => {
        state.loading = true;
      })
      .addCase(fetchPalette.fulfilled, (state: Palette, action) => {
        state.paletteFromAPI = action.payload;
        state.loading = false;
      })
      .addCase(fetchPalette.rejected, (state: Palette) => {
        state.loading = false;
        state.error = 'Sorry, something went wrong.';
      });
  },
});

export const getPaletteFromAPI = (state: Store) => state.palette.paletteFromAPI;

export const getMainPalette = (state: Store) => state.palette.mainPalette;

export default paletteSlice.reducer;
