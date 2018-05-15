import * as React from 'react';
import { GridItem, GridItemTitle, GridItemImage } from '../../component/Grid';

interface Props {
  organization: any;
}

export class OrganizationListItem extends React.Component<Props, {}> {
  render() {
    const { organization } = this.props;
    return (
      <GridItem route={`/organization/${organization.slug}`} prefetch>
        <React.Fragment>
          <GridItemTitle>{organization.name}</GridItemTitle>
          {organization.imageUrl && (
            <GridItemImage src={organization.imageUrl} />
          )}
        </React.Fragment>
      </GridItem>
    );
  }
}
