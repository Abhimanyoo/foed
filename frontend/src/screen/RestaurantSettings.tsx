import * as React from 'react';
import {
  Body,
  ContentContainer,
  Row,
  Col,
  Content,
} from '@volst/ui-components';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ScreenProps } from '../Props';
import { RestaurantSettingsForm } from '../container/Restaurant/SettingsForm';
import { parseQueryResultsToForm } from '../utils/mutation';
import { RestaurantTopMenu } from '../container/Restaurant/TopMenu';

const UPDATE_RESTAURANT = gql`
  mutation updateRestaurant($id: ID, $data: RestaurantUpdateInput!) {
    updateRestaurant(where: { id: $id }, data: $data) {
      id
    }
  }
`;

const RESTAURANT = gql`
  query getRestaurant($id: ID!) {
    restaurant(where: { id: $id }) {
      id
      name
    }
  }
`;

export class RestaurantSettings extends React.Component<ScreenProps, {}> {
  handleSubmit = async (values: object, mutate, id?: string) => {
    try {
      await mutate({
        variables: { id, data: values },
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
        <RestaurantTopMenu id={id} />
        <ContentContainer>
          <Query query={RESTAURANT} variables={{ id }}>
            {({ data }) => (
              <Content>
                <Row>
                  <Col xs={12} sm={6} md={4}>
                    <Mutation mutation={UPDATE_RESTAURANT}>
                      {mutate => (
                        <RestaurantSettingsForm
                          onSubmit={values =>
                            this.handleSubmit(values, mutate, id)
                          }
                          initialValues={parseQueryResultsToForm(
                            data.restaurant,
                            { name: '' }
                          )}
                        />
                      )}
                    </Mutation>
                  </Col>
                </Row>
              </Content>
            )}
          </Query>
        </ContentContainer>
      </Body>
    );
  }
}
