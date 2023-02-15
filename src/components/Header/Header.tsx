import React from 'react';
import { Container, Content } from './styled';
import { SiXdadevelopers } from 'react-icons/si';
import { Menu } from './components/Menu/Menu';
export function Header() {
  return (
    <Container>
      <Content>
        <SiXdadevelopers size="20" />
        <h1>Guilherme Santos</h1>
        <Menu />
      </Content>
    </Container>
  );
}
