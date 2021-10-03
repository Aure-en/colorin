import { Values, Color, Steps } from './colors';

type Input = Values | 'N';

interface PaletteState {
  input: Input[],
  paletteFromAPI: Color[],
  mainPalette: Color[],
  stepsNumber: number,
  steps: Steps,
  loading: boolean,
  error: any,
}

export default PaletteState;
