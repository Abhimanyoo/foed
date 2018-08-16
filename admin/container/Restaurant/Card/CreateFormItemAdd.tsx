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

const initialState = {
  input: {
    name: '',
    description: '',
    price: '',
    ordering: 0,
    optionGroups: [],
  },
};

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
              onChange={(_name, value) =>
                this.setState({ input: { ...this.state.input, name: value } })
              }
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  e.preventDefault();
                  this.handleAdd();
                }
              }}
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
