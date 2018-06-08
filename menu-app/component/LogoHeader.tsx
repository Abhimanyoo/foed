import styled from 'react-emotion';

export const Subheading = styled<{ secondary?: boolean }, 'h2'>('h2')`
  font-weight: normal;
  color: ${props => (props.secondary ? '#5fa4b1' : '#efffea')};
  padding: 20px 20px;
  margin: 0;
  font-size: 18px;
  background: ${props => props.secondary && '#fff'};
`;
