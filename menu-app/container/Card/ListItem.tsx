import * as React from 'react';
import {
  ListItem,
  ListItemOrderCount,
  ListItemInfo,
  ListItemInfoDescription,
  ListItemPrice,
} from '../../component/List';
import { floatToDecimal } from '../../helpers';

interface Props {
  item: any;
}

export class CardListItem extends React.Component<Props, {}> {
  render() {
    const { item } = this.props;
    return (
      <ListItem>
        <ListItemOrderCount>1</ListItemOrderCount>
        <ListItemInfo>
          {item.name}
          <ListItemInfoDescription>{item.description}</ListItemInfoDescription>
        </ListItemInfo>
        <ListItemPrice>€{floatToDecimal(item.price)}</ListItemPrice>
      </ListItem>
    );
  }
}
