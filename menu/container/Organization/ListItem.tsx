import * as React from 'react';
import { GridItem, GridItemTitle, GridItemImage } from 'component/Grid';

interface Props {
  organization: any;
}

export class OrganizationListItem extends React.Component<Props, {}> {
  render() {
    const { organization } = this.props;
    return (
      <GridItem route={`/organization/${organization.slug}`} prefetch>
        <React.Fragment>
          {organization.imageUrl && (
            <GridItemImage
              src={organization.imageUrl}
              alt={organization.name}
            />
          )}
          <GridItemTitle>{organization.name}</GridItemTitle>
        </React.Fragment>
      </GridItem>
    );
  }
}
