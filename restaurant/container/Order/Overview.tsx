import { OrderListItem } from './ListItem';

interface Props {
  orders: any[];
}

export const OrderOverview = ({ orders }: Props) => (
  <div>
    {orders.map(order => <OrderListItem key={order.id} order={order} />)}
  </div>
);
