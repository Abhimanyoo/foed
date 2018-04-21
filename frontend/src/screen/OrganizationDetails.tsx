import * as React from 'react';
import { Body, ContentContainer, Content } from '@volst/ui-components';
import { ScreenProps } from '../Props';
import { OrganizationTopMenu } from '../container/Organization/TopMenu';

export class OrganizationDetails extends React.Component<ScreenProps, {}> {
  render() {
    const { match } = this.props;
    const id = match.params.id;
    return (
      <Body>
        <OrganizationTopMenu id={id} />
        <ContentContainer>
          <Content>
            <p>Here will be a dashboard for the organization.</p>
          </Content>
        </ContentContainer>
      </Body>
    );
  }
}
