import R from '../routes';
import styled, { css } from 'react-emotion';

interface Props {
  backUrl: string;
  title: string;
}

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const HeaderTitle = styled('h1')`
  color: #fff;
  margin: 0;
  font-size: 20px;
  font-weight: normal;
`;

const linkStyles = css`
  color: #fff;
  display: inline-block;
  padding: 12px;
  text-decoration: none;
  font-size: 16px;
`;

export const Header = (props: Props) => (
  <div className={headerStyles}>
    <R.Link route={props.backUrl}>
      <a className={linkStyles}>⮃</a>
    </R.Link>
    <HeaderTitle>{props.title}</HeaderTitle>
    <div />
  </div>
);
