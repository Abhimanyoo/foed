import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { withApollo } from '../lib/withApollo';
import { WithApolloProps } from 'next-with-apollo';
import '../styles';

class MyApp extends App<WithApolloProps<any>> {
  componentDidMount() {
    // Hack to enable CSS active states on iOS.
    document.addEventListener('touchstart', () => {});
  }

  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
