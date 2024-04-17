import type { PaletteColorOptions } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    primaryDark?: PaletteColorOptions;
  }
  interface CommonColors {
    rubies: string;
    energy: string;
  }
  interface Palette {
    primaryDark: PaletteColor;
  }

  interface PaletteColor {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    social: true;
    containedSecondary: true;
  }
}
