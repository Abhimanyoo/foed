import * as React from 'react';
import { Subheading } from 'component/Header';
import { ReceiptBackground } from 'component/ReceiptBackground';
import { OrderListItemItem } from './ListItemItem';

interface Props {
  order: any;
}

export class OrderListItem extends React.Component<Props, {}> {
  render() {
    const { order } = this.props;
    return (
      <div>
        <Subheading>#{order.number}</Subheading>
        <ReceiptBackground>
          {order.items.map(item => (
            <OrderListItemItem key={item.id} item={item} />
          ))}
        </ReceiptBackground>
      </div>
    );
  }
}
