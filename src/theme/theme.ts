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
    primary: '#808080',
    secondary: '#222222',
    background: '#030303',
    text: '#fff',
    destaque: '#fff',
    backgroundButton: '#222222',
    textButton: '#red',
    backgroundActive: '#fff',
    textActive: '#000',
    textInativity: '#ffffff',
  },
};
export const Light: DefaultTheme = {
  colors: {
    background: '#fafafa',
    text: '#000000',
    backgroundButton: '#d4d4d4',
    primary: '#525252',
    secondary: '#d4d4d4',
    textButton: '#fff',
    textInativity: '#ffffff',
    backgroundActive: '#0a0a0a',
    destaque: '#000000',
    textActive: '#ffffff',
  },
};
