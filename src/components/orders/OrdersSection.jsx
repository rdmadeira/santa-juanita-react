import React from 'react';
import styled from 'styled-components';

const OrdersConteiner = styled.section`
  background: white;
  height: 80vh;
  width: 100%;
  display: flex;
  padding: 3vw 5vw;
`;

const OrdersSection = () => {
  return (
    <OrdersConteiner>
      <h2>Tus Ordenes son:</h2>
    </OrdersConteiner>
  );
};

export default OrdersSection;
