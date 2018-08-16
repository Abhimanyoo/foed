import * as React from 'react';
import { observer } from 'mobx-react';
import { Text, Tone } from '@volst/ui-components';
import { LoginBackground, LoginContainer, LoginLogo } from '../component/Login';
import { Mutation, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { ScreenProps } from '../Props';
import { RegisterForm } from '../container/Account/RegisterForm';
import { loginWithToken } from 'lib/login';
import { ApolloClient } from 'apollo-boost';

const REGISTER_USER = gql`
  mutation signup($data: SignupInput!) {
    signup(data: $data) {
      token
    }
  }
`;

@observer
class UserRegister extends React.Component<
  ScreenProps & { client: ApolloClient<any> }
> {
  handleSubmit = async (values, actions, mutate) => {
    try {
      const res = await mutate({
        variables: { data: values },
      });
      const token = res.data.signup.token;
      loginWithToken(token, this.props.client);
      return null;
    } catch (err) {
      if (err.graphQLErrors) {
        // TODO: show actual errors
        this.props.addNotification({
          key: 'requestError',
          dismissAfter: 4000,
          message: 'Something went wrong. Is your email already in use?',
        });
        actions.setSubmitting(false);
        return;
      }
      throw err;
    }
  };

  renderContent = () => {
    if (this.props.currentUser) {
      return <Text tone={Tone.Light}>You are logged in already.</Text>;
    }
    return (
      <Mutation mutation={REGISTER_USER}>
        {mutate => (
          <RegisterForm
            initialValues={{ email: '', name: '', password: '' }}
            onSubmit={(values, actions) =>
              this.handleSubmit(values, actions, mutate)
            }
          />
        )}
      </Mutation>
    );
  };

  render() {
    return (
      <LoginBackground>
        <LoginContainer>
          <LoginLogo />
          {this.renderContent()}
        </LoginContainer>
      </LoginBackground>
    );
  }
}

export default withApollo(UserRegister);
