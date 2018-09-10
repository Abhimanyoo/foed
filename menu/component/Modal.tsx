import React from 'react';
import styled, { css } from 'react-emotion';
import { Transition } from 'react-spring';
import IconClose from './icon/Close';

const ModalContainer = styled('div')`
  display: flex;
  flex-direction: column;
  background: #fff;
  color: #333;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100000;
`;

export const ModalContent = styled('div')`
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled('div')`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
`;

export const ModalFooter = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #eee;
`;

const ModalTitle = styled('div')`
  flex: 1;
  display: flex;
  font-weight: 700;
  justify-content: center;
  margin-right: 48px;
`;

const linkStyles = css`
  color: #fff;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 0 12px;
  text-decoration: none;
  font-size: 16px;
  background: transparent;
  border: none;
`;

interface ModalProps {
  visible?: boolean;
  children: React.ReactNode;
  title?: string;
  onClose?: () => void;
}

export class Modal extends React.Component<ModalProps, {}> {
  render() {
    const { visible, children, onClose, title } = this.props;

    return (
      <Transition
        from={{ top: '100%' }}
        enter={{ top: '0%' }}
        leave={{ top: '100%' }}
      >
        {visible &&
          (styles => (
            <ModalContainer style={styles}>
              <ModalHeader>
                <button className={linkStyles} onClick={onClose}>
                  <IconClose fill="#333" />
                </button>
                <ModalTitle>{title}</ModalTitle>
              </ModalHeader>
              <ModalContent>{children}</ModalContent>
            </ModalContainer>
          ))}
      </Transition>
    );
  }
}
