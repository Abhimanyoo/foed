import React from 'react';
import { observer } from 'mobx-react';
import { Header } from 'component/Header';
import { Store, PaymentStatus } from 'Store';
import { ReceiptEmpty } from 'component/ReceiptList';
import { FloatingButtons } from 'component/FloatingButtons';
import { Button } from 'component/Button';
import R from 'routes';
import { OrderReceipt } from './Receipt';
import { OrderOldReceipt } from './OldReceipt';
import { OrderPaymentNotification } from './PaymentNotification';

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
      <div>
        <Header store={store} subTitle="Your order" />
        {status && <OrderPaymentNotification status={status} />}
        {!hasItems &&
          !hasPreviousOrders && (
            <ReceiptEmpty>
              You have not added anything to your basket yet!
            </ReceiptEmpty>
          )}
        {hasItems && (
          <OrderReceipt
            order={store.order}
            onAdd={item => store.order.cloneItem(item)}
            onRemove={item => store.order.removeItem(item)}
          />
        )}
        {store.previousOrders.map(order => <OrderOldReceipt order={order} />)}
        {hasItems && (
          <FloatingButtons>
            <R.Link route="/payment" prefetch>
              <Button>Pay</Button>
            </R.Link>
          </FloatingButtons>
        )}
      </div>
    );
  }
}
