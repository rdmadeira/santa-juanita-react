import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  column-gap: 10px;
  row-gap: 10px;
  height: fit-content;
  background-color: var(--queen-pink);
`;

const StyledGalleryTitle = styled.h2`
  text-align: center;
  align-self: center;
  width: 100%;
  color: var(--twilight-lavender);
  font-size: max(3.2vw, 26px);
  margin: 3vw 0vw 5vw;
  @media (max-width: 1080px) {
    font-size: max(5.2vw, 26px);
  } ;
`;

const StyledIframe = styled.iframe`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
`;

const GaleriaContent = () => {
  return (
    <GalleryContainer className="ctn-gallery">
      <StyledGalleryTitle>Galería de Fotos</StyledGalleryTitle>
      <StyledIframe
        className="gallery-frame"
        src="https://flickrembed.com/cms_embed.php?source=flickr&layout=responsive&input=72177720298119960&sort=0&by=album&theme=default_notextpanel&scale=fit&speed=3000&limit=15&skin=default-light&autoplay=true"
        scrolling="no"
        frameBorder="0"
        allowFullScreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        title="galleryIframe">
        <p>
          <a href="https://www.compareboilercover.co.uk">
            Compare Boiler Insurance Policies
          </a>
        </p>
        <small>
          Powered by <a href="https://flickrembed.com">flickr embed</a>
        </small>
      </StyledIframe>
    </GalleryContainer>
  );
};

export default GaleriaContent;
