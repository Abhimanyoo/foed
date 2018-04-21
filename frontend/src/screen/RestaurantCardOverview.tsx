import * as React from 'react';
import {
  Body,
  ContentContainer,
  Content,
  Toolbar,
  Link,
  IconAddCircle,
} from '@volst/ui-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ScreenProps } from '../Props';
import { RestaurantTopMenu } from '../container/Restaurant/TopMenu';
import { RestaurantCardOverviewItem } from '../container/Restaurant/Card/OverviewItem';
import { OverviewTable } from '../container/OverviewTable';
import { PaginationControls } from '../component/PaginationControls';
import { getPageInfo } from '../utils/query';

const All_CARDS = gql`
  query getRestaurantCards($where: CardWhereInput!, $first: Int, $skip: Int) {
    cards(first: $first, skip: $skip, where: $where) {
      id
      name
    }
    cardsConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export class RestaurantCardOverview extends React.Component<ScreenProps, {}> {
  render() {
    const { match } = this.props;
    const restaurantId = match.params.restaurantId;
    // TODO: the overview filters should be saved as a URL query param,
    // so we can automatically read them here.
    const variables = {
      where: { restaurant: { id: restaurantId } },
      ...getPageInfo(this.props),
    };
    return (
      <Query query={All_CARDS} variables={variables} fetchPolicy="network-only">
        {({ refetch, data }) => (
          <Body>
            <RestaurantTopMenu id={restaurantId} />
            <ContentContainer>
              <Content>
                <Link to={`/restaurant/${restaurantId}/card/add`}>
                  <IconAddCircle />
                  Add menu
                </Link>
                <OverviewTable
                  headings={['Name']}
                  item={props => <RestaurantCardOverviewItem {...props} />}
                  data={data}
                  refetch={refetch}
                  name="cards"
                />
              </Content>
            </ContentContainer>
            <Toolbar>
              <PaginationControls
                connection={(data as any).cardsConnection}
                {...this.props}
              />
            </Toolbar>
          </Body>
        )}
      </Query>
    );
  }
}
