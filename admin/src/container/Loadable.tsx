import React from 'react';
import L, { LoadingComponentProps } from 'react-loadable';

export const Loadable = loader =>
  L({
    delay: 500,
    loader,
    loading(props: LoadingComponentProps) {
      if (props.pastDelay) {
        return <div>Loading…</div>;
      }
      return null;
    },
  });
