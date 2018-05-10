import { Fragment } from 'react';
import { hydrate, injectGlobal } from 'react-emotion';

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.tsx'
if (typeof window !== 'undefined') {
  hydrate((window as any).__NEXT_DATA__.ids);
}

injectGlobal`
  body {
    font: 11px menlo;
  }
`;

export const Page = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};
