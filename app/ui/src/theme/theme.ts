import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5722', // Deep Orange
      contrastText: '#ffffff', // White
    },
    secondary: {
      main: '#9c27b0', // Deep Purple
    },
    background: {
      default: '#212121', // Dark Gray
      paper: '#424242', // Darker Gray
    },
    text: {
      primary: '#ffffff', // White
      secondary: '#e0e0e0', // Light Gray
    },
  },
});

export default theme;