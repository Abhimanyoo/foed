import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { FloatingButtons } from '../../component/FloatingButtons';
import { Button } from '../../component/Button';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Store, PaymentStatus } from '../../Store';
import R from '../../routes';

const PLACE_ORDER = gql`
  mutation placeOrder($data: PlaceOrderInput!) {
    placeOrder(data: $data) {
      id
    }
  }
`;

interface Props {
  store: Store;
}

@observer
export class PaymentButton extends React.Component<Props, {}> {
  @observable isSubmitting = false;

  handlePay = async mutate => {
    const { store } = this.props;
    this.isSubmitting = true;
    try {
      await mutate({
        variables: {
          data: {
            items: store.order.items.map(item => ({
              cardItem: item.cardItem.id,
              subitems: item.subitems.map(subitem => subitem.id),
              restaurant: item.restaurantId,
            })),
            tip: store.order.tip,
          },
        },
      });
      store.order.paymentStatus = PaymentStatus.Success;
    } catch (err) {
      console.error('Error with payment', err);
      store.order.paymentStatus = PaymentStatus.Error;
    }
    this.isSubmitting = false;
    R.Router.replaceRoute('/order');
  };

  render() {
    return (
      <Mutation mutation={PLACE_ORDER}>
        {mutate => (
          <FloatingButtons>
            <Button
              onClick={() => this.handlePay(mutate)}
              disabled={this.isSubmitting}
            >
              Pay
            </Button>
          </FloatingButtons>
        )}
      </Mutation>
    );
  }
}
