import * as React from 'react';
import checkLoggedIn from '../lib/checkLoggedIn';
import { Text, Tone } from '@volst/ui-components';
import { LoginForm } from '../container/Account/LoginForm';
import { LoginBackground, LoginContainer, LoginLogo } from '../component/Login';
import { Mutation, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { FormikActions } from 'formik';
import { ApolloClient } from 'apollo-boost';
import { Link } from 'component/Link';
import { loginWithToken } from 'lib/login';
import redirect from 'lib/redirect';

const AUTHENTICATE_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

interface FormValues {
  email: string;
  password: string;
}

class Login extends React.Component<{ client: ApolloClient<any> }> {
  static async getInitialProps(context: any) {
    const { currentUser } = await checkLoggedIn(context.apolloClient);

    if (currentUser.id) {
      redirect(context, '/');
    }

    return {};
  }

  handleSubmit = async (
    values: FormValues,
    actions: FormikActions<FormValues>,
    mutate
  ) => {
    try {
      await mutate({
        variables: values,
      });
      return {};
    } catch (err) {
      actions.setSubmitting(false);
      if (err.graphQLErrors) {
        actions.setFieldError('password', 'Invalid credentials.');
      }
      throw err;
    }
  };

  render() {
    return (
      <LoginBackground>
        <LoginContainer>
          <LoginLogo />
          <Mutation
            mutation={AUTHENTICATE_USER}
            onCompleted={data => {
              loginWithToken(data.login.token, this.props.client);
            }}
          >
            {mutate => (
              <LoginForm
                initialValues={{ email: '', password: '' }}
                onSubmit={(values, actions) =>
                  this.handleSubmit(values, actions, mutate)
                }
              />
            )}
          </Mutation>
          <Text>
            <Link to="/register" link tone={Tone.Light} prefetch>
              Don't have an account yet?
            </Link>
          </Text>
          <Text>
            <Link to="/login/forgot" link tone={Tone.Light} prefetch>
              Forgot your password?
            </Link>
          </Text>
        </LoginContainer>
      </LoginBackground>
    );
  }
}

export default withApollo(Login);
