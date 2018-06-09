import { css } from 'react-emotion';

const backgroundStyles = css`
  position: relative;
`;

const counterStyles = css`
  width: 30px;
  background: #3e93a4;
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
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSA4Ij48c3R5bGU+LnN0MHtmaWxsOiMzZTkzYTR9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMCA4bDcuMy04TDE1IDh6Ii8+PC9zdmc+');
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
  left: 30px;
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
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSA4Ij48c3R5bGU+LnN0MHtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjAuMTR9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMCA4bDcuMy04TDE1IDh6Ii8+PC9zdmc+');
  }

  &:after {
    top: unset;
    bottom: -8px;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSA4Ij48c3R5bGU+LnN0MHtmaWxsOiNmZmY7ZmlsbC1vcGFjaXR5Oi4xNH08L3N0eWxlPjxwYXRoIGlkPSJQYXRoLTIiIGNsYXNzPSJzdDAiIGQ9Ik0xNSAwTDcuNyA4IDAgMHoiLz48L3N2Zz4=');
  }
`;

export const ReceiptBackground = props => (
  <div className={backgroundStyles}>
    <div className={counterStyles} />
    <div className={contentStyles} />
    {props.children}
  </div>
);
