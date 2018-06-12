import React from 'react';
import { PaymentDetails } from '../container/Payment/Details';
import { Store } from 'Store';

interface Props {
  store: Store;
}

export default class PaymentPage extends React.Component<Props, {}> {
  render() {
    const { store } = this.props;
    return <PaymentDetails store={store} />;
  }
}
