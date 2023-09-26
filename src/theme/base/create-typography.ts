import { TypographyVariants } from '@mui/material/styles';

interface ITypography
  extends Omit<
    TypographyVariants,
    | 'fontSize'
    | 'fontWeightLight'
    | 'fontWeightRegular'
    | 'fontWeightMedium'
    | 'fontWeightBold'
    | 'htmlFontSize'
    | 'pxToRem'
  > {}

const baseFontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',');

const headingFontFamily = ['"Plus Jakarta Sans"', 'sans-serif'].join(',');

const fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

export const createTypography = (): ITypography => {
  return {
    fontFamily: baseFontFamily,
    body1: {
      fontSize: '1rem',
      fontWeight: fontWeights.normal,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: fontWeights.normal,
      lineHeight: 1.57,
    },
    button: {
      fontWeight: fontWeights.semiBold,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: fontWeights.medium,
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: fontWeights.medium,
      lineHeight: 1.57,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: fontWeights.medium,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: fontWeights.semiBold,
      letterSpacing: '0.5px',
      lineHeight: 2.5,
      textTransform: 'uppercase',
    },
    h1: {
      fontFamily: headingFontFamily,
      fontWeight: fontWeights.bold,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: headingFontFamily,
      fontWeight: fontWeights.bold,
      fontSize: '3rem',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: headingFontFamily,
      fontWeight: fontWeights.bold,
      fontSize: '2.25rem',
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: headingFontFamily,
      fontWeight: fontWeights.bold,
      fontSize: '2rem',
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: headingFontFamily,
      fontWeight: fontWeights.bold,
      fontSize: '1.5rem',
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: headingFontFamily,
      fontWeight: fontWeights.bold,
      fontSize: '1.125rem',
      lineHeight: 1.2,
    },
  };
};
