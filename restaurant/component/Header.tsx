import R from '../routes';
import styled, { css } from 'react-emotion';
import { observer } from 'mobx-react';
import { IconArrowBack } from './icon/ArrowBack';
import { IconCog } from './icon/Cog';
import { Fragment } from 'react';

interface Props {
  backUrl?: string;
  backTitle?: string;
  hideBack?: boolean;
  title?: string;
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
  font-weight: bold;
  color: #fff;
  padding: 20px;
  margin: 0;
  font-size: 38px;
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
  ({ hideBack, backUrl, backTitle, title }: Props) => {
    return (
      <Fragment>
        <div className={headerStyles}>
          {!hideBack &&
            (backUrl ? (
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
            ))}
          {title && <Heading>{title}</Heading>}
          <R.Link route="/settings">
            <a className={linkStyles}>
              <IconCog fill="#fff" />
            </a>
          </R.Link>
        </div>
      </Fragment>
    );
  }
);
