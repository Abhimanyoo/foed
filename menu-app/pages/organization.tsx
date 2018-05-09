import React from 'react';
import { withApollo } from '../withApollo';
import { Page } from '../component/Page';

interface Props {
  id: string;
}

class Organization extends React.Component<Props, {}> {
  static getInitialProps({ query: { id } }) {
    return { id };
  }

  render() {
    return (
      <Page>
        <h1>Organization {this.props.id}</h1>
      </Page>
    );
  }
}

export default withApollo(Organization);
