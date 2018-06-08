import * as React from 'react';
import { observer } from 'mobx-react';
import {
  ListSubitem,
  ListSubitemCheck,
  ListSubitemInfo,
  ListSubitemPrice,
} from '../../component/List';
import { floatToDecimal } from '../../helpers';
import { Store } from 'Store';
import IconCheck from '../../component/icon/Check';
import { CardItem, CardSubitem } from '../../types';
export type ToggleSubItemFn = (item: CardItem, subitem: CardSubitem) => void;

interface Props {
  item: CardItem;
  subitem: CardSubitem;
  store: Store;
  onToggle: ToggleSubItemFn;
}

@observer
export class CardListSubitem extends React.Component<Props, {}> {
  render() {
    const { item, subitem, store, onToggle } = this.props;
    const selected = store.order.hasSelectedSubitem(item, subitem);
    return (
      <ListSubitem onClick={() => onToggle(item, subitem)} selected={selected}>
        <ListSubitemCheck>
          <IconCheck fill={selected ? '#ecfee9' : 'rgba(255, 255, 255, 0.2)'} />
        </ListSubitemCheck>
        <ListSubitemInfo>{subitem.name}</ListSubitemInfo>
        <ListSubitemPrice>€{floatToDecimal(subitem.price)}</ListSubitemPrice>
      </ListSubitem>
    );
  }
}
