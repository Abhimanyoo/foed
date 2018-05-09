import * as React from 'react';
import R from '../../routes';

interface Props {
  organization: any;
}

export class OrganizationListItem extends React.Component<Props, {}> {
  render() {
    const { organization } = this.props;
    return (
      <div>
        <R.Link route={`/organization/${organization.id}`}>
          <a>{organization.name}</a>
        </R.Link>
      </div>
    );
  }
}
