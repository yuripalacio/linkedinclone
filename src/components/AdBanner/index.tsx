import React from 'react';

import { Container } from './styles';

const AdBanner: React.FC = () => {
  return (
    <Container className="banner">
      <a href="https://www.linkedin.com/in/yuri-palacio/" target="_blank">
        <span>Yuri Palacio - </span>
        Desenvolvedor em busca de novas opotunidades.
      </a>
    </Container>
  );
};

export default AdBanner;
