import React, { ReactNode } from 'react';
import { Header } from '../components/Header/Header';
import { Menu } from '../components/Menu/Menu';
import { Network } from '../components/Network/Network';
import { Content, PageSwitch } from './styled';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Content>
      <Header />
      <PageSwitch>
        {children}
        <h1>V1.0</h1>
      </PageSwitch>
      <Menu />
    </Content>
  );
}
