import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './container/App';
import { theme } from './styles';
import { BrowserRouter } from 'react-router-dom';
import { VolstTheme } from '@volst/ui-components';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import './i18n';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  }
  return headers;
});

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URL,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  link: errorLink.concat(authLink).concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <VolstTheme theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </VolstTheme>
  </ApolloProvider>,
  document.getElementById('root')
);
