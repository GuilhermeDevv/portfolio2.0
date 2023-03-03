import styled from 'styled-components';
export const ButtonComponent = styled.button`
  z-index: 1;
  min-width: 150px;

  background-color: ${({ theme }) => theme.colors.backgroundButton};
  color: black;
  border-radius: 20px;
  box-shadow: 0px 1px 7px 1px ${({ theme }) => theme.colors.backgroundButton};
  border: 1px solid transparent;

  padding: 10px 25px;
  cursor: pointer;
  transition: 0.3s;

  & a {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.destaque};
  }

  &:hover {
    transform: scale(1.01);
  }
`;
