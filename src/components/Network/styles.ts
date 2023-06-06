import styled from 'styled-components';
export const Container = styled.nav`
  width: max-content;
  position: fixed;
  bottom: 20%;
  left: 1%;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & span {
    display: flex;
    padding: 1px;
    border-radius: 5px;
    opacity: 0;
    animation: NetworkTransition 1s forwards;
    & svg,
    path {
      color: ${({ theme }) => theme.colors.destaque};
    }
  }
  & span:nth-child(2) {
    animation-delay: 0.5s;
  }
  & span:nth-child(3) {
    animation-delay: 1s;
  }
  @keyframes NetworkTransition {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;
