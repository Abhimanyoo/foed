import * as React from 'react';
import {
  Button,
  IconDelete,
  Tone,
  IconEdit,
  TableRow,
  TableData,
  Link,
  InlineText,
  confirm,
} from '@volst/ui-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ItemProps } from '../OverviewTable';

const DELETE_RESTAURANT = gql`
  mutation deleteRestaurant($id: ID!) {
    deleteRestaurant(where: { id: $id }) {
      id
    }
  }
`;

export class RestaurantOverviewItem extends React.Component<ItemProps, {}> {
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
        <TableData>
          <InlineText bold>
            <Link to={`/restaurant/${model.id}`} link>
              {model.name}
            </Link>
          </InlineText>
        </TableData>
        <TableData>0</TableData>
        <TableData>
          {model.organization ? (
            model.organization.name
          ) : (
            <InlineText italic>None</InlineText>
          )}
        </TableData>
        <TableData>{model.visible ? 'Visible' : 'Hidden'}</TableData>
        <TableData alignRight>
          <Link to={`/restaurant/${model.id}/settings`} ghost>
            <IconEdit />
          </Link>
          <Mutation mutation={DELETE_RESTAURANT}>
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
