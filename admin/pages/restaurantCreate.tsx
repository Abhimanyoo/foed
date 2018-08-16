import * as React from 'react';
import {
  Body,
  ContentContainer,
  Heading,
  Row,
  Col,
  Content,
} from '@volst/ui-components';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ScreenProps } from 'Props';
import { RestaurantCreateForm } from 'container/Restaurant/CreateForm';
import { parseFormToMutation, connect } from '@volst/graphql-form-helpers';
import checkLoggedIn from 'lib/checkLoggedIn';
import redirect from 'lib/redirect';
import R from '../routes';
import { AppHeader } from 'container/AppHeader';

const CREATE_RESTAURANT = gql`
  mutation createRestaurant($data: RestaurantCreateInput!) {
    createRestaurant(data: $data) {
      id
    }
  }
`;

const ALL_ORGANIZATIONS = gql`
  query allOrganizationNames {
    organizations {
      id
      name
    }
  }
`;

export default class RestaurantCreate extends React.Component<ScreenProps, {}> {
  static async getInitialProps(context: any) {
    const { currentUser } = await checkLoggedIn(context.apolloClient);

    if (!currentUser.id) {
      redirect(context, '/login');
    }

    return { currentUser, query: context.query };
  }

  handleSubmit = async (values: any, mutate) => {
    try {
      const newValues = parseFormToMutation(values, {
        organization: connect,
      });
      await mutate({
        variables: { data: newValues },
      });
      R.Router.push('/restaurant');
      return null;
    } catch (err) {
      if (err.graphQLErrors) {
        // TODO: show actual errors
        return;
      }
      throw err;
    }
  };

  render() {
    return (
      <Body>
        <AppHeader user={this.props.currentUser} />
        <ContentContainer>
          <Content>
            <Heading>Add restaurant</Heading>
            <Row>
              <Col xs={12} sm={6} md={4}>
                <Query query={ALL_ORGANIZATIONS}>
                  {orgResult => (
                    <Mutation mutation={CREATE_RESTAURANT}>
                      {mutate => (
                        <RestaurantCreateForm
                          onSubmit={values => this.handleSubmit(values, mutate)}
                          initialValues={{
                            name: '',
                            slug: '',
                            organization: '',
                          }}
                          organizationData={orgResult.data}
                        />
                      )}
                    </Mutation>
                  )}
                </Query>
              </Col>
            </Row>
          </Content>
        </ContentContainer>
      </Body>
    );
  }
}
