import styled, { css } from 'react-emotion';
import R from '../routes';
import { LinkProps } from '@volst/next-routes';

export const Grid = styled('div')``;

// Can't use `styled('a')` since Next.js' `<Link>` component doesn't recognize the <a> in that case.
const linkStyles = css`
  display: flex;
  width: 100%;
  color: #efffea;
  font-weight: bold;
  text-decoration: none;
  position: relative;
  padding: 0 20px;
  margin-bottom: 20px;
  font-size: 18px;
`;

export const GridItemTitle = styled('span')`
  margin: 15px 0 0 15px;
`;

export const GridItemImage = styled('img')`
  width: 125px;
  height: 125px;
  border-radius: 15px;
  box-shadow: 0 4px 10px 0 rgba(12, 70, 81, 0.36);
  background: rgba(255, 255, 255, 0.3);
`;

export const GridItem = ({ children, ...props }: LinkProps) => (
  <R.Link {...props}>
    <a className={linkStyles}>{children}</a>
  </R.Link>
);
