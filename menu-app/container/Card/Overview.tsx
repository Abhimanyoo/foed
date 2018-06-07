import React from 'react';
import { observer } from 'mobx-react';
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
          name
          type
          price
        }
      }
    }
  }
`;

@observer
export class CardOverview extends React.Component<Props, {}> {
  handleAddItem = cardItem => {
    const { store } = this.props;
    store.order.addItem({
      cardItem,
      subitems: [],
      preselect: true,
    });
  };

  handleAddFinish = () => {
    const { store } = this.props;
    store.order.pinPreselected();
  };

  clearItems = () => {
    const { store } = this.props;
    store.order.clearPreselected();
  };

  handleToggleSubItem = (cardItem, subitem) => {
    const { store } = this.props;
    store.order.toggleSubitem(cardItem, subitem);
  };

  render() {
    const { restaurant, categoryId, store } = this.props;
    const amountOfPreselections = store.order.getAmountOfPreselections();
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
              const itemIsPreselected = store.order.isCardItemPreselected(
                cardItem.id
              );
              return (
                <CardListItem
                  key={cardItem.id}
                  item={cardItem}
                  store={store}
                  onAdd={this.handleAddItem}
                  onToggleSubitem={this.handleToggleSubItem}
                  selected={itemIsPreselected}
                  disabled={!itemIsPreselected && amountOfPreselections > 0}
                />
              );
            })
          }
        </Query>
        <CardToolbar
          onCancel={this.clearItems}
          onAdd={this.handleAddFinish}
          preselectedAmount={amountOfPreselections}
          store={store}
        />
      </div>
    );
  }
}
