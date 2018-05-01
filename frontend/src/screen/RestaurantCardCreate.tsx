import * as React from 'react';
import gql from 'graphql-tag';
import { RestaurantCardCreateForm } from '../container/Restaurant/Card/CreateForm';
import { ScreenProps } from '../Props';
import { Body, ContentContainer, Content } from '@volst/ui-components';
import { Mutation } from 'react-apollo';
import { RestaurantTopMenu } from '../container/Restaurant/TopMenu';
import { FormikActions } from 'formik';
import { mutationFormat, connect, create } from '../utils/mutationFormat';
import { decimalToFloat } from '../utils/currency';

const CREATE_CARD = gql`
  mutation createCard($data: CardCreateInput!) {
    createCard(data: $data) {
      id
    }
  }
`;

const INITIAL_VALUES = {
  name: '',
  categories: [],
};

export class RestaurantCardCreate extends React.Component<ScreenProps, {}> {
  handleSubmit = async (values: any, actions: FormikActions<any>, mutate) => {
    try {
      const restaurantId = this.props.match.params.restaurantId;
      values.restaurant = restaurantId;
      const newValues = mutationFormat(values, {
        restaurant: connect,
        categories: {
          __format: create,
          items: {
            __format: create,
            price: decimalToFloat,
            subitems: {
              __format: create,
              price: decimalToFloat,
            },
          },
        },
      });
      await mutate({
        variables: { data: newValues },
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
    const restaurantId = this.props.match.params.restaurantId;
    return (
      <Body>
        <RestaurantTopMenu id={restaurantId} />
        <ContentContainer>
          <Content>
            <Mutation mutation={CREATE_CARD}>
              {mutate => (
                <RestaurantCardCreateForm
                  onSubmit={(values, actions) =>
                    this.handleSubmit(values, actions, mutate)
                  }
                  initialValues={INITIAL_VALUES}
                />
              )}
            </Mutation>
          </Content>
        </ContentContainer>
      </Body>
    );
  }
}
