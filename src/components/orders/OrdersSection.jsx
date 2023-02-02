import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Order } from './Order.jsx';
import { TitleH2 } from '../ui/TitleH2.jsx';

const OrdersMainContainer = styled.section`
  background: white;
  position: relative;
  width: 100%;
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3vw 5vw;
`;

const OrdersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 20px;
`;

const OrdersTitleH2 = styled(TitleH2)`
  color: var(--pink-lavender);
`;

const OrdersSection = () => {
  const orders = useSelector((store) => store.orders);

  return (
    <OrdersMainContainer>
      <OrdersTitleH2>Tus Ordenes son:</OrdersTitleH2>
      <OrdersContainer>
        {orders ? (
          orders.map((order, index) => {
            return <Order order={order} index={index} key={order.id} />;
          })
        ) : (
          <h3>No hay ordenes</h3>
        )}
      </OrdersContainer>
    </OrdersMainContainer>
  );
};

export default OrdersSection;