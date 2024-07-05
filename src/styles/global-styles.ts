import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { media } from '@utils/media';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Nexon';
    src: url('/public/assets/fonts/NEXON Lv1 Gothic OTF.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/public/assets/fonts/PretendardVariable.woff2') format('woff2');
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    min-width: 375px;
    line-height: normal;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  input,
  textarea,
  select,
  table,
  button,
  code {
    font-family: 'Pretendard';
  }

  h1 {
    font-size: 2em;
    font-weight: bold;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
}

h2 {
    font-size: 1.5em; 
    font-weight: bold;
    margin-top: 0.75em;
    margin-bottom: 0.75em;
}

h3 {
    font-size: 1.17em; 
    font-weight: bold;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
}

h4 {
    font-size: 1em;
    font-weight: bold;
    margin-top: 1.12em;
    margin-bottom: 1.12em;
}

h5 {
    font-size: 0.83em;
    font-weight: bold;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
}

h6 {
    font-size: 0.67em; 
    font-weight: bold;
    margin-top: 1.67em;
    margin-bottom: 1.67em;
}

strong {
    font-weight: bold;
}

em {
    font-style: italic;
}

u {
    text-decoration: underline;
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .hidden,
  [hidden] {
    display: none !important;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: none;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }

  select,
  input,
  textarea,
  button {
    -webkit-appearance: none;
  }

  input[type="number"] {
      -moz-appearance: textfield;
  }

  input:disabled {
    background-color: rgba(255, 255, 255, 0);
    cursor: not-allowed;
  }

  select {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  select::-ms-expand {
    display: none;
  }

  input,
  textarea {
    font-size: inherit;
    border: 0;
  }

  input:focus-visible,
  textarea:focus-visible {
    outline: 1px solid;
  }

  input::placeholder,
  textarea::placeholder {
    /* Chrome, Safari, Firefox */
    color: #000;
    opacity: 1;
  }

  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    /* IE, Edge */
    color: #000;
    opacity: 1;
  }

  input[readonly]::placeholder,
  textarea[readonly]::placeholder,
  input:disabled::placeholder,
  textarea:disabled::placeholder {
    /* Chrome, Safari, Firefox */
    color: #000;
    opacity: 1;
  }

  input[readonly]:-ms-input-placeholder,
  textarea[readonly]:-ms-input-placeholder,
  input:disabled:-ms-input-placeholder,
  textarea:disabled:-ms-input-placeholder {
    /* IE, Edge */
    color: #000;
    opacity: 1;
  }
  i {
    font-style: italic; /* 기본 기울임꼴 설정 */
  }

  input::-ms-clear,
  input::-ms-reveal,
  textarea::-ms-clear,
  textarea::-ms-reveal {
    /* IE, Edge */
    display: none;
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  .layoutWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 6rem;
    margin: 6rem auto;
    max-width: 1300px;
    width: 100%;
    flex: 1;

  ${media('tablet')`
    margin: 4rem auto;
    padding: 0 4rem;
  `}
  ${media('mobile')`
    margin: 3.2rem auto;
    padding: 0rem 2rem;
  `}
  }

  .blind {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

export default GlobalStyle;
