import * as React from 'react';
import { observer } from 'mobx-react';
import {
  ReceiptListItem,
  ReceiptListItemOrderCount,
  ReceiptListItemInfo,
  ReceiptListStatus,
  ReceiptListItemTitle,
} from 'component/ReceiptList';
import { Text } from 'component/Text';
import { Item } from 'types';
import IconCheckCircle from 'component/icon/CheckCircle';
import IconProgressClock from 'component/icon/ProgressClock';

interface Props {
  item: Item;
  amount: number;
  completed: boolean;
}

@observer
export class OrderOldReceiptListItem extends React.Component<Props, {}> {
  render() {
    const { item, amount, completed } = this.props;
    return (
      <ReceiptListItem>
        <ReceiptListItemInfo>
          <ReceiptListItemOrderCount>{amount}</ReceiptListItemOrderCount>
          <ReceiptListItemTitle>
            {item.cardItem.name}
            <Text size="small" tone="warning">
              {item.options.map(option => option.name).join(', ')}
            </Text>
          </ReceiptListItemTitle>
          <ReceiptListStatus>
            {completed ? (
              <IconCheckCircle fill="#FD326A" />
            ) : (
              <IconProgressClock />
            )}
          </ReceiptListStatus>
        </ReceiptListItemInfo>
      </ReceiptListItem>
    );
  }
}
