import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Banner from '../banner/Banner.jsx';
import { TitleH2 } from '../ui/TitleH2.jsx';

const StyledSection = styled.section`
  width: 100%;
  overflow: hidden;
  height: max-content;
  padding: 0 0 2vw 0;
  background: #000000bf;
  position: absolute;
  right: 0px;
  display: flex;
  justify-content: center;
  transition: all 0.8s 0.2s ease;
  z-index: 2;
`;

const StyledBtnCerrar = styled.button`
  padding: 3% 3.5%;
  border: 1px solid var(--snow);
  background: transparent;
  color: var(--snow);
  font-weight: 800;
  border-radius: 5px;
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
`;

const StyledFormContainer = styled.div`
  width: 60%;
  display: flex;
  row-gap: 1vw;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
  margin-left: 8vw;
  transition: all 0s 1s ease;
`;

const ContactTitle = styled(TitleH2)`
  color: var(--snow);
`;

const ContactForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1vw;
`;

const ContactInput = styled.input`
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: 1vw 1vw;
  width: 65%;
`;

const ContactTextArea = styled.textarea`
  border-radius: 5px;
  padding: 1vw 1vw;
  width: 65%;
`;

const LogoContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  row-gap: 5vw;
  width: 35%;
  padding: 30px;
  max-width: 166px;
`;

const ContactButton = styled.button`
  padding: 6% 30%;
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  background: #303356;
  border: none;
  color: var(--snow);
  &:hover {
    background: #542aff;
    color: var(--snow);
    transition-property: all;
    transition-duration: 0.6s;
    cursor: pointer;
  }
`;

const ContactContainer = () => {
  const navigate = useNavigate();

  const submitContactHandle = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Banner />
      <StyledSection id="contactos">
        <StyledBtnCerrar id="btn-cerrar" onClick={() => navigate('/')}>
          {' '}
          X{' '}
        </StyledBtnCerrar>
        <StyledFormContainer>
          <ContactTitle>Dejanos un mensaje!</ContactTitle>
          <ContactForm
            name="formContacto"
            id="form-contacto"
            onSubmit={submitContactHandle}>
            <ContactInput
              type="text"
              name="Nombre"
              id="nombre"
              placeholder="Nombre"
            />
            <ContactInput
              type="text"
              name="Apellido"
              id="apellido"
              placeholder="Apellido"
            />
            <ContactInput
              type="number"
              name="Telefono"
              id="telefono"
              placeholder="Teléfono"
            />
            <ContactInput
              type="email"
              name="email"
              id="email"
              placeholder="Correo Electronico"
            />
            <ContactTextArea
              name="mensaje"
              id="mensaje"
              cols="30"
              rows="8"
              placeholder="Deje Aqui tu Mensaje"></ContactTextArea>
            <LogoContactContainer>
              <img
                src="./assets/Contacts_29936.png"
                alt="logo-contacto-agenda"
                style={{ 'max-width': '100%', 'max-height': '100%' }}
              />
              <ContactButton type="submit" id="buton-enviar">
                ENVIAR
              </ContactButton>
            </LogoContactContainer>
          </ContactForm>
        </StyledFormContainer>
      </StyledSection>
    </>
  );
};

export default ContactContainer;
