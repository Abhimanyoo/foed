import styled from 'react-emotion';

const bgColor = '#6dadb9';

export const ReceiptBackground = styled('div')`
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0;
  padding: 20px 0;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    display: block;

    height: 10px;
    bottom: -10px;
    left: 0;
    right: 0;
    background: linear-gradient(
        45deg,
        transparent 33.333%,
        ${bgColor} 33.333%,
        ${bgColor} 66.667%,
        transparent 66.667%
      ),
      linear-gradient(
        -45deg,
        transparent 33.333%,
        ${bgColor} 33.333%,
        ${bgColor} 66.667%,
        transparent 66.667%
      );

    background-size: 8px 20px; /* toothSize doubleHeight */
    background-position: 0 -10px; /* horizontalOffset -height */
  }

  &:after {
    content: '';
    position: absolute;
    display: block;

    height: 10px;
    top: -10px;
    left: 0;
    right: 0;
    background: linear-gradient(
        45deg,
        ${bgColor} 33.333%,
        transparent 33.333%,
        transparent 66.667%,
        ${bgColor} 66.667%
      ),
      linear-gradient(
        -45deg,
        ${bgColor} 33.333%,
        transparent 33.333%,
        transparent 66.667%,
        ${bgColor} 66.667%
      );

    background-size: 8px 20px; /* toothSize doubleHeight */
    background-position: 0 -10px; /* horizontalOffset -height */
  }
`;
