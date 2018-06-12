import React from 'react';
import { observer } from 'mobx-react';
import { Header } from '../../component/Header';
import { Store } from 'Store';
import { Subheading } from '../../component/LogoHeader';
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
        <Header store={store} />
        <Subheading>Select a payment method</Subheading>
        <PaymentButton store={store} />
      </div>
    );
  }
}
