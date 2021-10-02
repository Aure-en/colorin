import { Values, Color } from './colors';

type Input = Values | 'N';

interface Palette {
  input: Input[],
  paletteFromAPI: Color[],
  mainPalette: Color[],
  loading: boolean,
  error: any,
}

export default Palette;
