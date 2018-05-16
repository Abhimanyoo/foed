import { ScrollMenu, ScrollMenuItem } from '../../component/ScrollMenu';
import { Header } from '../../component/Header';
import { Query } from '../../component/Query';
import gql from 'graphql-tag';
import { CardListItem } from './ListItem';

interface Props {
  restaurant: any;
  categoryId: string;
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

export const CardOverview = ({ restaurant, categoryId }: Props) => {
  return (
    <div>
      <Header
        title={restaurant.name}
        backUrl={`/organization/${restaurant.organization.slug}`}
      />
      <ScrollMenu>
        {restaurant.activeCard.categories.map(category => (
          <ScrollMenuItem
            key={category.id}
            route={`/restaurant/${restaurant.slug}/${category.id}`}
          >
            {category.name}
          </ScrollMenuItem>
        ))}
      </ScrollMenu>
      <Query query={CARD_ITEM_OVERVIEW} variables={{ id: categoryId }}>
        {result =>
          result.data.cardCategory.items.map(item => (
            <CardListItem key={item.id} item={item} />
          ))
        }
      </Query>
    </div>
  );
};
