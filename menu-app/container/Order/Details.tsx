import React from 'react';
import { observer } from 'mobx-react';
import { Header } from '../../component/Header';
import { Store, PaymentStatus } from '../../Store';
import { ReceiptEmpty } from '../../component/ReceiptList';
import { Subheading } from '../../component/LogoHeader';
import { FloatingButtons } from '../../component/FloatingButtons';
import { Button } from '../../component/Button';
import R from '../../routes';
import { OrderReceipt } from './Receipt';
import { OrderPaymentNotification } from './PaymentNotification';

interface Props {
  store: Store;
}

@observer
export class OrderDetails extends React.Component<Props, {}> {
  render() {
    const { store } = this.props;
    const hasItems = store.order.groupedItems.length > 0;
    return (
      <div>
        <Header store={store} />
        <Subheading>Your order</Subheading>
        {store.order.paymentStatus !== PaymentStatus.None && (
          <OrderPaymentNotification status={store.order.paymentStatus} />
        )}
        {!hasItems && (
          <ReceiptEmpty>You do not have any items right now!</ReceiptEmpty>
        )}
        <OrderReceipt
          order={store.order}
          onAdd={item => store.order.cloneItem(item)}
          onRemove={item => store.order.removeItem(item)}
        />
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
