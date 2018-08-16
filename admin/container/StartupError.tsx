import * as React from 'react';
import { observer } from 'mobx-react';
import { Heading, Subheading } from '@volst/ui-components';
import { FullScreenOverlay } from '../component/FullScreenOverlay';

export interface Props {
  message: string;
}

@observer
export class StartupError extends React.Component<Props> {
  render() {
    return (
      <FullScreenOverlay>
        <Heading>Server error ({this.props.message})</Heading>
        <Subheading>
          <span>
            Our server has failed us. We’re very sorry.<br />
            A notification has been sent to us with the details of this issue.
          </span>
        </Subheading>
      </FullScreenOverlay>
    );
  }
}
