import React from 'react';
import { ThemeProvider } from 'styled-components';
import test from '@hooks/test';
import { theme } from '@styles/theme';
import GlobalStyle from './styles/global-styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>test</div>
    </ThemeProvider>
  );
}

export default App;
