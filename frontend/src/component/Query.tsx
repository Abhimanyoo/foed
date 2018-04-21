import { Query as AQuery, QueryProps } from 'react-apollo';
import * as React from 'react';
import { Loader } from '@volst/ui-components';
import { FullCenter } from './FullCenter';

interface Props extends QueryProps {}

export class Query extends React.Component<Props, {}> {
  render() {
    const { children, ...props } = this.props;
    return (
      <AQuery {...props}>
        {result => {
          if (result.loading) {
            return (
              <FullCenter>
                <Loader show delay />
              </FullCenter>
            );
          }
          // TODO: show something when there is an error
          return children(result);
        }}
      </AQuery>
    );
  }
}
