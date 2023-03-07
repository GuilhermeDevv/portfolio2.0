import { RoutePage } from './routes/Routes';
import { GlobalStyle } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Black, Light } from './theme/theme';
import ToggleTheme from './components/ToggleTheme/ToggleTheme';
import { useState } from 'react';

export function App() {
  const [themeCurrent, setTheme] = useState<boolean>(false);
  function toggleTheme() {
    setTheme(!themeCurrent);
  }

  return (
    <>
      <ThemeProvider theme={themeCurrent ? Light : Black}>
        <GlobalStyle />
        <RoutePage />
        <ToggleTheme toggleThemeFn={toggleTheme} />
      </ThemeProvider>
    </>
  );
}
