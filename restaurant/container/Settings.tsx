import * as React from 'react';
import { Button } from 'component/Button';
import { Header } from 'component/Header';
import styled from 'react-emotion';

const Box = styled('div')`
  padding: 20px;
  text-align: center;
`;

const Text = styled('h2')``;

interface Props {
  currentUser: any;
  onLogout: () => void;
}

export default class SettingsBox extends React.Component<Props> {
  render() {
    return (
      <div>
        <Header title="Settings" />
        <Box>
          <Text>Hello {this.props.currentUser.name}!</Text>
          <Button onClick={this.props.onLogout}>Logout</Button>
        </Box>
      </div>
    );
  }
}
