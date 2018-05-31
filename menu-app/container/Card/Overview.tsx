import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Header } from '../../component/Header';
import { Query } from '../../component/Query';
import { Button } from '../../component/Button';
import { FloatingButtons } from '../../component/FloatingButtons';
import gql from 'graphql-tag';
import { CardListItem } from './ListItem';
import { CardCategoryMenu } from './CategoryMenu';
import { Store } from 'Store';

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
      }
    }
  }
`;

@observer
export class CardOverview extends React.Component<Props, {}> {
  @observable selectedItem = null;

  handleAddItem = cardItem => {
    this.selectedItem = {
      cardItem,
      subItems: [],
    };
  };

  handleFinish = () => {
    this.props.store.order.addItem(this.selectedItem);
    this.selectedItem = null;
  };

  handleCancel = () => {
    this.selectedItem = null;
  };

  render() {
    const { restaurant, categoryId, store } = this.props;
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
            result.data.cardCategory.items.map(item => (
              <CardListItem
                key={item.id}
                item={item}
                store={store}
                onAdd={this.handleAddItem}
              />
            ))
          }
        </Query>
        {!!this.selectedItem && (
          <FloatingButtons>
            <Button onClick={this.handleCancel} tone="secondary">
              Cancel
            </Button>
            <Button onClick={this.handleFinish}>Add item</Button>
          </FloatingButtons>
        )}
      </div>
    );
  }
}
