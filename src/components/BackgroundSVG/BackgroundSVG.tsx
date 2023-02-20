import React from 'react';
import { Self } from './styles';
type Prop = {
  src: string;
  alt?: string;
};

export function BackgroundSVG({ src, alt }: Prop) {
  return <Self src={src} alt={alt} />;
}
