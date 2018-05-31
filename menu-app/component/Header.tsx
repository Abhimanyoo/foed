import R from '../routes';
import styled, { css } from 'react-emotion';
import { observer } from 'mobx-react';
import { Store } from 'Store';

interface Props {
  backUrl: string;
  title: string;
  store?: Store;
}

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  height: 45px;
  background: #282f39;
  position: sticky;
  top: 0;
  z-index: 500;
`;

const HeaderTitle = styled('h1')`
  color: #fff;
  margin: 0;
  font-size: 20px;
  font-weight: normal;
  display: flex;
  align-items: center;
`;

const linkStyles = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 12px;
  text-decoration: none;
  font-size: 16px;
`;

export const Header = observer(({ backUrl, title, store }: Props) => {
  return (
    <div className={headerStyles}>
      <R.Link route={backUrl}>
        <a className={linkStyles}>⮃</a>
      </R.Link>
      <HeaderTitle>{title}</HeaderTitle>
      <R.Link route={backUrl}>
        <a className={linkStyles}>{store ? store.order.items.length : ''}</a>
      </R.Link>
    </div>
  );
});
