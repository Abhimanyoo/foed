import * as React from 'react';
import { observer } from 'mobx-react';
import { Text, Tone } from '@volst/ui-components';
import { LoginBackground, LoginContainer, LoginLogo } from '../component/Login';
import { Mutation, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { ScreenProps } from '../Props';
import { RegisterInviteForm } from '../container/Account/RegisterInviteForm';
import { loginWithToken } from 'lib/login';
import { ApolloClient } from 'apollo-boost';

const REGISTER_USER = gql`
  mutation signupByInvite($data: SignupByInviteInput!) {
    signupByInvite(data: $data) {
      token
    }
  }
`;

@observer
class UserRegisterInvite extends React.Component<
  ScreenProps & { client: ApolloClient<any> },
  {}
> {
  handleSubmit = async (values, actions, mutate) => {
    try {
      const res = await mutate({
        variables: { data: values },
      });
      const token = res.data.signupByInvite.token;
      loginWithToken(token, this.props.client);
      return null;
    } catch (err) {
      if (err.graphQLErrors) {
        // TODO: show actual errors
        this.props.addNotification({
          key: 'requestError',
          dismissAfter: 4000,
          message: 'Invite token invalid',
        });
        actions.setSubmitting(false);
        return;
      }
      throw err;
    }
  };

  renderContent = () => {
    const { email, inviteToken } = this.props.query;
    if (this.props.currentUser) {
      return <Text tone={Tone.Light}>You are logged in already.</Text>;
    }
    return (
      <Mutation mutation={REGISTER_USER}>
        {mutate => (
          <RegisterInviteForm
            initialValues={{ email, inviteToken, name: '', password: '' }}
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

export default withApollo(UserRegisterInvite);
