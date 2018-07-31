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

const INVITE_USER = gql`
  mutation inviteUser($data: InviteUserInput!) {
    inviteUser(data: $data) {
      id
    }
  }
`;

export class RestaurantUserInvite extends React.Component<ScreenProps, {}> {
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
      this.props.history.push('/restaurant');
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
    const restaurantId = this.props.match.params.restaurantId;
    return (
      <Body>
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
