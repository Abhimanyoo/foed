import styled from 'react-emotion';

interface ListItemProps {
  selected?: boolean;
  disabled?: boolean;
}

export const ListItem = styled<ListItemProps, 'div'>('div')`
  width: 100%;
  display: flex;
  padding: 10px 0;
  height: 80px;
  ${props => props.disabled && `opacity: 0.4; pointer-events: none;`};
`;

export const ListItemOrderCount = styled('div')`
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
  color: #efffe9;
  font-weight: bold;
`;

export const ListItemInfo = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #edfde8;
  font-weight: bold;
`;

export const ListItemInfoDescription = styled('div')`
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #fff;
  font-weight: normal;
`;

export const ListItemPrice = styled('div')`
  width: 50px;
  margin: 0 10px;
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

export const ListSubitem = styled<{ selected?: boolean }, 'div'>('div')`
  width: 100%;
  font-size: 15px;
  display: flex;
  padding: 10px 0;
  height: 40px;
  user-select: none;
  color: ${props => props.selected && `#efffe9`};

  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const ListSubitemCheck = styled('div')`
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
`;

export const ListSubitemInfo = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ListSubitemPrice = styled('div')`
  width: 50px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
