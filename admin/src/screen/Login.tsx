import * as React from 'react';
import { Link, Text, Tone } from '@volst/ui-components';
import { LoginForm } from '../container/Account/LoginForm';
import { LoginBackground, LoginContainer, LoginLogo } from '../component/Login';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { FormikActions } from 'formik';

const AUTHENTICATE_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export interface Props {
  refetchBootstrap: Function;
}

interface FormValues {
  email: string;
  password: string;
}

export class Login extends React.Component<Props, {}> {
  handleSubmit = async (
    values: FormValues,
    actions: FormikActions<FormValues>,
    mutate
  ) => {
    try {
      const res = await mutate({
        variables: values,
      });
      const token = res.data.login.token;
      localStorage.setItem('authToken', token);
      this.props.refetchBootstrap();
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
          <Mutation mutation={AUTHENTICATE_USER}>
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
            <Link to="/register" link tone={Tone.Light}>
              Don't have an account yet?
            </Link>
          </Text>
          <Text>
            <Link to="/login/forgot" link tone={Tone.Light}>
              Forgot your password?
            </Link>
          </Text>
        </LoginContainer>
      </LoginBackground>
    );
  }
}
