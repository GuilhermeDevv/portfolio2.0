import styled from 'styled-components';

export const Container = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 22px;
  right: 20px;
  max-width: fit-content;
  @media (max-width: 920px) {
    top: 80px;
    right: 20px;
  }
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundButton};
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
export const Button = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    transform: scale(1.2);
  }
  & svg,
  path {
    color: ${({ theme }) => theme.colors.destaque};
  }
`;
