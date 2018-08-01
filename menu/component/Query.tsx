import { Query as AQuery, QueryProps } from 'react-apollo';
import * as React from 'react';
import Loader from './Loader';
import { FullCenter } from './FullCenter';

interface Props extends QueryProps {}

export class Query extends React.Component<Props, {}> {
  render() {
    const { children, ...props } = this.props;
    return (
      <AQuery {...props}>
        {result => {
          if (result.error) {
            return <FullCenter>Something went wrong.</FullCenter>;
          }
          if (result.loading) {
            return (
              <FullCenter>
                <Loader show delay />
              </FullCenter>
            );
          }
          return children(result);
        }}
      </AQuery>
    );
  }
}
