import { Values, Palette, Steps } from './colors';

type Locked = Values | 'N';
export type Loading = 'idle' | 'pending' | 'rejected' | 'fulfilled';

interface PaletteState {
  models: string[],
  palettesFromAPI: Palette[],
  locked: Locked[],
  paletteFromAPI: Palette,
  mainPalette: Palette,
  stepsNumber: number,
  steps: Steps,
  loading: {
    models: Loading,
    palette: Loading,
    palettes: Loading,
  },
  error: any,
}

export default PaletteState;
