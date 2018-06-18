import { css } from 'react-emotion';

const backgroundStyles = css`
  position: relative;
`;

const counterStyles = css`
  width: 40px;
  background: #378291;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 8px;
    width: 100%;
    top: -8px;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSA4Ij48cGF0aCBkPSJNMCA4bDcuMy04TDE1IDh6IiBmaWxsPSIjMzc4MjkxIi8+PC9zdmc+');
  }

  &:after {
    top: unset;
    bottom: -8px;
    transform: rotate(180deg);
  }
`;

const contentStyles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 40px;
  right: 0;
  z-index: -1;
  background: rgba(255, 255, 255, 0.14);

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 8px;
    width: 100%;
    top: -8px;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSA4Ij48cGF0aCBkPSJNMCA4bDcuMy04TDE1IDh6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMTQiLz48L3N2Zz4=');
  }

  &:after {
    top: unset;
    bottom: -8px;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSA4Ij48cGF0aCBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMTQiIGQ9Ik0xNSAwTDcuNyA4IDAgMHoiLz48L3N2Zz4=');
  }
`;

export const ReceiptBackground = props => (
  <div className={backgroundStyles}>
    <div className={counterStyles} />
    <div className={contentStyles} />
    {props.children}
  </div>
);
