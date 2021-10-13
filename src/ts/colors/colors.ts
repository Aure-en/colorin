export type Values = number[];

export interface Color {
  rgb: Values,
  hex: string,
  hsl: Values,
  name: string,
}

export interface MainColor extends Color {
  id: number,
}

export type Palette = Color[];

export type MainPalette = MainColor[];

export type Steps = {
  light: Palette[],
  dark: Palette[],
};

export function isMainColor(color: Color | MainColor): color is MainColor {
  return (color as MainColor).id !== undefined;
}
