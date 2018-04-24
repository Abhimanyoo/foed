import * as H from 'history';
import { match } from 'react-router-dom';
import { ApolloQueryResult } from 'apollo-client';
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
  history: H.History;
  location: H.Location;
  match: match<any>;
  addNotification: AddNotification;
  refetchBootstrap: () => void;
  currentUser: CurrentUser;
}
