const palette = {
  NONE: "none",

  PRIMARY_50: "#FEF3F2",
  PRIMARY_100: "#FDE4E3",
  PRIMARY_200: "#FCCECC",
  PRIMARY_300: "#F9ACA8",
  PRIMARY_400: "#F36E67",

  MONO_BLACK: "#000000",
  MONO_WHITE: "#FFFFFF",

  GRAY_50: "#F3F3F3",
  GRAY_100: "#E8E8E8",
  GRAY_200: "#D1D1D1",
  GRAY_300: "#BBBBBB",
  GRAY_400: "#A6A6A6",
  GRAY_500: "#868686",
  GRAY_600: "#727272",
  GRAY_700: "#5E5E5E",
  GRAY_800: "#4B4B4B",
  GRAY_900: "#282828",

  GREEN_50: "#EAF6ED",
  GREEN_100: "#D3EFDA",
  GREEN_200: "#A6DFB7",
  GREEN_300: "#7FD99A",
  GREEN_400: "#06C167",
  GREEN_500: "#009A51",

  RED_50: "#FFF0EE",
  RED_100: "#FFE1DE",
  RED_200: "#FFC2BC",
  RED_300: "#FFB2AB",
  RED_400: "#FC7F79",
  RED_500: "#F83445",
} as const;

export type PaletteType = keyof typeof palette;

export const getColorFromName = (colorName: PaletteType = "NONE") => {
  return palette[colorName];
};

export default palette;
