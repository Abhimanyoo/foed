import React from 'react';
import { observer } from 'mobx-react';
import { Header } from '../../component/Header';
import { OrderListItem } from './ListItem';
import { Store } from 'Store';
import { ReceiptBackground } from '../../component/ReceiptBackground';
import { ReceiptEmpty } from '../../component/ReceiptList';
import { OrderPricing } from './Pricing';

interface Props {
  store: Store;
}

@observer
export class OrderDetails extends React.Component<Props, {}> {
  handleAdd = item => {
    const { store } = this.props;
    store.order.addItem(item);
  };

  handleRemove = item => {
    const { store } = this.props;
    store.order.removeItem(item);
  };

  render() {
    const { store } = this.props;
    return (
      <div>
        <Header store={store} />
        <ReceiptBackground>
          {!store.order.groupedItems.length && (
            <ReceiptEmpty>You do not have any items right now!</ReceiptEmpty>
          )}
          {store.order.groupedItems.map(groupedItem => (
            <OrderListItem
              item={groupedItem.item}
              amount={groupedItem.amount}
              store={store}
              onAdd={this.handleAdd}
              onRemove={this.handleRemove}
            />
          ))}
          <OrderPricing store={store} />
        </ReceiptBackground>
      </div>
    );
  }
}
