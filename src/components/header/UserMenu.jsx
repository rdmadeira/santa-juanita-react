import React from 'react';
import styled, { css, keyframes } from 'styled-components';
/* import { useDispatch } from 'react-redux';
 */ import { useNavigate } from 'react-router-dom';
/* import { logoutUser } from '../../redux/user/userActions';
 */ /* import { auth } from 'firebase-admin'; */
import { signOut, getAuth } from 'firebase/auth';

const Shadow = styled.div`
  width: 110vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: -5px;
  background-color: #f0f8ff80;
`;

const ShowDown = keyframes`
0% {
  transform: scaleY(0) translateY(-10px);
  opacity: 0;
} 100% {
  transform: scaleY(1) translateY(0);
  opacity: 1;
}`;

const ByeUp = keyframes`
0% {
  transform: scaleY(1) translateY(0px);
  opacity: 1;
} 100% {
  transform: scaleY(0) translateY(-10px);
  opacity: 0;
}`;

const UserMenuContainer = styled.ul`
  position: absolute;
  border-radius: 10px;
  border: 1px solid var(--opera-mauve);
  top: calc(100% + 5px);
  background-color: var(--lavender-blush);
  color: var(--twilight-lavender);
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 10px 0px;
  transform-origin: top;
  animation: ${({ hiddenMenu }) =>
    !hiddenMenu
      ? css`
          ${ByeUp} 0.5s ease-out forwards
        `
      : css`
          ${ShowDown} 0.3s ease-out forwards
        `};
  width: max-content;
  right: 10px;
`;

const UserMenuLi = styled.li`
  width: 100%;
  padding: 10px 25px;
  &:hover {
    background-color: var(--mulberry);
    color: var(--snow);
  }
`;

export const UserMenu = ({ hiddenMenu }) => {
  const navigate = useNavigate();

  const logoutHandle = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <>
      <Shadow />
      <UserMenuContainer hiddenMenu={hiddenMenu}>
        <UserMenuLi onClick={() => navigate('orders')}>Mis Ordenes</UserMenuLi>
        <UserMenuLi onClick={logoutHandle}>Cerrar sesion</UserMenuLi>
      </UserMenuContainer>
    </>
  );
};
