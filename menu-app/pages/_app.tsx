import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { withApollo } from '../withApollo';
import { initStore, Store } from '../Store';
import { WithApolloProps } from 'next-with-apollo';
import '../styles';

class MyApp extends App<WithApolloProps<any>> {
  store: Store;

  constructor(props) {
    super(props);
    this.store = initStore();
  }

  componentDidMount() {
    // This is called only client-side, which is what we want
    this.store.initStorageSync();
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
