import React from 'react';
import { Button } from '../Button/Button';
import { Container, Content, Logo } from './styled';

export function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <span>Guilherme</span>
          <span>Santos</span>
        </Logo>
        <Button link="" text="Download CV" />
      </Content>
    </Container>
  );
}
