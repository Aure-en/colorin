import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Palette } from '../ts/colors/colors';
import Store from '../ts/store';
import Theme from '../ts/settings/theme';
import Format from '../ts/settings/format';
import Settings from '../ts/settings/settings';

const initialState: Settings = {
  theme: {
    primary: '#000',
    secondary: '#aaa',
    tertiary: '#bbb',
    quaternary: '#ccc',
    quinary: '#ddd',
    text: '#fff',
    text_dark: '#000',
    text_neutral: '#585858',
    text_bright: '#fff',
  },
  format: 'hex',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    // Create theme from main palette.
    setTheme: {
      reducer(state, action: PayloadAction<{ palette: Palette }>) {
        const { palette } = action.payload;

        const text = palette[0].hsl[2] > 50 ? state.theme.text_dark : state.theme.text_bright;
        state.theme.primary = palette[0].hex;
        state.theme.secondary = palette[1].hex;
        state.theme.tertiary = palette[2].hex;
        state.theme.quaternary = palette[3].hex;
        state.theme.quinary = palette[4].hex;
        state.theme.text = text;
      },

      prepare(palette) {
        return {
          payload: {
            palette,
          },
        };
      },
    },

    setFormat: {
      reducer(state, action: PayloadAction<{ format: Format }>) {
        state.format = action.payload.format;
      },

      prepare(format) {
        return {
          payload: {
            format,
          },
        };
      },
    },
  },
});

export const { setTheme, setFormat } = settingsSlice.actions;

export const getTheme = (state: Store): Theme => state.settings.theme;

export default settingsSlice.reducer;
