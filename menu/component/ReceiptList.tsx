import styled from 'react-emotion';

export const ReceiptEmpty = styled('div')`
  padding: 60px 10px;
  text-align: center;
`;

export const ReceiptEmptyMessage = styled('div')`
  padding-top: 20px;
  font-size: 18px;
`;

export const ReceiptListItem = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;
  min-height: 80px;
`;

export const ReceiptListItemOrderCount = styled('div')`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReceiptListItemInfo = styled('div')`
  display: flex;
  align-items: center;
`;

export const ReceiptListItemDescription = styled('div')`
  font-size: 14px;
  overflow: hidden;
  font-style: italic;
  margin: 5px 20px 0 50px;
`;

export const ReceiptListItemTitle = styled('div')`
  flex: 1;
  font-weight: bold;
  margin-left: 10px;
`;

export const ReceiptListItemButton = styled('button')`
  background: transparent;
  border: none;
  margin: 0;
  padding: 0 8px;
  font-size: 20px;
  outline: 0;

  &:active {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.3;
  }
`;

export const ReceiptRestaurantTitle = styled('div')`
  font-style: italic;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-left: 40px;
  padding: 10px;
`;
