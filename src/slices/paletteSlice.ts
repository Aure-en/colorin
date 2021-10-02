import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Color } from '../ts/colors';
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
  Color[],
  void,
  { state: Palette }
>('palette/fetchPalette', async (undefined, { getState }) => {
  const { input } = getState();
  const response = await fetch('http://colormind.io/api/', {
    method: 'POST',
    body: JSON.stringify({
      model: 'default',
      input,
    }),
  });
  const result = await response.json();
  return result.result;
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
