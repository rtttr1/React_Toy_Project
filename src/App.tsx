import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { currentModeState } from './recoil/modeAtom';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const mode = useRecoilValue(currentModeState);
  return (
    <ThemeProvider theme={mode === 'LIGHT' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
