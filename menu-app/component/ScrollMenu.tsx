import styled, { css } from 'react-emotion';
import R from '../routes';
import { LinkProps } from '@volst/next-routes';

export const ScrollMenu = styled('div')`
  background: #6c7a88;
  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
`;

const linkStyles = css`
  color: #fff;
  padding: 12px 16px 13px;
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
`;

export const ScrollMenuItem = ({ children, ...props }: LinkProps) => (
  <R.Link {...props}>
    <a className={linkStyles}>{children}</a>
  </R.Link>
);
