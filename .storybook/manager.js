// ./storybook/manager.ts
import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const theme = create({
  base: "light", // this will inherit the base properties of Storybooks'light theme

  // Point color
  colorSecondary: "#F36E67",

  // UI
  appBg: "#FEF3F2",
  appContentBg: "#FFFFFF",
  appBorderColor: "rgba(0,0,0,0.1)",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Pretendard", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#333333",
  textInverseColor: "#FFFFFF",
  textMutedColor: "#666666",

  // Toolbar default and active colors
  barTextColor: "#333333",
  barSelectedColor: "#FF5414",
  barBg: "#FEF3F2",

  // Form colors
  inputBg: "#FFFFFF",
  inputBorder: "rgba(0,0,0,.3)",
  inputTextColor: "#333333",
  inputBorderRadius: 4,

  // Brand assets
  brandTitle: "DJ 심청이",
  brandUrl: "https://www.simblue.kro.kr/",
  brandImage: "https://i.postimg.cc/TYrJcvXx/image.png",
});

addons.setConfig({
  theme,
});
