import * as React from 'react';
import {
  Button,
  IconDelete,
  Tone,
  IconLoyalty,
  Tooltip,
  confirm,
} from '@volst/ui-components';
import { TableRow, TableData } from '@volst/ui-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ItemProps } from '../../OverviewTable';

const DELETE_CARD = gql`
  mutation deleteCard($id: ID!) {
    deleteCard(where: { id: $id }) {
      id
    }
  }
`;

export class RestaurantCardOverviewItem extends React.Component<ItemProps, {}> {
  handleDelete = mutate => {
    const { model } = this.props;
    confirm({
      title: `Do you want to delete ${model.name}?`,
      okText: 'Delete',
      okTone: Tone.Danger,
      cancelText: 'Nope',
      onOk: () =>
        mutate({ variables: { id: model.id } }).then(() =>
          this.props.refetch()
        ),
    });
  };

  render() {
    const { model } = this.props;
    return (
      <TableRow>
        <TableData>{model.name}</TableData>
        <TableData alignRight>
          <Tooltip message="Promote to active menu" direction="sw">
            <Button ghost tone={Tone.Success}>
              <IconLoyalty />
            </Button>
          </Tooltip>
          <Mutation mutation={DELETE_CARD}>
            {mutate => (
              <Button
                onClick={() => this.handleDelete(mutate)}
                ghost
                tone={Tone.Danger}
              >
                <IconDelete />
              </Button>
            )}
          </Mutation>
        </TableData>
      </TableRow>
    );
  }
}
