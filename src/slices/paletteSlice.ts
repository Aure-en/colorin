import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Palette from '../ts/palette';
import Store from '../ts/store';

const initialState: Palette = {
  paletteFromAPI: [],
  mainPalette: [],
  steps: {
    lighter: [],
    darker: [],
  },
  loading: false,
  error: null,
};

export const fetchPalette = createAsyncThunk('palette/fetchPalette', async () => {
  const response = await fetch('http://colormind.io/api/', {
    method: 'POST',
    body: JSON.stringify({
      model: 'default',
    }),
  });
  const result = await response.json();
  return result.result;
});

const paletteSlice = createSlice({
  name: 'palette',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPalette.pending, (state: Palette, action) => {
        state.loading = true;
      })
      .addCase(fetchPalette.fulfilled, (state: Palette, action) => {
        state.paletteFromAPI = action.payload;
        state.loading = false;
      })
      .addCase(fetchPalette.rejected, (state: Palette, action) => {
        state.loading = false;
        state.error = 'Sorry, something went wrong.';
      });
  },
});

export const getPaletteFromAPI = (state: Store) => state.palette.paletteFromAPI;

export const getMainPalette = (state: Store) => state.palette.mainPalette;

export const getSteps = (state: Store) => state.palette.steps;

export default paletteSlice.reducer;
