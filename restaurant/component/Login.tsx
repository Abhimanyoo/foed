import styled from 'react-emotion';

export const LoginBackground = styled('div')`
  background: url(/static/bg-login.jpg) no-repeat;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position-x: 50%;
`;

export const LoginForm = styled('form')`
  background: #4192a3;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 6px 20px 0 rgba(12, 70, 81, 0.3);
`;

export const LoginContainer = styled('div')`
  width: 500px;
  text-align: center;
  padding: 80px 40px;
  color: #fff;
  @media (max-width: 550px) {
    margin: 0 auto;
    width: 100%;
  }
`;

export const LoginTextInput = styled('input')`
  background: rgba(255, 255, 255, 0.19);
  border: 1px solid rgba(255, 255, 255, 0.24);
  color: #fff;

  &:focus {
    background: rgba(255, 255, 255, 0.19);
  }
  &:disabled {
    background: #333;
  }
`;
