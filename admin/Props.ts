import { ApolloQueryResult } from 'apollo-boost';
import { NotificationProps } from '@volst/ui-components';

export interface CurrentUser {
  id: string;
  email: string;
  name: string;
  isSuper: boolean;
}

export type AddNotification = (notification: NotificationProps) => void;
export type ApolloRefetch = (
  variables?: any
) => Promise<ApolloQueryResult<any>>;

export interface ScreenProps {
  addNotification: AddNotification;
  currentUser: CurrentUser;
  query: any;
}
