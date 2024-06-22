import React from 'react';
import test from '@hooks/test';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
      </div>
    </ThemeProvider>
  );
}

export default App;
