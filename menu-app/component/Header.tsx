import R from '../routes';
import styled, { css } from 'react-emotion';
import { observer } from 'mobx-react';
import { Store } from 'Store';
import { IconOrder } from './icon/Order';
import { IconArrowBack } from './icon/ArrowBack';
import { Fragment } from 'react';

interface Props {
  backUrl?: string;
  backTitle?: string;
  subTitle?: string;
  store?: Store;
}

function handleBack() {
  R.Router.back();
}

export const Subheading = styled('h2')`
  background: #67abb8;
  font-weight: normal;
  color: #efffea;
  padding: 20px 20px;
  margin: 0;
  font-size: 18px;
`;

const headerStyles = css`
  background: #67abb8;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  height: 45px;
  position: sticky;
  top: 0;
  z-index: 500;
`;

const linkStyles = css`
  color: #efffea;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0 12px;
  text-decoration: none;
  font-size: 16px;
  background: transparent;
  border: none;
`;

export const Header = observer(
  ({ backUrl, backTitle, subTitle, store }: Props) => {
    const disabledOrder = store.order.items.length;
    return (
      <Fragment>
        <div className={headerStyles}>
          {backUrl ? (
            <R.Link route={backUrl}>
              <a className={linkStyles}>
                <IconArrowBack fill="#efffea" />
                {backTitle}
              </a>
            </R.Link>
          ) : (
            <button className={linkStyles} onClick={handleBack}>
              <IconArrowBack fill="#efffea" />
              {backTitle}
            </button>
          )}
          <R.Link route="/order" prefetch={!disabledOrder}>
            <a className={linkStyles}>
              {store ? (
                <IconOrder text={store.order.items.length} fill="#efffea" />
              ) : null}
            </a>
          </R.Link>
        </div>
        {subTitle && <Subheading>{subTitle}</Subheading>}
      </Fragment>
    );
  }
);
