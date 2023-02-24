import React from 'react';
import { Network } from '../../components/Network/Network';
import { Presentation } from '../../components/Presentation/Presentation';

export function Home() {
  return (
    <>
      <Presentation />
      <Network />
    </>
  );
}
