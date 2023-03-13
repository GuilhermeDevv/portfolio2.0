import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;
export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  @media (max-width: 375px) {
    height: calc(100vh);
  }
  @media (max-width: 320px) {
    min-height: 120vh;
  }
`;
export const Text = styled.h1`
  text-align: center;
  font-size: 22px;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 2;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bolder;
  text-transform: uppercase;
  margin-bottom: 15px;
`;
export const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  min-width: 100%;

  & p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    text-transform: capitalize;
    text-align: start;
    width: 100%;
    margin-left: 5px;
    @media (min-width: 920px) {
      font-size: 18px;
    }
  }

  @media (max-width: 960px) {
    @keyframes AboutTransition {
      0% {
        bottom: -120px;
      }
      100% {
        bottom: -10px;
      }
    }
    display: flex;
  }
  @media (min-width: 961px) {
    @keyframes AboutTransition {
      0% {
        bottom: -120px;
      }
      100% {
        bottom: 40px;
      }
    }
  }
`;
export const Background = styled.div`
  width: 300px;
  height: 300px;

  border-radius: 10px;

  display: flex;
  transform: scale(1);
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  min-width: 230px;
  min-height: 216px;
  transition: all 0.2s ease 0s;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    width: 150px;
    height: 150%;
    border-radius: 10px;
    background: linear-gradient(
      ${({ theme }) => theme.colors.backgroundButton} 48%,
      rgba(0, 0, 0, 0) 11%
    );
    animation: 6s linear 0s infinite normal none running animateColor;
  }
  &::after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
    inset: 2px;
  }
  @keyframes animateColor {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 920px) {
    width: 250px;
    height: 250px;
  }
`;
export const InfoSeparator = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;

  @media (max-width: 960px) {
    padding: 0px;
    flex-direction: column;
    align-items: center;
  }
`;
export const AboutMe = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: min-content;

  & div {
    display: flex;
    gap: 10px;
  }
`;

export const ContentCard = styled.div`
  & div {
    animation: fadeInUp 1s forwards;
  }
  & div:nth-child(2) {
    animation-delay: 0.5s;
  }

  & div:nth-child(3) {
    animation-delay: 1s;
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(50px); /* desce 50px */
    }
    to {
      opacity: 1;
      transform: translateY(0); /* sobe até a posição original */
    }
  }
`;
export const Card = styled.div`
  opacity: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  text-transform: uppercase;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  width: 200px;
  height: 130px;

  @media (max-width: 430px) {
    min-height: 110px;
  }
  @media (max-width: 320px) {
    min-height: 120px;
  }
  & svg,
  path {
    min-height: 30px;
    color: ${({ theme }) => theme.colors.backgroundButton};
    & {
      @media (max-width: 390px) {
        min-height: 25px;
      }
      @media (max-width: 320px) {
        min-height: 2px;
      }
    }
  }
  @media (max-width: 920px) {
    max-width: 200px;
  }
  @media (max-width: 428px) {
    max-width: 132px;
    height: 100px;
  }
  @media (max-width: 414px) {
    max-width: 130px;
    height: 100px;
  }
  @media (max-width: 393px) {
    max-width: 120px;
    height: 100px;
  }
  @media (max-width: 375px) {
    max-width: 114px;
    height: 100px;
  }
  @media (max-width: 320px) {
    width: 95px;
    height: 95px;
  }

  & h6 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 13px;
    cursor: pointer;
    margin-bottom: 2px;
  }
  & strong {
    font-size: 11px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
