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
  title?: string;
  store?: Store;
}

function handleBack() {
  R.Router.back();
}

export const Heading = styled('h1')`
  background: #3e93a4;
  font-weight: bold;
  color: #fff;
  padding: 10px 10px;
  margin: 0;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

export const Subheading = styled('h2')`
  background: #3e93a4;
  font-weight: 500;
  color: #fff;
  padding: 10px;
  margin: 0;
  font-size: 24px;
  font-weight: 500;
`;

const headerStyles = css`
  background: #3e93a4;
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
  color: #fff;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 0 12px;
  text-decoration: none;
  font-size: 16px;
  background: transparent;
  border: none;
`;

export const Header = observer(
  ({ backUrl, backTitle, subTitle, store, title }: Props) => {
    const disabledOrder = store.order.items.length;
    return (
      <Fragment>
        <div className={headerStyles}>
          {backUrl ? (
            <R.Link route={backUrl}>
              <a className={linkStyles}>
                <IconArrowBack fill="#fff" />
                {backTitle}
              </a>
            </R.Link>
          ) : (
            <button className={linkStyles} onClick={handleBack}>
              <IconArrowBack fill="#fff" />
              {backTitle}
            </button>
          )}
          {title && <Heading>{title}</Heading>}
          <R.Link route="/order" prefetch={!disabledOrder}>
            <a className={linkStyles}>
              {store ? (
                <IconOrder count={store.order.items.length} fill="#fff" />
              ) : null}
            </a>
          </R.Link>
        </div>
        {subTitle && <Subheading>{subTitle}</Subheading>}
      </Fragment>
    );
  }
);
