import Color from './color';

interface Palette {
  paletteFromAPI: Color[],
  mainPalette: Color[],
  steps: {
    lighter: Color[],
    darker: Color[],
  }
  loading: boolean,
  error: any,
}

export default Palette;
