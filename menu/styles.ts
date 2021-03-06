import { hydrate, injectGlobal } from 'react-emotion';

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.tsx'
if (typeof window !== 'undefined') {
  hydrate((window as any).__NEXT_DATA__.ids);
}

injectGlobal`
  html {
    height: 100%;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    color: #fff;
    margin: 0;
    background: #0398ab;
    background-attachment: fixed;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &.order-page:after {
      content: '';
      position: fixed;
      width: 40px;
      left: 0;
      top: 0;
      bottom: 0;
      background: #008c9e;
      z-index: -1;
    }
  }
  button {
    touch-action: manipulation;
  }
  button, a {
    -webkit-tap-highlight-color: transparent;
  }
`;
