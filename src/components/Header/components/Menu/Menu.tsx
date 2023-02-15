import React, { useState } from 'react';
import { Li, MobileMenu, Ul, ContentMobileMenu, UlMobile } from './styled';
import { SlMenu, SlClose } from 'react-icons/sl';

export function Menu() {
  const [changeMenu, setChangeMenu] = useState(true);
  return (
    <div>
      <Ul>
        <Li>Sobre</Li>
        <Li>Projetos</Li>
        <Li>Contato</Li>
      </Ul>
      <MobileMenu>
        <div
          onClick={() => {
            setChangeMenu(!changeMenu);
          }}
        >
          <SlMenu size="25" display={changeMenu ? 'block' : 'none'} />
          <SlClose size="25" display={changeMenu ? 'none' : 'block'} />
        </div>
        <ContentMobileMenu>
          <UlMobile slot={changeMenu ? 'none' : 'flex'}>
            <Li>Sobre</Li>
            <Li>Projetos</Li>
            <Li>Contato</Li>
          </UlMobile>
        </ContentMobileMenu>
      </MobileMenu>
    </div>
  );
}
