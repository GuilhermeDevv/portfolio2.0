import React, { ReactNode } from 'react';
import { Header } from '../components/Header/Header';
import { Menu } from '../components/Menu/Menu';
import { Content, PageSwitch, Version } from './styled';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Content>
      <Header />
      <PageSwitch>
        {children}
        <Version>V1.0</Version>
      </PageSwitch>
      <Menu />
    </Content>
  );
}
