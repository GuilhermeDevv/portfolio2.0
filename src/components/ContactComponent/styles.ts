import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;
export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    text-align: center;
    font-size: 22px;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: 2;
    color: ${({ theme }) => theme.colors.text};
    font-weight: bolder;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
`;
export const ContactMe = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  gap: 100px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
export const GoTo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media (max-width: 767px) {
    flex-direction: row;
  }
  & h4 {
    position: relative;
    font-size: 15px;
    color: white;
    font-weight: bolder;
    text-transform: uppercase;
    padding-bottom: 10px;
    @media (max-width: 767px) {
      display: none;
    }
  }
`;
export const InfoTalk = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  padding-top: 10px;
  margin-bottom: 20px;
  width: 250px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  gap: 5px;
  animation: InfoTalkTransition forwards;
  & & svg,
  path {
    color: ${({ theme }) => theme.colors.backgroundButton};
  }
  @media (max-width: 767px) {
    @keyframes InfoTalkTransition {
      from {
        opacity: 0;
        transform: translateY(-50%);
      }
      to {
        transform: translateY(0%);
        opacity: 1;
      }
    }
  }
  @media (min-width: 767px) {
    @keyframes InfoTalkTransition {
      from {
        opacity: 0;
        transform: translateX(-50%);
      }
      to {
        transform: translateX(0%);
        opacity: 1;
      }
    }
  }

  &:nth-child(2) {
    animation-duration: 1s;
  }
  &:nth-child(3) {
    animation-duration: 2s;
  }
  &:nth-child(4) {
    animation-duration: 2.5s;
  }
  @media (max-width: 768px) {
    width: 120px;
    height: 100px;
  }
  @media (max-width: 360px) {
    width: 100px;
    height: 100px;
  }

  & label {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
  }
  & span {
    color: ${({ theme }) => theme.colors.primary};
    word-break: break-all;
  }
`;
export const LinkContact = styled.a`
  text-transform: uppercase;
  font-size: 11px;
  position: absolute;
  bottom: 8px;
  display: flex;
  align-items: center;
  gap: 3px;

  color: ${({ theme }) => theme.colors.backgroundActive};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & div {
    position: relative;
    width: 100%;
    animation: FormTransition forwards;
    &:nth-child(2) {
      animation-duration: 1s;
    }
    &:nth-child(3) {
      animation-duration: 2s;
    }
    &:nth-child(4) {
      animation-duration: 2.5s;
    }

    @media (min-width: 767px) {
      @keyframes FormTransition {
        from {
          opacity: 0;
          transform: translateX(50%);
        }
        to {
          transform: translateX(0%);
          opacity: 1;
        }
      }
    }
    @media (max-width: 767px) {
      @keyframes FormTransition {
        from {
          opacity: 0;
          transform: translateY(100%);
        }
        to {
          transform: translateY(0%);
          opacity: 1;
        }
      }
    }
  }
  & h4 {
    position: relative;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: bolder;
    text-transform: uppercase;
    padding-bottom: 10px;
    @media (max-width: 767px) {
      display: none;
    }
  }
`;
export const Input = styled.input`
  display: block;
  background-color: transparent;
  font-size: 16px;
  width: 280px;
  padding: 10px 40px 10px 8px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 10px;

  &:focus,
  &:valid {
    & ~ label {
      color: ${({ theme }) => theme.colors.text};
      outline: none;
      transform: translateY(-21px);
    }
  }
`;
export const InputMessage = styled.textarea`
  padding: 0px;
  width: 280px;
  height: 140px;
  display: block;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  padding: 10px 40px 10px 8px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  resize: none;
  animation: FormTransition forwards 2s;

  &:focus,
  &:valid {
    outline: none;
    & ~ label {
      color: ${({ theme }) => theme.colors.text};
      transform: translateY(-21px);
    }
  }
`;
export const InputSubmit = styled.input`
  background-color: ${({ theme }) => theme.colors.backgroundButton};
  border: none;
  color: ${({ theme }) => theme.colors.destaque};
  padding: 10px 20px;
  width: 110px;
  height: 40px;
  border-radius: 10px;
  position: absolute;
  animation: submit 3s forwards;
  transition: all 0.3s;
  opacity: 1;

  @media (min-width: 767px) {
    @keyframes submit {
      from {
        transform: translateX(50%);
      }
      to {
        transform: translateX(0%);
      }
    }
  }
  @media (max-width: 767px) {
    @keyframes submit {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0%);
        opacity: 1;
      }
    }
  }
`;
export const Label = styled.label`
  position: absolute;
  top: 12px;
  left: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  transition: all 0.2s;
  pointer-events: none;
`;
