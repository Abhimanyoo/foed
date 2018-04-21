import * as React from 'react';
import { NotificationStack, NotificationProps } from '@volst/ui-components';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
export class NotificationArea extends React.Component {
  readonly notifications = observable<NotificationProps>([]);

  addNotification = (msg: NotificationProps) => {
    // Notifications with the same key have the same contents, so we don't want to display them twice.
    // Existing ones are removed so the notification stays longer on the screen.
    const existingMsg = this.notifications.find(a => a.key === msg.key);
    if (existingMsg) {
      this.notifications.remove(existingMsg);
    }
    this.notifications.push(msg);
  };

  dismiss = notification => {
    this.notifications.remove(notification);
  };

  render() {
    return (
      <NotificationStack
        notifications={this.notifications.slice()}
        onDismiss={this.dismiss}
      />
    );
  }
}
