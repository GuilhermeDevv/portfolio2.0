import React from 'react';
import background from '../../assets/background.svg';
import { Container, Content, ImWhat } from './styles';

import { BackgroundSVG } from '../BackgroundSVG/BackgroundSVG';
export function Presentation() {
  return (
    <Container>
      <Content>
        <BackgroundSVG src={background} />
        <ImWhat>
          <h1>Desenvolvedor</h1>
          <span>Fullstack</span>
        </ImWhat>
      </Content>
    </Container>
  );
}
