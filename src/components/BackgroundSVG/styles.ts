import styled from 'styled-components';
interface ImageProps {
  src: string;
  alt?: string;
  animation: string; // Definindo a interface da propriedade "animation"
}
export const Self = styled.img<ImageProps>`
  width: 450px;
  position: relative;
  animation: ${({ animation }) => animation} 2000ms ease-out;
  animation-fill-mode: ${({ animation }) =>
    animation !== 'mexer' ? 'forwards' : ''};
  animation-iteration-count: ${({ animation }) =>
    animation === 'mexer' ? 'infinite' : ''};

  @keyframes mexer {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    50% {
      opacity: 1;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @media (max-height: 568px) {
    top: -40px;
  }

  @keyframes BackgroundTransition {
    0% {
      opacity: 0;
      transform: translateY(120px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
