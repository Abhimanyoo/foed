import styled from 'react-emotion';

interface ListItemProps {
  selected?: boolean;
  disabled?: boolean;
}

export const ListItem = styled<ListItemProps, 'div'>('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;
  min-height: 80px;
  ${props => props.disabled && `opacity: 0.4; pointer-events: none;`};
`;

export const ListItemOrderCount = styled('div')`
  width: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
  color: #fff;
  font-weight: bold;
`;

export const ListItemTitle = styled('div')`
  flex: 1;
  color: #fff;
  font-weight: bold;
`;

export const ListItemInfo = styled('div')`
  display: flex;
  align-items: center;
  cursor: default;
  user-select: none;
`;

interface ListItemInfoDescriptionProps {
  folded?: boolean;
}

export const ListItemInfoDescription = styled<
  ListItemInfoDescriptionProps,
  'div'
>('div')`
  font-size: 14px;
  color: #fff;
  margin: 5px 20px 0 50px;
  overflow: hidden;
  cursor: default;
  user-select: none;
  ${props =>
    props.folded &&
    `
  white-space: nowrap;
  text-overflow: ellipsis;`};
`;

export const ListItemPrice = styled('div')`
  width: 50px;
  margin: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ListItemButton = styled('button')`
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

  &:disabled {
    opacity: 0.4;
  }
`;

export const ListSubitemGroupHeading = styled('div')`
  font-weight: bold;
  padding: 30px 12px 10px;
`;

export const ListSubitem = styled<{ selected?: boolean }, 'div'>('div')`
  width: 100%;
  font-size: 15px;
  display: flex;
  padding: 12px 0;
  user-select: none;
  border-top: 1px solid #eee;

  &:last-child {
    border-bottom: 1px solid #eee;
  }

  &:active {
    background: #f5f5f5;
  }
`;

export const ListSubitemCheck = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 12px;
`;

export const ListSubitemInfo = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ListSubitemPrice = styled('div')`
  margin: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #777;
  font-size: 14px;
`;
