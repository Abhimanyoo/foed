import { Fragment } from 'react';
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
    background: #1b1e25 url('/static/bg.jpg') no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0.1px;
  }
`;

export const Page = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};
