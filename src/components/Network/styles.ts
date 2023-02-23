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
    transition: all 1s linear;
    opacity: 0;
    background-color: rgba(128, 128, 128, 0.33);
    animation: NetworkTransition 1s forwards;
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
