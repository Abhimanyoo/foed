import * as React from 'react';
import gql from 'graphql-tag';
import { RestaurantUserInviteForm } from '../container/Restaurant/User/InviteForm';
import { ScreenProps } from '../Props';
import {
  Body,
  ContentContainer,
  Content,
  Row,
  Col,
} from '@volst/ui-components';
import { Mutation } from 'react-apollo';
import { RestaurantTopMenu } from '../container/Restaurant/TopMenu';
import { FormikActions } from 'formik';
import R from '../routes';
import checkLoggedIn from 'lib/checkLoggedIn';
import redirect from 'lib/redirect';
import { AppHeader } from 'container/AppHeader';

const INVITE_USER = gql`
  mutation inviteUser($data: InviteUserInput!) {
    inviteUser(data: $data) {
      id
    }
  }
`;

export default class RestaurantUserInvite extends React.Component<
  ScreenProps,
  {}
> {
  static async getInitialProps(context: any) {
    const { currentUser } = await checkLoggedIn(context.apolloClient);

    if (!currentUser.id) {
      redirect(context, '/login');
    }

    return { currentUser, query: context.query };
  }

  handleSubmit = async (
    values: object,
    actions: FormikActions<any>,
    mutate
  ) => {
    try {
      await mutate({
        variables: { data: values },
      });
      this.props.addNotification({
        key: 'requestSave',
        dismissAfter: 4000,
        message: 'Invited successfully',
      });
      R.Router.push('/restaurant');
      return null;
    } catch (err) {
      actions.setSubmitting(false);
      if (err.graphQLErrors) {
        // TODO: show actual errors
        return;
      }
      throw err;
    }
  };

  render() {
    const { restaurantId } = this.props.query;
    return (
      <Body>
        <AppHeader user={this.props.currentUser} />
        <RestaurantTopMenu id={restaurantId} />
        <ContentContainer>
          <Content>
            <Row>
              <Col xs={12} sm={6} md={4}>
                <Mutation mutation={INVITE_USER}>
                  {mutate => (
                    <RestaurantUserInviteForm
                      onSubmit={(values, actions) =>
                        this.handleSubmit(values, actions, mutate)
                      }
                      initialValues={{
                        restaurantId,
                        email: '',
                        permission: 'EMPLOYEE',
                      }}
                    />
                  )}
                </Mutation>
              </Col>
            </Row>
          </Content>
          )}
        </ContentContainer>
      </Body>
    );
  }
}
