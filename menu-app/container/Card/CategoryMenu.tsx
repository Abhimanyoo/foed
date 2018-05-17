import { ScrollMenu, ScrollMenuItem } from '../../component/ScrollMenu';

interface Props {
  restaurant: any;
  categoryId: string;
}

export const CardCategoryMenu = ({ restaurant, categoryId }: Props) => {
  return (
    <ScrollMenu>
      {restaurant.activeCard.categories.map(category => (
        <ScrollMenuItem
          key={category.id}
          route={`/restaurant/${restaurant.slug}/${category.id}`}
          active={category.id === categoryId}
        >
          {category.name}
        </ScrollMenuItem>
      ))}
    </ScrollMenu>
  );
};
