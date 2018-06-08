import styled from 'react-emotion';

interface ButtonProps {
  tone?: 'secondary';
}

export const Button = styled<ButtonProps, 'button'>('button')`
  background: ${props => (props.tone === 'secondary' ? '#979797' : '#59bfb3')};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  margin: 8px 8px 8px 0;
  outline: 0;

  &:active {
    opacity: 0.8;
  }
`;
