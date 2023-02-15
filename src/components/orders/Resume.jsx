import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { formatPrices } from '../../utils/products_utils/formatPrices';

const ShowResume = keyframes`
0% {
    opacity: 0;
    visibility: hidden;
} 100% {
    opacity: 0.9;
    visibility: visible;
}
`;

const StyledResumeContainer = styled.div`
  opacity: 0.9;
  position: absolute;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: ${({ w }) => w};
  right: 0;
  top: 0;
  z-index: 15;
  background-color: var(--twilight-lavender);
  color: snow;
  border-radius: 20px;
  padding: 10px;
  animation: ${ShowResume} 0.5s linear;
`;

const ItemsContainer = styled.ul`
  background-color: var(--opera-mauve);
  border-radius: 20px;
  padding: 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

const ItemLi = styled.li`
  margin-left: 10px;
  font-size: var(--step--1);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--twilight-lavender);
  padding: 5px;
  border-radius: 5px;
`;

const ItemLiText = styled.p`
  padding: 2px;
`;

export const StyledStatus = styled.span`
  position: absolute;
  cursor: not-allowed;
  color: var(--twilight-lavender);
  font-size: var(--step--1);
  top: 10px;
  right: 10px;
  padding: 5px;
  border-radius: 5px;
  ${({ status }) =>
    status === 'pendiente'
      ? css`
          background-color: #ffff00;
        `
      : status === 'entregado'
      ? css`
          background-color: green;
        `
      : css`
          background-color: red;
        `}
`;

const StyledTotalDiv = styled.div`
  background-color: var(--opera-mauve);
  border-radius: 20px;
  padding: 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  font-weight: 800;
  align-items: center;
  row-gap: 10px;
`;

export const Resume = ({ order }) => {
  const [statusShow, setStatusShow] = useState(false);

  return (
    <StyledResumeContainer w="100%">
      <h4>Resume</h4>
      <ItemsContainer>
        <StyledStatus
          status={order.status}
          onMouseOver={() => setStatusShow(true)}
          onMouseLeave={() => setStatusShow(false)}>
          {statusShow && order.status}
        </StyledStatus>
        {order.items.map((item) => {
          return (
            <ItemLi key={item.id + item.size}>
              <ItemLiText>
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)} -{' '}
                {item.name}
              </ItemLiText>
              <ItemLiText>cant: {item.quantity}</ItemLiText>
              <ItemLiText>
                Sub-total: {formatPrices(item.quantity * item.price)}
              </ItemLiText>
            </ItemLi>
          );
        })}
      </ItemsContainer>
      <StyledTotalDiv>Total: {formatPrices(order.sub_total)}</StyledTotalDiv>
    </StyledResumeContainer>
  );
};

export default Resume;
