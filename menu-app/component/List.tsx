import styled from 'react-emotion';

export const ListItem = styled('div')`
  width: 100%;
  display: flex;
  padding: 10px 0;
  height: 80px;

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
