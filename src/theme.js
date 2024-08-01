// src/theme.js or wherever you prefer to keep your theme settings
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',  // Example color
    },
    secondary: {
      main: '#19857b',  // Example color
    },
    // Add other customizations here
  },
  // You can also customize typography, breakpoints, etc.
});

export default theme;
