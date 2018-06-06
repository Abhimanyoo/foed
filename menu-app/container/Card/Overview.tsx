import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Header } from '../../component/Header';
import { Query } from '../../component/Query';
import gql from 'graphql-tag';
import { CardListItem } from './ListItem';
import { CardCategoryMenu } from './CategoryMenu';
import { Store } from 'Store';
import { CardToolbar } from './Toolbar';

interface Props {
  restaurant: any;
  categoryId: string;
  store: Store;
}

const CARD_ITEM_OVERVIEW = gql`
  query getCardCategory($id: ID!) {
    cardCategory(where: { id: $id }) {
      id
      items {
        id
        name
        price
        description
        subitems {
          id
        }
      }
    }
  }
`;

@observer
export class CardOverview extends React.Component<Props, {}> {
  @observable selectedItems: any[] = [];

  handleAddItem = cardItem => {
    this.selectedItems.push({
      cardItem,
      subitems: [],
    });
  };

  handleAddFinish = () => {
    const order = this.props.store.order;
    this.selectedItems.forEach(item => order.addItem(item));
    this.clearItems();
  };

  clearItems = () => {
    this.selectedItems = [];
  };

  render() {
    const { restaurant, categoryId, store } = this.props;
    const selectedItems = this.selectedItems.slice();
    return (
      <div>
        <Header
          title={restaurant.name}
          backUrl={`/organization/${restaurant.organization.slug}`}
          store={store}
        />
        <CardCategoryMenu restaurant={restaurant} categoryId={categoryId} />
        <Query query={CARD_ITEM_OVERVIEW} variables={{ id: categoryId }}>
          {result =>
            result.data.cardCategory.items.map(cardItem => {
              const selected = selectedItems.filter(sItem => {
                return sItem.cardItem.id === cardItem.id;
              }).length;
              return (
                <CardListItem
                  key={cardItem.id}
                  item={cardItem}
                  store={store}
                  onAdd={this.handleAddItem}
                  selected={selected}
                  disabled={!selected && selectedItems.length > 0}
                />
              );
            })
          }
        </Query>
        <CardToolbar
          onCancel={this.clearItems}
          onAdd={this.handleAddFinish}
          selectedItems={this.selectedItems}
          store={store}
        />
      </div>
    );
  }
}
