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
  position: relative;
  animation: NetworkTransition 1.1s cubic-bezier(0.895, 0.03, 0.685, 0.22)
    forwards;
  @keyframes NetworkTransition {
    0% {
      opacity: 0;
      bottom: -120px;
    }
    100% {
      bottom: -10px;
    }
  }
  & span {
    display: flex;
    padding: 1px;
    border-radius: 5px;
    background-color: rgba(128, 128, 128, 0.33);
  }
`;
