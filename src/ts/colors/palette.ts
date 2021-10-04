import { Values, Palette, Steps } from './colors';

type Locked = Values | 'N';

interface PaletteState {
  models: string[],
  palettes: Palette[],
  locked: Locked[],
  paletteFromAPI: Palette,
  mainPalette: Palette,
  stepsNumber: number,
  steps: Steps,
  loading: {
    models: boolean,
    palette: boolean,
  },
  error: any,
}

export default PaletteState;
