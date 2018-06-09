import { css } from 'react-emotion';

const fillInRoomStyles = css`
  width: 100%;
  height: 80px;
`;

const floatingStyles = css`
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

export const FloatingButtons = props => (
  <div className={fillInRoomStyles}>
    <div className={floatingStyles}>{props.children}</div>
  </div>
);
