import * as styled from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = styled.createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0 auto;

    font-size: 62.5%;
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
  }

  body {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;

    cursor: pointer;
  }

  button {
    font: inherit;

    background: none;
    cursor: pointer;
    border: none;
  }

  select {
    cursor: pointer;

    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }
`;

export default GlobalStyle;
