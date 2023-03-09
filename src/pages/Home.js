import React from 'react';
import styled from 'styled-components';
import Banner from '../components/banner/Banner.jsx';
import SectionCard from '../components/sectioncard/SectionCard.jsx';
import * as URLS from '../constantes/urls';

const MainHomeDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  background: #76536b;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: max-content;
  background-color: var(--thistle);
  display: flex;
  flex-flow: row wrap;
  @media screen and (min-width: 1080px) {
    width: 80%;
  }
`;

const Home = () => {
  return (
    <MainHomeDiv>
      <HomeContainer className="fade-in-blur-first">
        <Banner />
        <SectionCard
          imageUrl={URLS.VELAS_URL}
          altname="Velas-de-soja"
          h2Text="Velas de Soja"
          pText="Un mimo al espirito. Frutos del Bosque, Vainilla Primavera, Lavanda y Maracuyá."
          href="/velas"
        />
        <SectionCard
          imageUrl={URLS.DIFUSORES_URL}
          altname="Difusores-de-olor"
          h2Text="Difusores"
          pText="Un mimo a la mente. En las fragancias Flores Blancas, Vainilla y Bamboo y Sandalo."
          href="/difusores"
        />
        <SectionCard
          imageUrl={URLS.SALES_URL}
          altname="Sales-de-baño"
          h2Text="Sales de Baño"
          pText="Un mimo a la piel. Disponibles en Jasmin, Petala de Rosas y Naranja."
          href="/sales"
        />
        <SectionCard
          imageUrl={URLS.BOMBAS_URL}
          altname="Bombas-efervecentes"
          h2Text="Bombas Efervecentes"
          pText="Renovación y revitalización completas - un momento a sos con
               lo que mereces. Té Verde y Pétalas de Rosas"
          href="/bombas"
        />
      </HomeContainer>
    </MainHomeDiv>
  );
};

export default Home;
