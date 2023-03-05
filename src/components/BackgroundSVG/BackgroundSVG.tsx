import React, { useEffect, useState } from 'react';
import { Self } from './styles';
type Prop = {
  src: string;
  alt?: string;
};

export function BackgroundSVG({ src, alt }: Prop) {
  useEffect(() => {
    setInterval(() => {
      setName('mexer');
    }, 2000);
  }, []);
  const [name, setName] = useState('BackgroundTransition');
  return <Self src={src} alt={alt} animation={name} />;
}
