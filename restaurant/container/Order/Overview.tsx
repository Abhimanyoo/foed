import { OrderListItem } from './ListItem';
import { ReceiptEmpty } from 'component/ReceiptList';

interface Props {
  orders: any[];
  refetch: () => void;
}

export const OrderOverview = ({ orders, refetch }: Props) => (
  <div>
    {orders.length === 0 && <ReceiptEmpty>No open orders!</ReceiptEmpty>}
    {orders.map(order => (
      <OrderListItem key={order.id} order={order} refetch={refetch} />
    ))}
  </div>
);
