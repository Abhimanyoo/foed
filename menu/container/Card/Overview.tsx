import React from 'react';
import { observer, Observer } from 'mobx-react';
import { Header } from 'component/Header';
import { Query } from 'component/Query';
import gql from 'graphql-tag';
import { CardListItem } from './ListItem';
import { CardCategoryMenu } from './CategoryMenu';
import { Store } from 'Store';
import { CardToolbar } from './Toolbar';
import { observable } from 'mobx';

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
  @observable
  openItem = '';

  handleAddItem = cardItem => {
    const { store, restaurant } = this.props;
    store.order.addItem(cardItem, restaurant, restaurant.organization.id);
  };

  handleAddFinish = () => {
    const { store } = this.props;
    store.order.pinPreselected();
  };

  clearItems = () => {
    const { store } = this.props;
    store.order.clearPreselected();
  };

  handleToggleOption = (cardItem, optionGroup, option) => {
    const { store } = this.props;
    store.order.toggleOption(cardItem, optionGroup, option);
  };

  handleToggleOpen = (id: string) => {
    this.openItem = this.openItem === id ? '' : id;
  };

  render() {
    const { restaurant, categoryId, store } = this.props;
    const amountOfPreselections = store.order.getAmountOfPreselections();
    return (
      <React.Fragment>
        <Header
          backTitle={restaurant.organization.name}
          backUrl={`/organization/${restaurant.organization.slug}`}
          subTitle={restaurant.name}
          store={store}
        />
        <CardCategoryMenu restaurant={restaurant} categoryId={categoryId} />
        <main>
          <Query query={CARD_ITEM_OVERVIEW} variables={{ id: categoryId }}>
            {result =>
              result.data.cardCategory.items.map(cardItem => {
                const itemIsPreselected = store.order.isCardItemPreselected(
                  cardItem.id
                );
                return (
                  <Observer key={cardItem.id}>
                    {() => (
                      <CardListItem
                        item={cardItem}
                        store={store}
                        onAdd={this.handleAddItem}
                        onToggleOption={this.handleToggleOption}
                        selected={itemIsPreselected}
                        opened={this.openItem === cardItem.id}
                        onToggleOpen={this.handleToggleOpen}
                        disabled={
                          !itemIsPreselected && amountOfPreselections > 0
                        }
                      />
                    )}
                  </Observer>
                );
              })
            }
          </Query>
        </main>
        <CardToolbar
          onCancel={this.clearItems}
          onAdd={this.handleAddFinish}
          preselectedAmount={amountOfPreselections}
          store={store}
        />
      </React.Fragment>
    );
  }
}
