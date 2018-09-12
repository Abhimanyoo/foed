import React from 'react';
import { observer } from 'mobx-react';
import { Query } from 'react-apollo';
import { Header } from 'component/Header';
import { Store, PaymentStatus } from 'Store';
import { Receipt } from 'component/Receipt';
import { Text } from 'component/Text';
import { ReceiptEmpty, ReceiptEmptyMessage } from 'component/ReceiptList';
import { FloatingButtons } from 'component/FloatingButtons';
import { Button } from 'component/Button';
import R from 'routes';
import { OrderReceipt } from './Receipt';
import { OrderOldReceipt } from './OldReceipt';
import { OrderPaymentNotification } from './PaymentNotification';
import { uniqueId } from 'lib/uniqueId';
import gql from 'graphql-tag';

interface Props {
  store: Store;
  status: PaymentStatus;
}

const PREVIOUS_ORDERS = gql`
  query previousOrders($ids: [ID!]!) {
    orders(ids: $ids) {
      id
      items {
        id
        completedAt
      }
    }
  }
`;

@observer
export class OrderDetails extends React.Component<Props, {}> {
  render() {
    const { store, status } = this.props;
    const hasItems = store.order.groupedItems.length > 0;
    const hasPreviousOrders = store.previousOrders.length > 0;
    return (
      <React.Fragment>
        <Header store={store} title="Orders" />
        <main>
          {status && <OrderPaymentNotification status={status} />}
          {(hasItems || !hasPreviousOrders) && (
            <React.Fragment>
              {hasItems ? (
                <OrderReceipt
                  order={store.order}
                  onAdd={item => store.order.cloneItem(item)}
                  onRemove={item => store.order.removeItem(item)}
                  hasPreviousOrders={hasPreviousOrders}
                />
              ) : (
                <Receipt>
                  <ReceiptEmpty>
                    <Text size="big" tone="light">
                      Basket is empty.
                    </Text>
                    {!hasPreviousOrders && (
                      <ReceiptEmptyMessage>
                        You can add items when viewing a restaurant.
                      </ReceiptEmptyMessage>
                    )}
                  </ReceiptEmpty>
                </Receipt>
              )}
            </React.Fragment>
          )}
          <Query
            query={PREVIOUS_ORDERS}
            variables={{
              ids: store.previousOrders.map(order => order.id).filter(Boolean),
            }}
            pollInterval={5000}
          >
            {result =>
              store.previousOrders.map(order => (
                <OrderOldReceipt
                  key={uniqueId()}
                  order={order}
                  orderExtra={
                    !result.loading && !result.error
                      ? result.data.orders.find(
                          rOrder => rOrder.id === order.id
                        )
                      : null
                  }
                />
              ))
            }
          </Query>
          {hasItems && (
            <FloatingButtons>
              <R.Link route="/payment" prefetch>
                <Button tone="secondary">Pay</Button>
              </R.Link>
            </FloatingButtons>
          )}
        </main>
      </React.Fragment>
    );
  }
}
