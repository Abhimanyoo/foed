import React from 'react';
import { OrderDetails } from '../container/Order/Details';
import { Store, PaymentStatus } from 'Store';

interface Props {
  store: Store;
  status?: PaymentStatus;
}

export default class OrderPage extends React.Component<Props, {}> {
  static getInitialProps(ctx) {
    return { status: parseInt(ctx.query.status) || undefined };
  }

  render() {
    const { store, status } = this.props;
    return <OrderDetails store={store} status={status} />;
  }
}
