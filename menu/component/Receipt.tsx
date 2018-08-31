import * as React from 'react';
import styled from 'react-emotion';

const ReceiptContainer = styled('div')`
  position: relative;
  color: #333;
  margin: 4px 10px 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  background: #fff;
`;

const ReceiptContent = styled('div')`
  position: relative;
  z-index: 1;
`;

export const ReceiptHeader = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

const CounterBackground = styled('div')`
  width: 40px;
  background: #fff5e2;
  position: absolute;
  top: 0;
  bottom: 0;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    top: -3px;
    background-position-x: -5px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSA0Ij48cGF0aCBmaWxsPSIjZmZmNWUyIiBkPSJNMCw0bDcuMy00TDE1LDRIMHoiLz48L3N2Zz4=);
  }

  &:after {
    top: unset;
    bottom: -3px;
    transform: scaleY(-1);
  }
`;

interface ContentBackgroundProps {
  hasCounter?: boolean;
}

export const ContentBackground = styled<ContentBackgroundProps, 'div'>('div')`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => (props.hasCounter ? '40px' : '0')};
  right: 0;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    top: -3px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSA0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCw0bDcuMy00TDE1LDRIMHoiLz48L3N2Zz4=);
  }

  &:after {
    top: unset;
    bottom: -3px;
    transform: scaleY(-1);
  }
`;

interface ReceiptProps {
  hasCounter?: boolean;
}

export class Receipt extends React.Component<ReceiptProps, {}> {
  render = () => (
    <ReceiptContainer {...this.props}>
      {this.props.hasCounter && <CounterBackground />}
      <ContentBackground hasCounter={this.props.hasCounter} />
      <ReceiptContent>{this.props.children}</ReceiptContent>
    </ReceiptContainer>
  );
}
