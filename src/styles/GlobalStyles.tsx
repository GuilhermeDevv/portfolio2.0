import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{

  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: 'Roboto', sans-serif;
  color:white;
  font-weight: 500;
  text-decoration-line: none;
}
body{    

  background-color: black;

}

html{
font-size:62.5%;

}  
img{
  max-width: 100%;
  display: block;
}

`;
