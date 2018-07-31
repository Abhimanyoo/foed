import React from 'react';
import { observer } from 'mobx-react';
import { Header } from 'component/Header';
import { Store } from 'Store';
import { PaymentButton } from './Button';

interface Props {
  store: Store;
}

@observer
export class PaymentDetails extends React.Component<Props, {}> {
  render() {
    const { store } = this.props;
    return (
      <div>
        <Header store={store} subTitle="Select a payment method" />
        <PaymentButton store={store} />
      </div>
    );
  }
}
