import React from 'react';
import background from '../../assets/background.svg';
import { Container, Content, ImWhat } from './styles';

import { BackgroundSVG } from '../BackgroundSVG/BackgroundSVG';
export function Presentation() {
  return (
    <Container>
      <Content>
        <BackgroundSVG src={background} alt="me" />
        <ImWhat>
          <h1>Desenvolvedor</h1>
          <h2>Fullstack</h2>
        </ImWhat>
      </Content>
    </Container>
  );
}
