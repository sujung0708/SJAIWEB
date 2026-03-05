import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E8447A',
      light: '#F4B8C1',
      dark: '#C2185B',
    },
    secondary: {
      main: '#8B5CF6',
      light: '#A78BFA',
      dark: '#6D28D9',
    },
    error: {
      main: '#FF4500',
      light: '#FFAA8A',
    },
    background: {
      default: '#D6E4F0',
      paper: '#F5F5F5',
    },
    text: {
      primary: '#1A1A2E',
      secondary: '#4A4A6A',
      disabled: '#9B9BB0',
    },
    custom: {
      gradientStart: '#8B5CF6',
      gradientMid: '#D946A8',
      gradientEnd: '#E8447A',
      bgSky: '#3B5BDB',
      accentMist: '#FFCABA',
      border: '#E2D9F3',
      borderStrong: '#8B5CF6',
      shadow: 'rgba(139, 92, 246, 0.20)',
      overlay: 'rgba(26, 26, 46, 0.60)',
      highlight: '#B0B8C1',
    },
  },
  typography: {
    fontFamily: '"Pretendard", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 900,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
});

export default theme;
