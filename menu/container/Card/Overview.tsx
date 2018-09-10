import React from 'react';
import { observer, Observer } from 'mobx-react';
import { Header } from 'component/Header';
import { Query } from 'component/Query';
import gql from 'graphql-tag';
import { CardListItem } from './ListItem';
import { CardCategoryMenu } from './CategoryMenu';
import { Store } from 'Store';
import { CardToolbar } from './Toolbar';
import { CardItemCustomize } from './ItemCustomize';

interface Props {
  restaurant: any;
  categoryId: string;
  store: Store;
}

const CARD_ITEM_OVERVIEW = gql`
  query getCardCategory($id: ID!) {
    cardCategory(where: { id: $id }) {
      id
      items(orderBy: ordering_ASC) {
        id
        name
        price
        description
        optionGroups(orderBy: ordering_ASC) {
          id
          name
          type
          options(orderBy: ordering_ASC) {
            id
            name
            price
          }
        }
      }
    }
  }
`;

@observer
export class CardOverview extends React.Component<Props, {}> {
  handleAddItem = cardItem => {
    const { store, restaurant } = this.props;
    store.order.addItem(cardItem, restaurant, restaurant.organization.id);
  };

  render() {
    const { restaurant, categoryId, store } = this.props;
    const preselectedCardItem = store.order.getPreselectedCardItem();

    return (
      <Query query={CARD_ITEM_OVERVIEW} variables={{ id: categoryId }}>
        {result => (
          <React.Fragment>
            <Header
              backTitle={restaurant.organization.name}
              backUrl={`/organization/${restaurant.organization.slug}`}
              subTitle={restaurant.name}
              store={store}
            />
            <CardCategoryMenu restaurant={restaurant} categoryId={categoryId} />
            <main>
              {result.data.cardCategory.items.map(cardItem => {
                return (
                  <Observer key={cardItem.id}>
                    {() => (
                      <CardListItem
                        item={cardItem}
                        store={store}
                        onAdd={this.handleAddItem}
                      />
                    )}
                  </Observer>
                );
              })}
            </main>
            <CardToolbar store={store} />
            <CardItemCustomize store={store} item={preselectedCardItem} />
          </React.Fragment>
        )}
      </Query>
    );
  }
}
