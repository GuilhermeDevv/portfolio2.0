import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{

padding: 0;
margin: 0;
box-sizing: border-box;
list-style: none;
font-family: 'Lato', sans-serif;
color:white;
}
body{    
background-color:black; 
}

html{
font-size: 62.5%;

}  
img{
  max-width: 100%;
  display: block;
}

`;
