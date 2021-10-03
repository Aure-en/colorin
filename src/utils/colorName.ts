import namedColors from 'color-name-list';
import nearestColor from 'nearest-color';

// Convert colors to objects { name: string, hex: string }
const colors = namedColors.reduce(
  (
    o: { name: string; hex: string }[],
    { name, hex }: { name: string; hex: string },
  ) => Object.assign(o, { [name]: hex }),
  {},
);
const nearest = nearestColor.from(colors);

export default nearest;
