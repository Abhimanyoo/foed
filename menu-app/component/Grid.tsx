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

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 50%;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5)
    );
  }
`;

export const GridItemTitle = styled('span')`
  position: absolute;
  z-index: 2;
  bottom: 10px;
  left: 15px;
  text-shadow: 0 1px 0 black;
`;

export const GridItemImage = styled('img')`
  width: 100%;
  height: 100%;
`;

export const GridItem = ({ children, ...props }: LinkProps) => (
  <R.Link {...props}>
    <a className={linkStyles}>{children}</a>
  </R.Link>
);
