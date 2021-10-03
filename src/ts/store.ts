import PaletteState from './colors/palette';
import Copy from './copy/copy';

interface Store {
  palette: PaletteState,
  copy: Copy[],
}

export default Store;
