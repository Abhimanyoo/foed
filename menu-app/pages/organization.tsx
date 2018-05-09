import React from 'react';
import { withApollo } from '../withApollo';
import { Page } from '../component/Page';

interface Props {
  slug: string;
}

class Organization extends React.Component<Props, {}> {
  static getInitialProps({ query: { slug } }) {
    return { slug };
  }

  render() {
    return (
      <Page>
        <h1>Organization {this.props.slug}</h1>
      </Page>
    );
  }
}

export default withApollo(Organization);
