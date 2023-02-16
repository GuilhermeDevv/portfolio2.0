import React from 'react';
import { Container, Content } from './styles';
import { IoLogoLinkedin, IoLogoWhatsapp, IoLogoGithub } from 'react-icons/io';

export function Network() {
  return (
    <Container>
      <Content>
        <span>
          <IoLogoLinkedin size="20" />
        </span>
        <span>
          <IoLogoWhatsapp size="20" />
        </span>
        <span>
          <IoLogoGithub size="20" />
        </span>
      </Content>
    </Container>
  );
}
