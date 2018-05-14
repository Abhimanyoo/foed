import * as React from 'react';
import { GridItem, GridItemTitle } from '../../component/Grid';

interface Props {
  organization: any;
}

export class OrganizationListItem extends React.Component<Props, {}> {
  render() {
    const { organization } = this.props;
    return (
      <div>
        <GridItem route={`/organization/${organization.slug}`} prefetch>
          <GridItemTitle>{organization.name}</GridItemTitle>
        </GridItem>
        TODO
      </div>
    );
  }
}
