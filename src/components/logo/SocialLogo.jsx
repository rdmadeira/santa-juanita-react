import React from 'react';

const SocialLogo = ({ imageUrl, name, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{ width: '8%', maxWidth: '25px' }}>
      <img
        src={imageUrl}
        alt={`logo-${name}`}
        title={`logo-${name}`}
        width="100%"
        height="auto"
      />
    </a>
  );
};

export default SocialLogo;
