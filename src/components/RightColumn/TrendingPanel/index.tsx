import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const TrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Assuntos mais discutidos</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">
                Há vagas: confira oportunidades no setor de ti
              </span>
              <span className="subtext">há 13 h • 7.418 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">
                Inspire os outros atŕavés da sua história
              </span>
              <span className="subtext">há 1 d</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">
                Bancos criam conselho consultivo para Amazônia
              </span>
              <span className="subtext">há 20 h</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">
                Carreira jovem: como conquistar o 1º emprego na pandemia?
              </span>
              <span className="subtext">há 17 h • 7.036 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">
                Dono da Amazon alcança fortuna de US$ 200 bi
              </span>
              <span className="subtext">há 4 h</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">
                Número de lojas exclusivamente virtuais aumenta 41%
              </span>
              <span className="subtext">há 13 h</span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;
