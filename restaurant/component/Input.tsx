import styled from 'react-emotion';

interface InputProps {
  addonBefore?: boolean;
  addonAfter?: boolean;
}

export const Input = styled<InputProps, 'input'>('input')`
  width: 100%;
  background: #fff;
  padding: 14px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  margin: 8px 8px 8px 0;
  outline: 0;
  ${props => props.addonBefore && 'padding-left: 42px;'};
  ${props => props.addonAfter && 'padding-right: 42px;'};
`;

export const InputContainer = styled('div')`
  width: 100%;
  position: relative;
`;

export const InputAddon = styled('div')`
  position: absolute;
  pointer-events: none;
  left: 12px;
  top: 21px;
`;
