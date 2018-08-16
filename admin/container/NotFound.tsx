import * as React from 'react';
import { Heading, Subheading } from '@volst/ui-components';
import { FullScreenOverlay } from '../component/FullScreenOverlay';

export class NotFound extends React.Component {
  render() {
    return (
      <FullScreenOverlay>
        <Heading>Page not found</Heading>
        <Subheading>Sorry, the page could not be found.</Subheading>
      </FullScreenOverlay>
    );
  }
}
