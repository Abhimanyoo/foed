import * as React from 'react';
import { observer } from 'mobx-react';
import styled, { keyframes } from 'react-emotion';

const backgroundSweep = keyframes`
  from {
    background-position-x: 0%;
  }

  to {
    background-position-x: -300%;
  }
`;

interface StatusProps {
  active?: boolean;
}

export const Status = styled<StatusProps, 'div'>('div')`
  background: #fd326a;
  font-size: 12px;
  font-weight: 600;
  height: 24px;
  border-radius: 12px;
  padding: 0 12px;
  display: flex;
  align-items: center;

  ${props =>
    !props.active &&
    `
    animation-duration: 4s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: ${backgroundSweep};
    animation-timing-function: linear;
    background: #525252;
    background: linear-gradient(to right, #777 0%, #222 100%);
    background-size: 300%;
  `} color: #fff;
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
