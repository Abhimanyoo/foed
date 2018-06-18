import styled, { css } from 'react-emotion';
import R from '../routes';
import { LinkProps } from '@volst/next-routes';

export const ScrollMenu = styled('div')`
  background: #fff;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  position: sticky;
  top: 45px;
  z-index: 1;
`;

interface StyledLinkProps {
  active?: boolean;
}

const StyledLink = styled<StyledLinkProps, 'a'>('a')`
  color: #3e93a4;
  padding: 12px 0 13px 20px;
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
  position: relative;

  ${props => (props.active ? activeLinkStyles : '')};
`;

const activeLinkStyles = css`
  color: #c46b2f;
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 10px;
    height: 10px;
    margin-left: 5px;
    background: #3e93a4;
    border: solid #3e93a4;
    border-width: 0 3px 3px 0;
    transform: rotate(-135deg);
  }
`;

export const ScrollMenuItem = ({
  children,
  active,
  ...props
}: LinkProps & StyledLinkProps) => (
  <R.Link {...props} passHref>
    <StyledLink active={active}>{children}</StyledLink>
  </R.Link>
);
