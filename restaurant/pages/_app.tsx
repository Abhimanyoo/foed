import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
import { withApollo } from '../lib/withApollo';
import '../styles';

class MyApp extends App<{ apollo: ApolloClient<any> }> {
  public render() {
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
