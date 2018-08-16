import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { withApollo } from '../lib/withApollo';
import { WithApolloProps } from 'next-with-apollo';
import { VolstTheme, Body, AppContainer } from '@volst/ui-components';
import { theme } from 'styles';

class MyApp extends App<WithApolloProps<any>> {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <VolstTheme theme={theme}>
            <AppContainer>
              <Body>
                <Component {...pageProps} />
              </Body>
            </AppContainer>
          </VolstTheme>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
