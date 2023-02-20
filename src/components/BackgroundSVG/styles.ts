import styled from 'styled-components';

export const Self = styled.img`
  width: 550px;
  position: relative;
  animation: BackgroundTransition 1s ease-in forwards;

  @keyframes BackgroundTransition {
    from {
      opacity: 0;
      top: -120px;
    }
    to {
      top: 0px;
    }
  }
  @media (max-height: 568px) {
    top: -40px;
  }
  @media (max-width: 960px) {
    @keyframes BackgroundTransition {
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
