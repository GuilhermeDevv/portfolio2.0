import React from 'react';
import { Container, Content } from './styles';
import { IoLogoLinkedin, IoLogoWhatsapp, IoLogoGithub } from 'react-icons/io';

export function Network() {
  return (
    <Container>
      <Content>
        <span>
          <IoLogoLinkedin size="25" />
        </span>
        <span>
          <IoLogoWhatsapp size="25" />
        </span>
        <span>
          <IoLogoGithub size="25" />
        </span>
      </Content>
    </Container>
  );
}
