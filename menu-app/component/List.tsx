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
  background: ${props => (props.selected ? '#255042!important' : '')};
  ${props => props.disabled && `opacity: 0.4; pointer-events: none;`};

  &:nth-child(even) {
    background: #22262b;
  }
`;

export const ListItemOrderCount = styled('div')`
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
`;

export const ListItemInfo = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ListItemInfoDescription = styled('div')`
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
`;
