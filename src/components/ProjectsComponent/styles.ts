import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  display: flex;
  position: relative;
  top: 80px;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  min-height: calc(100% - 80px);
  width: 100%;
  gap: 10px;
  @media (min-width: 920px) {
    overflow: hidden;
  }
  @media (max-width: 920px) {
    min-height: 130vh;
    top: 20px;
  }
`;
export const Info = styled.div`
  max-width: 400px;
  max-height: 230px;
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  padding-left: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border-radius: 5px;
  opacity: 1;
  gap: 10px;
  animation-name: InfoSideTransition;
  animation-duration: 3s;
  animation-fill-mode: forwards;

  & h1 {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.text};
    & {
      @media (min-width: 428px) {
        font-size: 29px;
      }
    }
  }
  & span {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.primary};
  }
  & button {
    max-width: 100px;
  }

  @media (max-width: 920px) {
    height: min-content;
  }
  @keyframes InfoSideTransition {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;
export const Project = styled.div`
  border: solid 2px transparent;
  border-radius: 8px;
  display: flex;
  position: relative;
  justify-content: center;
  max-width: 400px;
  max-height: 230px;
  width: 100%;
  overflow: hidden;
  height: 100%;
  opacity: 0;
  animation: ProjectSideTransition forwards;
  &:nth-child(2) {
    animation-duration: 2s;
  }
  &:nth-child(3) {
    animation-duration: 2.5s;
  }
  &:nth-child(4) {
    animation-duration: 3s;
  }

  & img {
    transition: all 1s ease-in-out;
  }
  &:hover {
    & img {
      animation: AnimationImage 0.2s forwards ease-in-out;
    }
    & div {
      display: flex;
    }
  }
  &:not(:hover) img {
    animation: AnimationImageReverse 0.2s forwards ease-in-out;
    animation-fill-mode: backwards;
  }
  @keyframes ProjectSideTransition {
    from {
      opacity: 0;
      transform: translateY(300px);
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  @keyframes AnimationImage {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.1);
    }
  }
  @keyframes AnimationImageReverse {
    from {
      transform: scale(1.1);
    }
    to {
      transform: scale(1);
    }
  }
`;
export const ProjectInformation = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-left: 40px;
  padding-bottom: 30px;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  display: none;
  opacity: 0;
  text-transform: uppercase;
  transition: all 0.4s ease-in-out;
  animation: AnimationProjectInformation 0.4s forwards;
  line-height: 26px;

  @keyframes AnimationProjectInformation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const Stack = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
`;
export const NameProject = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 22px;
`;
