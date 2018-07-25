import { Mutation, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import cookie from 'cookie';
import redirect from '../lib/redirect';
import { Button } from '../component/Button';

const SIGN_IN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const _LoginBox = ({ client }) => {
  let email, password;

  return (
    <Mutation
      mutation={SIGN_IN}
      onCompleted={data => {
        document.cookie = cookie.serialize('token', data.login.token, {
          maxAge: 30 * 24 * 60 * 60, // 30 days
        });
        client.cache.reset().then(() => {
          redirect({}, '/');
        });
      }}
      onError={error => {
        console.log(error);
      }}
    >
      {(login, { error }) => (
        <form
          onSubmit={e => {
            e.preventDefault();
            e.stopPropagation();

            login({
              variables: {
                email: email.value,
                password: password.value,
              },
            });

            email.value = password.value = '';
          }}
        >
          {error && <p>No user found with that information.</p>}
          <input
            name="email"
            placeholder="Email"
            ref={node => {
              email = node;
            }}
          />
          <br />
          <input
            name="password"
            placeholder="Password"
            ref={node => {
              password = node;
            }}
            type="password"
          />
          <br />
          <Button>Login</Button>
        </form>
      )}
    </Mutation>
  );
};

export const LoginBox = withApollo(_LoginBox);
