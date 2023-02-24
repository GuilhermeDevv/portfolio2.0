import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;
export const Content = styled.div`
  display: flex;
  height: 100%;
  padding-top: 50px;
  width: 100%;
  @media (max-width: 960px) {
    padding-top: 0px;
  }
`;
export const Text = styled.span`
  position: relative;
  left: -60px;
  padding-bottom: 70px;
  font-size: 22px;
  color: white;
  font-weight: bolder;
  text-transform: uppercase;
  @media (max-width: 960px) {
    left: 0px;
    top: -15px;
    padding: 0px;
  }
`;
export const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  min-width: 100%;

  & h1 {
    text-transform: capitalize;
    font-size: 22px;
  }
  & p {
    font-size: 14px;
    color: #404143;
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
  background-color: grey;

  border-radius: 10px;
  @media (max-width: 920px) {
    width: 250px;
    height: 250px;
    background-color: grey;
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
  background-color: #404143;
  position: relative;
  text-transform: uppercase;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  color: black;
  border-radius: 8px;
  height: 120px;
  width: 150px;
  @media (max-width: 920px) {
    max-width: 150px;
    height: 150px;
  }
  @media (max-width: 765px) {
    max-width: 120px;
    height: 100px;
  }

  & strong {
    font-size: 10px;
    color: #808080;
  }

  & h6 {
    font-size: 13px;
    cursor: pointer;
    margin-bottom: 2px;
  }
`;
