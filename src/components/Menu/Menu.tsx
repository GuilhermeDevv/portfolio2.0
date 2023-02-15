import React, { useState } from 'react';
import { Container, Content, Options } from './styled';
import { IoMdHome, IoMdPerson } from 'react-icons/io';
import { FaToolbox } from 'react-icons/fa';

export function Menu() {
  const [changeMenu, setChangeMenu] = useState('close');
  const [action, setAction] = useState('');

  function renderedMenuMobile() {
    if (changeMenu == 'close') {
      setChangeMenu('open');
      setAction('smoothMenu');
    } else {
      setChangeMenu('close');
      setAction('smoothMenuClose');
    }
  }
  return (
    <Container>
      <Content>
        <Options title="Home">
          <IoMdHome size="20" />
        </Options>
        <Options title="About">
          <IoMdPerson size="20" />
        </Options>
        <Options title="Project">
          <FaToolbox size="20" />
        </Options>
      </Content>
    </Container>
  );
}
