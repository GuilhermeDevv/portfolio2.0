import React, { ReactNode } from 'react';
import { Header } from '../components/Header/Header';
import { Menu } from '../components/Menu/Menu';
import { Content, PageSwitch } from './styled';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Content>
      <Header />
      <PageSwitch>{children}</PageSwitch>
      <Menu />
    </Content>
  );
}
