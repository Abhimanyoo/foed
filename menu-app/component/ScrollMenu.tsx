import styled, { css } from 'react-emotion';
import R from '../routes';
import { LinkProps } from '@volst/next-routes';

export const ScrollMenu = styled('div')`
  background: #6c7a88;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
`;

interface StyledLinkProps {
  active?: boolean;
}

const StyledLink = styled<StyledLinkProps, 'a'>('a')`
  color: #fff;
  padding: 12px 16px 13px;
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
  position: relative;

  ${props => (props.active ? activeLinkStyles : '')};
`;

const activeLinkStyles = css`
  color: #a3fedf;
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 10px;
    height: 10px;
    margin-left: -5px;
    background: #a3fedf;
    border: solid #a3fedf;
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
