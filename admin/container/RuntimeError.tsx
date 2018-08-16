import * as React from 'react';
import { Heading, Subheading, Button } from '@volst/ui-components';
import { FullScreenOverlay } from '../component/FullScreenOverlay';

export class RuntimeError extends React.Component {
  render() {
    return (
      <FullScreenOverlay>
        <Heading>Application crashed</Heading>
        <Subheading>
          We’re very sorry, but the application has crashed.<br />
          Our team has been notified.<br />
        </Subheading>
        <Button onClick={() => document.location.reload()}>Reload page</Button>
      </FullScreenOverlay>
    );
  }
}
