import React from 'react';
import styled from 'styled-components';

const LoadingContain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--lavender-blush);
  flex-direction: column;
  padding: 5vw 5vw;
  color: var(--thistle);
`;

const LoadingPage = () => {
  return (
    <LoadingContain>
      <h3>Loading...</h3>
      <img
        src={process.env.PUBLIC_URL + '/assets/loading-1.gif'}
        alt="loading-gif"
      />
    </LoadingContain>
  );
};

export default LoadingPage;
