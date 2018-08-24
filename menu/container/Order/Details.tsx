import React from 'react';
import { observer } from 'mobx-react';
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

interface Props {
  store: Store;
  status: PaymentStatus;
}

@observer
export class OrderDetails extends React.Component<Props, {}> {
  render() {
    const { store, status } = this.props;
    const hasItems = store.order.groupedItems.length > 0;
    const hasPreviousOrders = store.previousOrders.length > 0;
    return (
      <React.Fragment>
        <Header store={store} subTitle="Your order" />
        <main>
          {status && <OrderPaymentNotification status={status} />}
          {!hasItems &&
            !hasPreviousOrders && (
              <Receipt>
                <ReceiptEmpty>
                  <Text size="big" tone="light">
                    Basket is empty.
                  </Text>
                  <ReceiptEmptyMessage>
                    You can add items when viewing a restaurant.
                  </ReceiptEmptyMessage>
                </ReceiptEmpty>
              </Receipt>
            )}
          {hasItems && (
            <OrderReceipt
              order={store.order}
              onAdd={item => store.order.cloneItem(item)}
              onRemove={item => store.order.removeItem(item)}
            />
          )}
          {store.previousOrders.map(order => (
            <OrderOldReceipt key={uniqueId()} order={order} />
          ))}
          {hasItems && (
            <FloatingButtons>
              <R.Link route="/payment" prefetch>
                <Button>Pay</Button>
              </R.Link>
            </FloatingButtons>
          )}
        </main>
      </React.Fragment>
    );
  }
}
