import React from 'react';
import { Container, Content, Options } from './styled';
import { IoMdHome, IoMdPerson, IoMdChatboxes } from 'react-icons/io';
import { FaToolbox } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
export function Menu() {
  return (
    <Container>
      <Content>
        <NavLink to="/">
          <Options title="Home">
            <IoMdHome size="20" />
          </Options>
        </NavLink>
        <NavLink to="/about">
          <Options title="About">
            <IoMdPerson size="20" />
          </Options>
        </NavLink>
        <NavLink to="/projects">
          <Options title="Projects">
            <FaToolbox size="20" />
          </Options>
        </NavLink>
        <NavLink to="/contact">
          <Options title="Contact">
            <IoMdChatboxes size="20" />
          </Options>
        </NavLink>
      </Content>
    </Container>
  );
}
