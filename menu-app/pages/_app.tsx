import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { withApollo } from '../withApollo';
import { initStore, Store } from '../Store';
import { WithApolloProps } from 'next-with-apollo';

interface Props extends WithApolloProps<any> {
  Component: any;
  pageProps: object;
}

class MyApp extends App {
  props: Props;
  store: Store;

  constructor(props: Props) {
    super(props);
    this.store = initStore();
  }

  public render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} store={this.store} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
