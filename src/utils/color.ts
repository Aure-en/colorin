import namedColors from 'color-name-list';
import nearestColor from 'nearest-color';
import Color from 'color';
import { Color as ColorType, Values } from '../ts/colors/colors';

// Get color name from color.
const colors = namedColors.reduce(
  (
    o: { name: string; hex: string }[],
    { name, hex }: { name: string; hex: string },
  ) => Object.assign(o, { [name]: hex }),
  {},
);

/**
 * Get color name from hex code.
 * @params {string} (color hex)
 * @returns {string} (name)
 * Ex: getColorName(color.hex)
 */
export const getColorName = nearestColor.from(colors);

export const getColorFromHex = (hex: string): ColorType => {
  const color = Color(hex);
  return {
    hex,
    rgb: color.rgb().array(),
    hsl: color.hsl().array(),
    name: getColorName(hex).name,
  };
};

export const getColorFromRgb = (rgb: Values): ColorType => {
  const color = Color.rgb(rgb);
  return {
    rgb,
    hex: color.hex(),
    hsl: color.hsl().array(),
    name: getColorName(color.hex()).name,
  };
};

/**
 * Get a color, and returns a brighter tint.
 */
export const getBrighterStep = (color: ColorType, step: number): ColorType => {
  const colorObject = Color(color.hex);
  const luminosity = colorObject.hsl().array()[2];
  const lighter = colorObject.lightness(
    ((100 - luminosity) / (step + 1)) * step + luminosity,
  );

  return {
    rgb: lighter.rgb().array(),
    hex: lighter.hex(),
    hsl: lighter.hsl().array(),
    name: getColorName(lighter.hex()).name,
  };
};

/**
 * Get a color, and returns a darker tint.
 */
export const getDarkerStep = (color: ColorType, step: number): ColorType => {
  const colorObject = Color.rgb(color.rgb);
  const luminosity = colorObject.hsl().array()[2];
  const darker = colorObject.lightness(
    luminosity - (luminosity / (step + 1)) * step,
  );

  return {
    rgb: darker.rgb().array(),
    hex: darker.hex(),
    hsl: darker.hsl().array(),
    name: getColorName(darker.hex()).name,
  };
};

/**
 * Get a color, returns brighter and darker tints.
 */
export const getColorSteps = (color: ColorType, steps: number): {
  light: ColorType[],
  dark: ColorType[],
} => {
  const light: ColorType[] = [];
  const dark: ColorType[] = [];

  for (let step = 1; step <= steps; step += 1) {
    light.unshift(
      getBrighterStep(color, step),
    );

    dark.push(
      getDarkerStep(color, step),
    );
  }

  return {
    light,
    dark,
  };
};
