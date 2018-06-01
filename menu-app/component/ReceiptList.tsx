import styled from 'react-emotion';

export const ReceiptListItem = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;
  min-height: 80px;

  &:nth-child(even) {
    background: #3a6259;
  }
`;

export const ReceiptListItemOrderCount = styled('div')`
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
`;

export const ReceiptListItemInfo = styled('div')`
  display: flex;
  align-items: center;
`;

export const ReceiptListItemDescription = styled('div')`
  font-size: 14px;
  overflow: hidden;
  color: #a3fedf;
  font-style: italic;
  margin: 5px 20px 0 40px;
`;

export const ReceiptListItemTitle = styled('div')`
  flex: 1;
`;

export const ReceiptListItemPrice = styled('div')`
  width: 50px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ReceiptListItemButton = styled('button')`
  color: #fff;
  background: transparent;
  border: none;
  margin: 0;
  padding: 0 20px;
  font-size: 20px;
`;
