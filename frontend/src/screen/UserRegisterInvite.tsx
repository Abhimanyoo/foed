import * as React from 'react';
import { observer } from 'mobx-react';
import { Text, Tone } from '@volst/ui-components';
import { LoginBackground, LoginContainer, LoginLogo } from '../component/Login';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ScreenProps } from '../Props';
import { RegisterInviteForm } from '../container/Account/RegisterInviteForm';

const REGISTER_USER = gql`
  mutation signupByInvite(
    $email: String!
    $name: String!
    $password: String!
    $inviteToken: String!
  ) {
    signupByInvite(
      email: $email
      name: $name
      password: $password
      inviteToken: $inviteToken
    ) {
      token
    }
  }
`;

@observer
export class UserRegisterInvite extends React.Component<ScreenProps, {}> {
  handleSubmit = async (values, actions, mutate) => {
    try {
      const res = await mutate({
        variables: values,
      });
      const token = res.data.signupByInvite.token;
      localStorage.setItem('authToken', token);
      this.props.refetchBootstrap();
      this.props.history.replace('/');
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
    const { email, inviteToken } = this.props.match.params;
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
