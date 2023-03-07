import { DefaultTheme } from 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      destaque: string;
      textButton: string;
      backgroundButton: string;
      backgroundActive: string;
      textActive: string;
      textInativity: string;
    };
  }
}

export const Black: DefaultTheme = {
  colors: {
    primary: '#c5c8d4',
    secondary: '#808080',
    background: '#20232f',
    text: '#ffffff',
    destaque: '#000',
    backgroundButton: '#02ecff',
    textButton: '#99ccff',
    backgroundActive: '#00b5b2',
    textActive: '#000',
    textInativity: '#ffffff',
  },
};
export const Light: DefaultTheme = {
  colors: {
    background: '#f9f9f9',
    text: '#000000',
    backgroundButton: '#007fff',
    primary: '#2a2a2a',
    secondary: '#2a2a2a',
    textButton: 'red',
    textInativity: '#2a2a2a',
    backgroundActive: 'transparent',
    destaque: '#3a506b',
    textActive: '#007fff',
  },
};
