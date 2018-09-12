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
  border-bottom: 1px solid #eee;
  min-height: 60px;

  &:last-child {
    border-bottom: 0;
  }
`;

export const ReceiptListItemOrderCount = styled('div')`
  width: 30px;
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

export const ReceiptListStatus = styled('div')`
  margin: 0 20px;
`;

export const ReceiptListItemInfo = styled('div')`
  display: flex;
  align-items: center;
`;

export const ReceiptListItemDescription = styled('div')`
  margin-left: 50px;
`;

export const ReceiptListItemTitle = styled('div')`
  flex: 1;
  font-weight: bold;
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
