import { Values, Color } from './colors';

type Input = Values | 'N';

interface PaletteState {
  input: Input[],
  paletteFromAPI: Color[],
  mainPalette: Color[],
  loading: boolean,
  error: any,
}

export default PaletteState;
