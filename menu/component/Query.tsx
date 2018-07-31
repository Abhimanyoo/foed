import { Query as AQuery, QueryProps } from 'react-apollo';
import * as React from 'react';

interface Props extends QueryProps {}

export class Query extends React.Component<Props, {}> {
  render() {
    const { children, ...props } = this.props;
    return (
      <AQuery {...props}>
        {result => {
          if (result.loading) {
            return <div>Loading…</div>;
          }
          // TODO: show something when there is an error
          return children(result);
        }}
      </AQuery>
    );
  }
}
