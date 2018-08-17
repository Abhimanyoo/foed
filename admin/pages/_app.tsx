import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { withApollo } from '../lib/withApollo';
import { WithApolloProps } from 'next-with-apollo';
import { VolstTheme, AppContainer } from '@volst/ui-components';
import { theme } from 'styles';
import { NotificationArea } from '../component/NotificationArea';

class MyApp extends App<WithApolloProps<any>> {
  private notificationRef: NotificationArea | null = null;

  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <VolstTheme theme={theme}>
            <AppContainer>
              <Component
                {...pageProps}
                addNotification={msg =>
                  this.notificationRef!.addNotification(msg)
                }
              />
              <NotificationArea ref={c => (this.notificationRef = c as any)} />
            </AppContainer>
          </VolstTheme>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
