import { ScrollMenu, ScrollMenuItem } from '../../component/ScrollMenu';
import { Header } from '../../component/Header';

interface Props {
  restaurant: any;
}

export const CardOverview = ({ restaurant }: Props) => {
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
      TODO.
    </div>
  );
};
