import * as React from 'react';
import styled from 'styled-components';
import backgroundImg from '../image/bg-login.jpg';
import { TextInput } from '@volst/ui-components';

export const LoginBackground = styled.div`
  background: url(${backgroundImg}) no-repeat;
  width: 100%;
  height: 100vh;
  background-size: cover;
`;

export const LoginContainer = styled.div`
  width: 260px;
  margin: 0 20px 0 250px;
  text-align: center;
  color: #fff;
  @media (max-width: 550px) {
    margin: 0 auto;
  }
`;

const StyledLogo = styled.h1`
  color: #fff;
  margin: 60px 0;
`;

export const LoginTextInput = styled(TextInput as any)`
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

export const LoginLogo = () => <StyledLogo>new food order</StyledLogo>;
