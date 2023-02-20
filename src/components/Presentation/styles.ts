import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5%;
  height: 100%;
  align-items: center;
  position: relative;
  @media (min-height: 569px) {
    top: 20px;
  }
  @media (max-width: 960px) {
    flex-direction: column-reverse;
    justify-content: start;
    align-items: center;
    top: 5%;
  }
  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const ImWhat = styled.div`
  position: relative;
  left: -110px;
  text-align: start;
  line-height: 50px;
  animation: ImWhatTransition 1s ease-in forwards;
  & h1 {
    font-size: 5.125rem;
    text-transform: uppercase;
    font-weight: bold;
    @media (max-width: 720px) {
      font-size: 3.125rem;
      left: 0px;
    }
  }
  & span {
    letter-spacing: 15px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
    @media (max-width: 720px) {
      font-size: 16px;
    }
  }
  @media (max-width: 960px) {
    @keyframes ImWhatTransition {
      0% {
        opacity: 0;
        top: -120px;
      }
      100% {
        top: 0px;
      }
    }

    left: 0px;
    line-height: 40px;
    text-align: center;
  }
  @media (min-width: 961px) {
    @keyframes ImWhatTransition {
      0% {
        opacity: 0;
        bottom: -120px;
      }
      100% {
        bottom: 0px;
      }
    }
  }
`;
