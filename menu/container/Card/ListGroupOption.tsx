import * as React from 'react';
import { observer } from 'mobx-react';
import { Store } from 'Store';
import { CardItem, CardOptionGroup, CardOption } from 'types';
import { CardListOption } from './ListOption';
import { ListSubitemGroupHeading } from 'component/List';

export type ToggleOptionFn = (
  item: CardItem,
  optionGroup: CardOptionGroup,
  option: CardOption
) => void;

interface Props {
  item: CardItem;
  optionGroup: CardOptionGroup;
  store: Store;
  onToggle: ToggleOptionFn;
}

@observer
export class CardListGroupOption extends React.Component<Props, {}> {
  render() {
    const { item, optionGroup, store, onToggle } = this.props;
    return (
      <div>
        <ListSubitemGroupHeading>{optionGroup.name}</ListSubitemGroupHeading>
        {optionGroup.options.map(option => (
          <CardListOption
            key={option.id}
            option={option}
            item={item}
            store={store}
            onClick={() => onToggle(item, optionGroup, option)}
          />
        ))}
      </div>
    );
  }
}
