import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';  // Adjust the path to your theme file if necessary

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />  // This helps normalize the CSS across browsers
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;