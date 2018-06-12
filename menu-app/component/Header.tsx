import R from '../routes';
import { css } from 'react-emotion';
import { observer } from 'mobx-react';
import { Store } from 'Store';
import { IconOrder } from './icon/Order';
import { IconArrowBack } from './icon/ArrowBack';

interface Props {
  backUrl?: string;
  backTitle?: string;
  store?: Store;
}

function handleBack() {
  R.Router.back();
}

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  height: 45px;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 500;
`;

const linkStyles = css`
  color: #4493a4;
  display: flex;
  align-items: center;
  padding: 0 12px;
  text-decoration: none;
  font-size: 16px;
  background: transparent;
  border: none;
`;

export const Header = observer(({ backUrl, backTitle, store }: Props) => {
  const disabledOrder = store.order.items.length;
  return (
    <div className={headerStyles}>
      {backUrl ? (
        <R.Link route={backUrl}>
          <a className={linkStyles}>
            <IconArrowBack fill="#4493a4" />
            {backTitle}
          </a>
        </R.Link>
      ) : (
        <button className={linkStyles} onClick={handleBack}>
          <IconArrowBack fill="#4493a4" />
          {backTitle}
        </button>
      )}
      <R.Link route="/order" prefetch={!disabledOrder}>
        <a className={linkStyles}>
          {store ? (
            <IconOrder text={store.order.items.length} fill="#4493a4" />
          ) : null}
        </a>
      </R.Link>
    </div>
  );
});
