import { Values, Color, Steps } from './colors';

type Locked = Values | 'N';

interface PaletteState {
  locked: Locked[],
  paletteFromAPI: Color[],
  mainPalette: Color[],
  stepsNumber: number,
  steps: Steps,
  loading: boolean,
  error: any,
}

export default PaletteState;
