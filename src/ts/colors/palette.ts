import { Values, Palette, Steps } from './colors';

type Locked = Values | 'N';

interface PaletteState {
  models: string[],
  palettesFromAPI: Palette[],
  locked: Locked[],
  paletteFromAPI: Palette,
  mainPalette: Palette,
  stepsNumber: number,
  steps: Steps,
  loading: {
    models: boolean,
    palette: boolean,
    palettes: boolean,
  },
  error: any,
}

export default PaletteState;
