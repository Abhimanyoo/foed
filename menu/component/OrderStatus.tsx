import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'react-emotion';

interface StatusProps {
  active?: boolean;
}

export const Status = styled<StatusProps, 'div'>('div')`
  background: ${props => (props.active ? '#FD326A' : '#525252')};
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  height: 24px;
  border-radius: 12px;
  padding: 0 12px;
  display: flex;
  align-items: center;
`;

interface OrderStatusProps {
  totalAmount: number;
  completedAmount: number;
}

@observer
export class OrderStatus extends React.Component<OrderStatusProps, {}> {
  render() {
    const { totalAmount, completedAmount } = this.props;

    const text = completedAmount
      ? completedAmount === totalAmount
        ? 'Done'
        : `${completedAmount} of ${totalAmount} ready`
      : 'Preparing…';

    return <Status active={!!completedAmount}>{text}</Status>;
  }
}
