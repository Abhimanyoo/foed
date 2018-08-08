import { OrderListItem } from './ListItem';
import { ReceiptEmpty, ReceiptEmptyMessage } from 'component/ReceiptList';
import { Header } from 'component/Header';
import IconLemonade from 'component/icon/Lemonade';
import {
  restaurantInfoAndOrders_restaurant,
  restaurantInfoAndOrders_unfinishedRestaurantOrders,
  currentUserDetails_currentUser_employments,
} from 'graphqlTypes';

interface Props {
  orders: restaurantInfoAndOrders_unfinishedRestaurantOrders[];
  refetch: () => void;
  employments: currentUserDetails_currentUser_employments[];
  restaurant: restaurantInfoAndOrders_restaurant;
}

export const OrderOverview = ({
  orders,
  refetch,
  employments,
  restaurant,
}: Props) => (
  <div>
    <Header
      hideBack={employments.length < 2}
      backUrl="/"
      title={restaurant.name}
    />
    <div>
      {orders.length === 0 && <ReceiptEmpty>
        <IconLemonade />
        <ReceiptEmptyMessage>You're all set!<br/>There are no active orders.</ReceiptEmptyMessage>
      </ReceiptEmpty>}
      {orders.map(order => (
        <OrderListItem key={order.id} order={order} refetch={refetch} />
      ))}
    </div>
  </div>
);
