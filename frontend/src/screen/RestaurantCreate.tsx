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
import { ScreenProps } from '../Props';
import { RestaurantCreateForm } from '../container/Restaurant/CreateForm';
import { parseFormToMutation, connect } from '@volst/graphql-form-helpers';

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

export class RestaurantCreate extends React.Component<ScreenProps, {}> {
  handleSubmit = async (values: any, mutate, id?: string) => {
    try {
      const newValues = parseFormToMutation(values, {
        organization: connect,
      });
      await mutate({
        variables: { data: newValues },
      });
      this.props.history.push('/restaurant');
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
    const { match } = this.props;
    const id = match.params.id;
    return (
      <Body>
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
                          onSubmit={values =>
                            this.handleSubmit(values, mutate, id)
                          }
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
