import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;
export const Content = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-left: 5%;
  height: 100%;
  align-items: center;
  position: relative;
  @media (min-height: 569px) {
    top: 20px;
  }
  @media (max-width: 1320px) {
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
  & h1 {
    animation: ImWhatTransition 1500ms ease-out forwards;
    position: relative;
    left: -4px;
    font-size: 70px;
    text-transform: uppercase;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    @media (max-width: 1320px) {
      font-size: 60px;
    }
    @media (max-width: 865px) {
      font-size: 44px;
      left: 0px;
    }
    @media (max-width: 469px) {
      font-size: 32px;
      left: 0px;
    }
    @media (max-width: 320px) {
      font-size: 28px;
      left: 0px;
    }
  }
  & h2 {
    animation: ImWhatTransition 1000ms ease-out forwards;
    letter-spacing: 15px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 35px;
    color: ${({ theme }) => theme.colors.text};
    @media (max-width: 865px) {
      font-size: 16px;
    }
  }
  @media (max-width: 1320px) {
    @keyframes ImWhatTransition {
      0% {
        opacity: 0;
        transform: translateY(-120px);
      }
      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    left: 0px;
    text-align: center;
  }
  @media (min-width: 961px) {
    @keyframes ImWhatTransition {
      0% {
        opacity: 0;
        transform: translateY(-120px);
      }
      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }
`;
