import styled from 'react-emotion';

export const FloatingButtons = styled('div')`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 0 12px 20px 20px;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(66, 146, 163, 1) 100%
  );
`;
