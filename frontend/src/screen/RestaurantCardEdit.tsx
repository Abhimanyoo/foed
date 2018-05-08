import * as React from 'react';
import gql from 'graphql-tag';
import { RestaurantCardCreateForm } from '../container/Restaurant/Card/CreateForm';
import { ScreenProps } from '../Props';
import { Body, ContentContainer, Content } from '@volst/ui-components';
import { Mutation } from 'react-apollo';
import { RestaurantTopMenu } from '../container/Restaurant/TopMenu';
import { FormikActions } from 'formik';
import { mutationFormat, connect, save } from '../utils/mutationFormat';
import { decimalToFloat } from '../utils/currency';
import { Query } from '../component/Query';
import { parseQueryResultsToForm } from '../utils/mutation';

const EDIT_CARD = gql`
  mutation updateCard($id: ID!, $data: CardUpdateInput!) {
    updateCard(where: { id: $id }, data: $data) {
      id
    }
  }
`;

const CARD = gql`
  query getCard($id: ID!) {
    card(where: { id: $id }) {
      id
      name
      categories {
        id
        name
        description
        ordering
        items {
          id
          name
          description
          price
          ordering
          subitems {
            id
            type
            name
            price
            ordering
          }
        }
      }
    }
  }
`;

const SCHEME = {
  restaurant: connect,
  categories: {
    __format: save,
    items: {
      __format: save,
      price: decimalToFloat,
      subitems: {
        __format: save,
        price: decimalToFloat,
      },
    },
  },
};

export class RestaurantCardEdit extends React.Component<ScreenProps, {}> {
  handleSubmit = async (
    values: any,
    actions: FormikActions<any>,
    mutate,
    id: string
  ) => {
    try {
      const restaurantId = this.props.match.params.restaurantId;
      values.restaurant = restaurantId;
      const newValues = mutationFormat(values, SCHEME);
      await mutate({
        variables: { id, data: newValues },
      });
      this.props.addNotification({
        key: 'requestSave',
        dismissAfter: 4000,
        message: 'Saved successfully',
      });
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
    const { match } = this.props;
    const restaurantId = match.params.restaurantId;
    const id = match.params.id;
    return (
      <Body>
        <RestaurantTopMenu id={restaurantId} />
        <ContentContainer>
          <Content>
            <Query query={CARD} variables={{ id }}>
              {({ data }) => (
                <Mutation mutation={EDIT_CARD}>
                  {mutate => (
                    <RestaurantCardCreateForm
                      onSubmit={(values, actions) =>
                        this.handleSubmit(values, actions, mutate, id)
                      }
                      initialValues={parseQueryResultsToForm(data.card, {})}
                    />
                  )}
                </Mutation>
              )}
            </Query>
          </Content>
        </ContentContainer>
      </Body>
    );
  }
}
