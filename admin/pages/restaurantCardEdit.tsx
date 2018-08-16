import * as React from 'react';
import gql from 'graphql-tag';
import { RestaurantCardCreateForm } from '../container/Restaurant/Card/CreateForm';
import { ScreenProps } from '../Props';
import { Body, ContentContainer, Content } from '@volst/ui-components';
import { Mutation } from 'react-apollo';
import { RestaurantTopMenu } from '../container/Restaurant/TopMenu';
import { FormikActions } from 'formik';
import {
  parseQueryToForm,
  parseFormToMutation,
  connect,
  save,
} from '@volst/graphql-form-helpers';
import { decimalToFloat } from '../utils/currency';
import { Query } from '../component/Query';
import checkLoggedIn from 'lib/checkLoggedIn';
import redirect from 'lib/redirect';
import { AppHeader } from 'container/AppHeader';

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
          optionGroups {
            id
            type
            name
            options {
              id
              name
              price
              ordering
            }
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
      optionGroups: {
        __format: save,
        options: {
          __format: save,
          price: decimalToFloat,
        },
      },
    },
  },
};

export default class RestaurantCardEdit extends React.Component<
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
    values: any,
    actions: FormikActions<any>,
    mutate,
    id: string
  ) => {
    try {
      const { restaurantId } = this.props.query;
      values.restaurant = restaurantId;
      const newValues = parseFormToMutation(values, SCHEME);
      await mutate({
        variables: { id, data: newValues },
      });
      this.props.addNotification({
        key: 'requestSave',
        dismissAfter: 4000,
        message: 'Saved successfully',
      });
      actions.setSubmitting(false);
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
    const { restaurantId, id } = this.props.query;
    return (
      <Body>
        <AppHeader user={this.props.currentUser} />
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
                      initialValues={parseQueryToForm(data.card, {})}
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
