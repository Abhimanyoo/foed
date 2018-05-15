import styled, { css } from 'react-emotion';
import R from '../routes';
import { LinkProps } from '@volst/next-routes';

export const Grid = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

// Can't use `styled('a')` since Next.js' `<Link>` component doesn't recognize the <a> in that case.
const linkStyles = css`
  display: flex;
  width: 50%;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;

  @media (min-width: 600px) {
    width: 25%;
  }

  /* Hack to make height the same as width */
  &:before {
    content: '';
    float: left;
    padding-top: 100%;
  }
`;

export const GridItemTitle = styled('span')`
  position: absolute;
  bottom: 10px;
  left: 15px;
`;

export const GridItemImage = styled('img')`
  max-width: 100%;
`;

export const GridItem = ({ children, ...props }: LinkProps) => (
  <R.Link {...props}>
    <a className={linkStyles}>{children}</a>
  </R.Link>
);
