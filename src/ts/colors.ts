export type Values = [number, number, number];

export type Color = {
  rgb: Values,
  hex: string,
  hsl: Values,
  name: string,
};

export type Palette = [Color, Color, Color, Color, Color];
