import React from 'react';
import background from '../../assets/background.svg';
import { Container, Content, ImWhat, Self } from './styles';
export function Presentation() {
  return (
    <Container>
      <Content>
        <Self src={background} alt="" />
        <ImWhat>
          <h1>Desenvolvedor</h1>
          <span>Fullstack</span>
        </ImWhat>
      </Content>
    </Container>
  );
}
