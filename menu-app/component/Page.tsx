import { Fragment } from 'react';
import Head from 'next/head';

// TODO https://github.com/zeit/next.js/tree/master/examples/with-apollo/

export const Page = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="manifest" href="/static/manifest.json" />
      </Head>
      <style jsx global>{`
        body {
          background: #000;
          font: 11px menlo;
          color: #fff;
        }
      `}</style>
      {children}
    </Fragment>
  );
};
