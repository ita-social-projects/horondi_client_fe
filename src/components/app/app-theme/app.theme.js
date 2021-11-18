import { createTheme } from '@material-ui/core';
import { paletteGenerator } from './app.pallete';
import appTypography from './app.typography';

export const theme = (colorSchema) => {
  const palette = paletteGenerator(colorSchema);

  return createTheme({
    palette,
    typography: appTypography
  });
};
