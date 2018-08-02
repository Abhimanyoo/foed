import { OrderListItem } from './ListItem';
import { ReceiptEmpty } from 'component/ReceiptList';
import { Header } from 'component/Header';

interface Props {
  orders: any[];
  refetch: () => void;
  employments: any[];
  restaurant: any;
}

export const OrderOverview = ({ orders, refetch, employments }: Props) => (
  <div>
    <Header hideBack={employments.length < 2} backUrl="/" title="Woest" />
    <div>
      {orders.length === 0 && <ReceiptEmpty>No open orders!</ReceiptEmpty>}
      {orders.map(order => (
        <OrderListItem key={order.id} order={order} refetch={refetch} />
      ))}
    </div>
  </div>
);
