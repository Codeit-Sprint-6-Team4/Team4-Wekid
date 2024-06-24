import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Nexon';
    src: url('src/assets/fonts/NEXON Lv1 Gothic OTF.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('src/assets/fonts/PretendardVariable.woff2') format('woff2');
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-width: 375px;
    line-height: normal;
    font-size: 100%;
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
    font-size: 100%;
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
`;

export default GlobalStyle;
