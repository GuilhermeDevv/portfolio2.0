import React, { ReactNode } from 'react';
import { Header } from '../components/Header/Header';
import { Network } from '../components/Network/Network';
import { Content, PageSwitch } from './styled';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Content>
      <Header />
      <Network />
      <PageSwitch>{children}</PageSwitch>
    </Content>
  );
}
