import React from 'react';
import { ButtonComponent } from './styles';
type Props = { text: string; link: string };
export function Button({ text, link }: Props) {
  return (
    <ButtonComponent>
      <a href={link}>{text}</a>
    </ButtonComponent>
  );
}
