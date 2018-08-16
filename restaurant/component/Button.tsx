import styled from 'react-emotion';

interface ButtonProps {
  tone?: 'secondary';
}

export const Button = styled<ButtonProps, 'button'>('button')`
  width: 100%;
  background: ${props => (props.tone === 'secondary' ? '#979797' : '#333')};
  box-shadow: 0 10px 20px rgba(51, 51, 51, 0.3);
  color: #fff;
  padding: 11px;
  margin: 10px 10px 10px 0;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  outline: 0;

  &:active {
    opacity: 0.8;
  }
`;
