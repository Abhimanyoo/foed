import * as React from 'react';
import { observer } from 'mobx-react';
import {
  ListSubitem,
  ListSubitemCheck,
  ListSubitemInfo,
  ListSubitemPrice,
} from 'component/List';
import { floatToDecimal } from 'helpers';
import { Store } from 'Store';
import IconCheckCircle from 'component/icon/CheckCircle';
import IconCheckCircleBlank from 'component/icon/CheckCircleBlank';
import { CardItem, CardOption } from 'types';

interface Props {
  item: CardItem;
  option: CardOption;
  store: Store;
  onClick: () => void;
}

@observer
export class CardListOption extends React.Component<Props, {}> {
  render() {
    const { item, option, store, onClick } = this.props;
    const selected = store.order.hasSelectedOption(item, option);
    return (
      <ListSubitem onClick={onClick}>
        <ListSubitemCheck>
          {selected ? <IconCheckCircle /> : <IconCheckCircleBlank />}
        </ListSubitemCheck>
        <ListSubitemInfo>{option.name}</ListSubitemInfo>
        <ListSubitemPrice>+€ {floatToDecimal(option.price)}</ListSubitemPrice>
      </ListSubitem>
    );
  }
}
