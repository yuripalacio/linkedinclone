import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://github.com/yuripalacio.png"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Yuri Palacio</h1>
        <h2>
          Desenvolvedor Node.js, React e <br /> ADVPL
        </h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">100</span>
        </div>
        <div className="key-value">
          <span className="key">Conexões</span>
          <span className="value">157</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
