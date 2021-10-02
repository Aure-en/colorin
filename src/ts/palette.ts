import { Color } from './colors';

type Input = Color | 'N';

interface Palette {
  input: Input[],
  paletteFromAPI: Color[],
  mainPalette: Color[],
  loading: boolean,
  error: any,
}

export default Palette;
