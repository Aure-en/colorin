import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Color from 'color';
import colorName from '../utils/colorName';
import {
  Color as ColorType,
  Palette as PaletteType,
  Values,
} from '../ts/colors';
import PaletteState from '../ts/palette';
import Store from '../ts/store';

const initialState: PaletteState = {
  input: ['N', 'N', 'N', 'N', 'N'], // Locked colors.
  paletteFromAPI: [], // Palette fetched from API.
  mainPalette: [], // Palette modified by the user to fit their taste.
  loading: false,
  error: null,
};

export const fetchPalette = createAsyncThunk<
  ColorType[],
  void,
  { state: PaletteState }
>('palette/fetchPalette', async (undefined, { getState }) => {
  // Get a 5 colors palette from Colormind API.
  const { input } = getState();
  const response = await fetch('http://colormind.io/api/', {
    method: 'POST',
    body: JSON.stringify({
      model: 'default',
      input,
    }),
  });
  const json = await response.json();
  const { result }: { result: Values[] } = json; // Color RGB.

  // Get color formats from the RGB.
  const palette = result.map((color): {
    rgb: Values,
    hex: string,
    hsl: Values,
  } => {
    const colorObj = Color.rgb(color);
    const colorHex = colorObj.hex();
    const colorHsl = colorObj.hsl().array();
    return {
      rgb: color,
      hex: colorHex,
      hsl: colorHsl,
    };
  });

  // Get nearest color name for every palette color.
  const paletteWithName: PaletteType = palette.map((color): ColorType => ({
    ...color,
    name: colorName(color.hex).name,
  }));

  return paletteWithName;
});

const paletteSlice = createSlice({
  name: 'palette',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPalette.pending, (state: PaletteState) => {
        state.loading = true;
      })
      .addCase(fetchPalette.fulfilled, (state: PaletteState, action) => {
        state.paletteFromAPI = action.payload;
        state.loading = false;
      })
      .addCase(fetchPalette.rejected, (state: PaletteState) => {
        state.loading = false;
        state.error = 'Sorry, something went wrong.';
      });
  },
});

export const getPaletteFromAPI = (state: Store) => state.palette.paletteFromAPI;

export const getMainPalette = (state: Store) => state.palette.mainPalette;

export default paletteSlice.reducer;
