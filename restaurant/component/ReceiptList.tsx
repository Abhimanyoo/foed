import styled from 'react-emotion';

export const ReceiptListItem = styled('div')`
  width: 100%;
  display: flex;
  justify-content: stretch;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e4e4e4;

  &:last-child {
    border-bottom: 0;
  }
`;

export const ReceiptListItemInfo = styled<{ completed?: boolean }, 'div'>(
  'div'
)`
  flex: 1;
  padding-left 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  opacity: ${props => props.completed && 0.35};
`;

export const ReceiptListItemTitle = styled('div')`
  flex: 1;
  font-weight: bold;
  font-size: 16px;
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

export const ReceiptEmpty = styled('div')`
  text-align: center;
  padding: 60px 0;
  position: absolute;
  width: 100%;
`;

export const ReceiptEmptyMessage = styled('div')`
  font-size: 18px;
  margin-top: 20px;
`;
