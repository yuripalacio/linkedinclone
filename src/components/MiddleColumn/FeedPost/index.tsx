import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1606348800&v=beta&t=93FRlswix7OHAke9W2XGpmQsbkPAKK8g8NYWf_7F1a0"
            alt="Linkdin"
          />
          <Column>
            <h3>LinkedIn</h3>
            <h4>12.739.887 seguidores</h4>
            <time>1 m</time>
          </Column>
        </Row>

        <PostImage
          src="http://interativacomunica.com.br/itcom/wp-content/uploads/2018/03/LinkedIn-Conhe%C3%A7a-as-empresas-que-fazem-sucesso-na-rede.png"
          alt="LinkedIn Post"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
