import { hydrate, injectGlobal } from 'react-emotion';

export const theme = {
  primaryColor: '#40987a',
};

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.tsx'
if (typeof window !== 'undefined') {
  hydrate((window as any).__NEXT_DATA__.ids);
}

injectGlobal`
  #__next {
    height: 100%;
  }
`;
