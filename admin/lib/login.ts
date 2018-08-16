import cookie from 'cookie';
import { ApolloClient } from 'apollo-boost';
import Router from 'next/router';

export function loginWithToken(token: string, apolloClient: ApolloClient<any>) {
  document.cookie = cookie.serialize('token', token, {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  });
  apolloClient.cache.reset().then(() => {
    Router.replace('/');
  });
}
