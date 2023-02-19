import React, { useState } from 'react';
import styled from 'styled-components';
import { formatPrices } from '../../utils/products_utils/formatPrices';
import { dateFormat } from '../../utils/orders_utils/ordersUtils';
import { Resume, StyledStatus } from './Resume.jsx';

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3vw;
  padding: 2vw 3vw;
  background-color: var(--queen-pink);
  border-radius: 20px;
  position: relative;
  /* cursor: pointer; */
  &:hover {
    background-color: #faf7f9;
  }
`;

const StyledLine = styled.hr`
  color: black;
`;

const StyledItemsP = styled.p`
  font-size: var(--step--1);
`;

export const Order = ({ order, index }) => {
  const [resumeShow, setResumeShow] = useState(false);
  console.log(order.createdAt);
  return (
    <OrderContainer
      onMouseOver={() => setResumeShow(true)}
      onMouseLeave={() => setResumeShow(false)}>
      <h4>Pedido {index + 1}</h4>
      <StyledStatus status={order.status}></StyledStatus>
      <StyledItemsP>Pedido {dateFormat(order.createdAt)}</StyledItemsP>
      <StyledLine />
      <StyledItemsP>Sub-total: {formatPrices(order.sub_total)}</StyledItemsP>
      {resumeShow && <Resume key={order.id.slice(0, 5)} order={order}></Resume>}
    </OrderContainer>
  );
};
