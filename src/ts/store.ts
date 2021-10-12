import PaletteState from './colors/palette';
import Copy from './copy/copy';
import Settings from './settings/settings';

interface Store {
  palette: PaletteState,
  copy: Copy[],
  settings: Settings,
}

export default Store;
