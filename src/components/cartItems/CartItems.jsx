import React from 'react';
import styled from 'styled-components';

const MyCartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const MyCartContent = styled.div`
  position: absolute;
  z-index: 1000;
  background-color: var(--snow);
  width: 80%;
  height: 80vh;
`;
const MyCartShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #3c1d2fb0;
`;
const MyCart = () => {
  return (
    <>
      <MyCartContainer>
        <MyCartShadow />
        <MyCartContent />
      </MyCartContainer>
    </>
  );
};

export default MyCart;
