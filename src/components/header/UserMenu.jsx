import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/user/userActions';

const UserMenuContainer = styled.ul`
  position: absolute;
  bottom: -80px;
  right: 10px;
  background-color: var(--snow);
  color: var(--twilight-lavender);
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
`;

const UserMenuLi = styled.li`
  width: 100%;
  padding: 5px 0;
`;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandle = () => {
    dispatch(logoutUser());
    navigate('/');
  };
  return (
    <UserMenuContainer>
      <UserMenuLi onClick={() => navigate('orders')}>Mis Ordenes</UserMenuLi>
      <UserMenuLi onClick={logoutHandle}>Cerrar sesion</UserMenuLi>
    </UserMenuContainer>
  );
};
