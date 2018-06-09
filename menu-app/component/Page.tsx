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
    background: linear-gradient(135deg, rgba(122,185,197,1) 0%,rgba(62,147,164,1) 100%);
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
      background: rgba(62,147,164,0.59);
      z-index: -1;
    }
  }
`;

export const Page = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};
