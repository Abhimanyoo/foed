import { SortableHandle } from 'react-sortable-hoc';
import { IconDragHandle } from '@volst/ui-components';
import styled from 'react-emotion';

const StyledDragHandle = styled(IconDragHandle)`
  cursor: grab;
`;

export const DragHandle = SortableHandle(StyledDragHandle);
