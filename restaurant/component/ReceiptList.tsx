import styled from 'react-emotion';

export const ReceiptEmpty = styled('div')`
  text-align: center;
  font-size: 18px;
  padding: 20px;
`;

export const ReceiptListItem = styled<{ completed?: boolean }, 'div'>('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;
  min-height: 80px;
  opacity: ${props => props.completed && 0.5};
`;

export const ReceiptListItemOrderCount = styled('div')`
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-right: 10px;
`;

export const ReceiptListItemInfo = styled('div')`
  display: flex;
  align-items: center;
`;

export const ReceiptListItemDescription = styled('div')`
  font-size: 14px;
  overflow: hidden;
  color: #fff;
  font-style: italic;
  margin: 5px 20px 0 50px;
`;

export const ReceiptListItemTitle = styled('div')`
  flex: 1;
  color: #fff;
  font-weight: bold;
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
  outline: 0;

  &:active {
    opacity: 0.8;
  }
`;

export const ReceiptRestaurantTitle = styled('div')`
  font-style: italic;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin: 10px 0 0 40px;
  padding: 10px;
`;

export const ReceiptButtonGroup = styled('div')`
  text-align: center;
  padding: 10px;
`;
