export type Values = number[];

export type Color = {
  rgb: Values,
  hex: string,
  hsl: Values,
  name: string,
};

export type Palette = Color[];
