import Color from 'color';
import { Color as ColorType, Values } from '../ts/colors/colors';

const formatRgb = (rgb: Values): string => Color.rgb(rgb).rgb().round().string();

const formatHsl = (hsl: Values): string => Color.hsl(hsl).hsl().round().string();

const formatColorCode = (format: string, color: ColorType): string => {
  switch (format) {
    case 'rgb':
      return formatRgb(color.rgb);
    case 'hsl':
      return formatHsl(color.hsl);
    default:
      return color.hex;
  }
};

export default formatColorCode;
