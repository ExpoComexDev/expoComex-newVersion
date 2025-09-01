import React from 'react';
import styled, { keyframes } from 'styled-components';
import { CheckCircle, XCircle } from 'lucide-react';

const SmallModal = ({ show, onClose, message, type }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
      <AnimatedIconContainer type={type}>
          {type === 'success' ? <CheckCircle size={80} /> : <XCircle size={80} />}
        </AnimatedIconContainer>
        <Message>{message}</Message>
        <CloseButton onClick={onClose}>Aceptar</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

const fadeInAndScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  max-width: 400px;
`;

const Message = styled.p`
  margin: 10px 0px 35px 0px;
  font-size: 1.1em;
  color: #333;
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #5a9ce2;
  color: white;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    background-color: #2c6baf;
  }
`;

const AnimatedIconContainer = styled.div`
  color: ${({ type }) => (type === 'success' ? 'green' : 'red')};
  font-size: 4em;
  margin-bottom: 10px;
  animation: ${fadeInAndScale} 0.5s ease-out; 
`;

export default SmallModal;