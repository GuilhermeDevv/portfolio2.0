import React from 'react';
import { Container, Content, Logo } from './styled';
import { SiXdadevelopers } from 'react-icons/si';
import { Menu } from './components/Menu/Menu';
export function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <SiXdadevelopers size="20" />
          <h1>Guilherme Santos</h1>
        </Logo>
        <Menu />
      </Content>
    </Container>
  );
}
