import React from 'react'
import styled, { keyframes } from "styled-components";
import { Send } from "lucide-react";

const ContactForm = ({
    formData = {},
    errors = {},
    messageLoading = false,
    handleInputChange = () => {},
    handleSubmit = () => {},
    isHuman = false,
    handleHumanChange = () => {},
}) => {
    console.log({errors})
  return (
    <>
          <FormContainer onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="nombre">
                Nombre{" "}
                <span style={{ color: "#df382c", fontWeight: "bold" }}>*</span>
              </Label>
              <Input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                placeholder="Ingresá tu nombre"
                error={!!errors.nombre} 
              />
              {errors.nombre && <ErrorMessage>{errors.nombre}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">
                Email{" "}
                <span style={{ color: "#df382c", fontWeight: "bold" }}>*</span>
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tu@email.com"
                error={!!errors.email}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="mensaje">
                Mensaje{" "}
                <span style={{ color: "#df382c", fontWeight: "bold" }}>*</span>
              </Label>
              <Textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                placeholder="Escribí tu mensaje aquí..."
                error={!!errors.mensaje}
              />
              {errors.mensaje && <ErrorMessage>{errors.mensaje}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <HumanVerificationContainer>
                <CheckboxContainer>
                  <CheckboxInput
                    type="checkbox"
                    id="human"
                    checked={isHuman}
                    onChange={handleHumanChange}
                    error={!!errors.human}
                  />
                  <CheckboxLabel htmlFor="human">
                    Este formulario está siendo enviado por un humano.{" "}
                  </CheckboxLabel>
                </CheckboxContainer>
                {errors.human && <ErrorMessage>{errors.human}</ErrorMessage>}
              </HumanVerificationContainer>
            </FormGroup>

            <SubmitButton type="submit" disabled={messageLoading || !isHuman}>
              {messageLoading ? (
                <>
                  <Spinner animation="border" size="sm" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Enviar Mensaje</span>
                </>
              )}
            </SubmitButton>
          </FormContainer>
    </>
  )
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const FormContainer = styled.form`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  max-width: 520px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: #374151;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${(props) => (props.error ? "#df382c" : "#d1d5db")};
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-family: inherit;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.error ? "#df382c" : "transparent")};
    box-shadow: 0 0 0 2px ${(props) => (props.error ? "#df382c" : "#2563eb")};
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${(props) => (props.error ? "#df382c" : "#d1d5db")};
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-size: 1rem;
  height: 8rem;
  resize: none;
  font-family: inherit;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.error ? "#df382c" : "transparent")};
    box-shadow: 0 0 0 2px ${(props) => (props.error ? "#df382c" : "#2563eb")};
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(90deg, #2563eb 0%, #0891b2 100%);
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  font-size: 1rem;

  &:hover {
    background: linear-gradient(90deg, #1d4ed8 0%, #0e7490 100%);
    transform: scale(1.05);
  }

  &:disabled {
    background: #a8b9f0;
    color: #ffffff;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    opacity: 0.7;
  }
`;

const ErrorMessage = styled.p`
  color: #df382c;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #02488a;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: ${spin} 1s linear infinite;
`;

const HumanVerificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const CheckboxInput = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  
  &:focus {
    outline-offset: 2px;
  }
`;

const CheckboxLabel = styled.label`
  color: #374151;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
`;

export default ContactForm