import React from 'react';
import styled from 'styled-components';
import Logo from '../logo/Logo.jsx';
import SocialLogo from '../logo/SocialLogo.jsx';

const StyledFooter = styled.footer`
  background: var(--queen-pink);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 3vw 0;
  border-top: solid 30px var(--twilight-lavender);
`;

const LogoFooter = styled(Logo)`
  width: 12%;
  min-width: 125px;
`;

const SocialLogosContainer = styled.div`
  display: flex;
  column-gap: 8vw;
  width: 40%;
  min-width: 280px;
  margin-top: 20px;
  justify-content: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <LogoFooter />
      <SocialLogosContainer>
        <SocialLogo
          imageUrl={process.env.PUBLIC_URL + '/assets/instagram-logo-2.svg'}
          name="instagram"
          link="https://www.instagram.com/santajuanitaok/"
        />
        <SocialLogo
          imageUrl={process.env.PUBLIC_URL + '/assets/whatsapp-logo.svg'}
          name="whatsapp"
          link="https://api.whatsapp.com/send?phone=5491153429939&text=Deja%20Aqui%20Tu%20Mensaje"
        />
        <SocialLogo
          imageUrl={process.env.PUBLIC_URL + '/assets/face-logo.svg'}
          name="facebook"
          link="#"
        />
        <SocialLogo
          imageUrl={process.env.PUBLIC_URL + '/assets/twitter-logo.svg'}
          name="twitter"
          link="#"
        />
      </SocialLogosContainer>
    </StyledFooter>
  );
};

export default Footer;
