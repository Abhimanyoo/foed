import * as React from 'react';
import { Body, ContentContainer, Content } from '@volst/ui-components';
import { ScreenProps } from '../Props';
import { RestaurantTopMenu } from '../container/Restaurant/TopMenu';

export class RestaurantDetails extends React.Component<ScreenProps, {}> {
  render() {
    const { match } = this.props;
    const id = match.params.id;
    return (
      <Body>
        <RestaurantTopMenu id={id} />
        <ContentContainer>
          <Content>
            <p>Here will be a dashboard.</p>
            <p>Stats about sales today compared to other days</p>
            <p>Best selling menu item</p>
          </Content>
        </ContentContainer>
      </Body>
    );
  }
}
