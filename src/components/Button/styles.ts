import styled from 'styled-components';
export const ButtonComponent = styled.button`
  z-index: 1;
  max-width: 145px;
  width: 100%;
  background-color: grey;
  border-radius: 20px;
  border: 1px solid grey;
  color: white;
  font-size: 15px;
  padding: 10px 25px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: white;
    border-color: black;
    transition: 0.3s;
    & a {
      transition: 0.3s;
      color: black;
    }
  }
`;
