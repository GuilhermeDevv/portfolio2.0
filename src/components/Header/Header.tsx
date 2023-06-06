import React from 'react';
import { Button } from '../Button/Button';
import { Container, Content, Logo } from './styled';
import MyCV from '/src/pdf/Guilherme-santos.pdf';
export function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <span>Guilherme</span>
          <span>Correa</span>
        </Logo>
        <Button link={MyCV} text="Download CV" isDownload={true} />
      </Content>
    </Container>
  );
}
