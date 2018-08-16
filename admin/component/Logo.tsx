import * as React from 'react';
import styled from 'react-emotion';
import R from '../routes';

const StyledNavLink = styled('a')`
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin: 0 10px;
  font-size: 26px;
  font-weight: 300;
  text-decoration: none;
  color: inherit;

  svg,
  img {
    max-width: 100%;
  }
`;

const Logo: React.SFC = props => (
  <R.Link route="/" passHref>
    <StyledNavLink>{props.children}</StyledNavLink>
  </R.Link>
);

export default Logo;
