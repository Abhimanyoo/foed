import { Mutation, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import cookie from 'cookie';
import redirect from '../lib/redirect';
import { Button } from '../component/Button';
import { Logo, LogoContainer, LogoText } from '../component/Logo';
import { Input, InputContainer, InputAddon } from '../component/Input';
import { LoginContainer, LoginForm, LoginError } from '../component/Login';
import { IconAt } from 'component/icon/At';
import { IconKey } from 'component/icon/Key';
import { ApolloClient } from 'apollo-boost';

const SIGN_IN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const _LoginBox = ({ client }: { client?: ApolloClient<any> }) => {
  let email, password;

  return (
    <LoginContainer>
      <LogoContainer>
        <Logo />
        <LogoText>Restaurant</LogoText>
      </LogoContainer>
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
          <LoginForm
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
            <InputContainer>
              <InputAddon>
                <IconAt />
              </InputAddon>
              <Input
                name="email"
                addonBefore
                placeholder="Your email"
                innerRef={node => {
                  email = node;
                }}
                type="email"
              />
            </InputContainer>
            <InputContainer>
              <InputAddon>
                <IconKey />
              </InputAddon>
              <Input
                name="password"
                addonBefore
                placeholder="Your password"
                innerRef={node => {
                  password = node;
                }}
                type="password"
              />
            </InputContainer>
            <Button>Log in</Button>
            {error && (
              <LoginError>No user found with that information.</LoginError>
            )}
          </LoginForm>
        )}
      </Mutation>
    </LoginContainer>
  );
};

export const LoginBox = withApollo(_LoginBox);
