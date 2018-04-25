import * as React from 'react';
import {
  FormField,
  TextInput,
  Row,
  Col,
  IconAddCircle,
  Button,
} from '@volst/ui-components';

interface Props {
  onAdd: (item: object) => void;
}

const initialState = { input: { name: '', description: '', price: 0 } };

export class CreateFormItemAdd extends React.Component<Props, { input: any }> {
  state = initialState;

  handleAdd = () => {
    this.props.onAdd(this.state.input);
    this.setState(initialState);
  };

  render() {
    return (
      <Row middle="xs">
        <Col xs>
          <FormField label="Add an item">
            <TextInput
              name="name"
              value={this.state.input.name}
              onChange={(name, value) =>
                this.setState({ input: { ...this.state.input, name: value } })
              }
            />
          </FormField>
        </Col>
        <Col>
          <Button onClick={this.handleAdd} disabled={!this.state.input.name}>
            <IconAddCircle />
          </Button>
        </Col>
      </Row>
    );
  }
}
