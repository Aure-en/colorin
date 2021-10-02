import Color from './color';

type Palette = Color[];

interface Palettes {
  palettes: Palette[],
  loading: boolean,
  error: any,
}

export default Palettes;
