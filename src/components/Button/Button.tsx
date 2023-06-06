import React from 'react';
import { ButtonComponent } from './styles';
type Props = { text: string; link: string; isDownload?: boolean };
export function Button({ text, link, isDownload }: Props) {
  return (
    <ButtonComponent>
      <a href={link} download={isDownload}>
        {text}
      </a>
    </ButtonComponent>
  );
}
