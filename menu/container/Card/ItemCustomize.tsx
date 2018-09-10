import React from 'react';
import { observer } from 'mobx-react';
import { Modal, ModalContent, ModalFooter } from 'component/Modal';
import { Button } from 'component/Button';
import { CardItem } from 'types';
import { Store } from 'Store';
import { CardListGroupOption } from './ListGroupOption';
import { floatToDecimal } from 'helpers';
import { ListSubitemPrice } from 'component/List';
import { CustomizeDescription, CustomizeDetails } from 'component/Customize';

interface Props {
  store: Store;
  item: CardItem;
}

@observer
export class CardItemCustomize extends React.Component<Props, {}> {
  handleClose = () => {
    const { store } = this.props;
    store.order.clearPreselected();
  };

  handleAdd = () => {
    const { store } = this.props;
    store.order.pinPreselected();
  };

  handleToggleOption = (cardItem, optionGroup, option) => {
    const { store } = this.props;
    store.order.toggleOption(cardItem, optionGroup, option);
  };

  render() {
    const { item, store } = this.props;

    const visible = !!item;

    return (
      <Modal
        visible={visible}
        title={item && item.name}
        onClose={this.handleClose}
      >
        {visible && (
          <React.Fragment>
            <ModalContent>
              <CustomizeDetails>
                <CustomizeDescription>
                  {item.description ? item.description : item.name}
                </CustomizeDescription>
                <ListSubitemPrice>
                  €{floatToDecimal(item.price)}
                </ListSubitemPrice>
              </CustomizeDetails>
              {item.optionGroups.map(optionGroup => (
                <CardListGroupOption
                  key={optionGroup.id}
                  item={item}
                  optionGroup={optionGroup}
                  store={store}
                  onToggle={this.handleToggleOption}
                />
              ))}
            </ModalContent>
            <ModalFooter>
              <Button onClick={this.handleAdd}>Add to cart</Button>
            </ModalFooter>
          </React.Fragment>
        )}
      </Modal>
    );
  }
}
