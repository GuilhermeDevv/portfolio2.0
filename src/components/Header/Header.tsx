import React from 'react';
import { Container, Content, Logo, ButtonCv } from './styled';

export function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <span>Guilherme</span>
          <span>Santos</span>
        </Logo>
        <ButtonCv>Download CV</ButtonCv>
      </Content>
    </Container>
  );
}
