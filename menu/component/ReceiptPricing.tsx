import styled from 'react-emotion';

interface ReceiptPriceItem {
  bold?: boolean;
}

export const ReceiptPriceItem = styled<ReceiptPriceItem, 'div'>('div')`
  width: 100%;
  display: flex;
  padding: 10px 0;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;

export const ReceiptPriceItemName = styled('div')`
  flex: 1;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ReceiptPriceItemAmount = styled('div')`
  flex: 1;
  padding-right: 20px;
  display: flex;
  align-items: center;
`;

export const ReceiptPriceLine = styled('div')`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  margin: 10px 0;
`;
