import styled from 'react-emotion';

const ReceiptContainer = styled('div')`
  position: relative;
  color: #333;
  margin: 14px 10px 40px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  background: #fff;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    top: -3px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSA0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCw0bDcuMy00TDE1LDRIMHoiLz48L3N2Zz4=);
  }

  &:after {
    top: unset;
    bottom: -3px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSA0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUsMEw3LjcsNEwwLDBIMTV6Ii8+PC9zdmc+);
  }
`;

export const ReceiptRestaurant = styled('div')`
  padding-bottom: 20px;
`;

const ReceiptContent = styled('div')`
  position: relative;
  z-index: 1;
`;

export const Receipt = props => (
  <ReceiptContainer {...props}>
    <ReceiptContent>{props.children}</ReceiptContent>
  </ReceiptContainer>
);

export const ReceiptHeader = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;
