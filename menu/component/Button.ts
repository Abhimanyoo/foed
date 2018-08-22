import styled, { keyframes } from 'react-emotion';

interface ButtonProps {
  tone?: 'secondary';
  loading?: boolean;
}

const sweep = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Button = styled<ButtonProps, 'button'>('button')`
  background: ${props => (props.tone === 'secondary' ? '#979797' : '#91a538')};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  margin: 8px 8px 8px 0;
  outline: 0;
  position: relative;

  &:active {
    opacity: 0.8;
  }

  ${props =>
    props.loading &&
    `
      &:after {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        margin: -9px 0 0 -9px;
        width: 24px;
        height: 24px;
        animation: ${sweep} 0.7s infinite linear;
        border-radius: 12px;
        box-shadow: 4px 0 0 -3px black;
      }`};
`;
