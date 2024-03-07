import type { PaletteColorOptions } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    primaryDark?: PaletteColorOptions;
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    social: true;
  }
}
