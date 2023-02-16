import React, { useState } from 'react';
import { Li, MobileMenu, Ul, ContentMobileMenu, UlMobile } from './styled';
import { SlMenu, SlClose } from 'react-icons/sl';

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
    <>
      <Ul>
        <Li>Sobre</Li>
        <Li>Projetos</Li>
        <Li>Contato</Li>
      </Ul>
      <MobileMenu>
        <div onClick={renderedMenuMobile}>
          <SlMenu
            size="25"
            display={changeMenu === 'close' ? 'block' : 'none'}
            
          />
          <SlClose
            size="25"
            display={changeMenu === 'open' ? 'block' : 'none'}
          />
        </div>
        <ContentMobileMenu>
          <UlMobile effect={action} displayMenu={changeMenu}>
            <Li>Sobre</Li>
            <Li>Projetos</Li>
            <Li>Contato</Li>
          </UlMobile>
        </ContentMobileMenu>
      </MobileMenu>
    </>
  );
}
