import React from 'react';
import { observer } from 'mobx-react';
import { PaymentStatus } from 'Store';
import styled from 'react-emotion';

const Wrapper = styled('div')`
  width: 100%;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.15);
  margin-bottom: 30px;
  font-size: 15px;
`;

interface Props {
  status: PaymentStatus;
}

@observer
export class OrderPaymentNotification extends React.Component<Props, {}> {
  render() {
    const { status } = this.props;
    let text = '';
    if (status === PaymentStatus.Error) {
      text =
        'Something went wrong when trying to place your order. Please try again and ensure you have internet.';
    }
    if (status === PaymentStatus.Success) {
      text =
        'Your order has been paid! As soon as your order is ready, you will receive a notification.';
    }
    return <Wrapper>{text}</Wrapper>;
  }
}
