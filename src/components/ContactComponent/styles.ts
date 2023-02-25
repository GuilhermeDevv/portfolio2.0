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
    position: relative;
    padding-bottom: 70px;
    font-size: 22px;
    color: white;
    font-weight: bolder;
    text-transform: uppercase;
    @media (max-width: 768px) {
      padding-bottom: 30px;
    }
  }
`;
export const ContactMe = styled.div`
  display: flex;
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
  background-color: #404143;
  position: relative;
  padding-top: 10px;
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  gap: 5px;
  animation: InfoTalkTransition forwards;
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
  }
  @media (max-width: 360px) {
    width: 100px;
  }

  & label {
    color: white;
  }
  & span {
    color: grey;
    word-break: break-all;
  }
`;
export const LinkContact = styled.a`
  text-transform: uppercase;
  font-size: 11px;
  position: absolute;
  bottom: 8px;
  color: #d3d3d3;
  display: flex;
  align-items: center;
  gap: 3px;
  &:hover {
    color: blue;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
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
    color: white;
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
  width: 230px;
  padding: 10px 40px 10px 8px;
  border: 1px solid white;
  border-radius: 10px;

  &:focus,
  &:valid {
    & ~ label {
      color: white;
      transform: translateY(-21px);
    }
  }
`;
export const InputMessage = styled.textarea`
  padding: 0px;
  width: 230px;
  height: 140px;
  display: block;
  background-color: transparent;
  font-size: 16px;
  padding: 10px 40px 10px 8px;
  border: 1px solid white;
  border-radius: 10px;
  resize: none;
  animation: FormTransition forwards 1s;
  &:focus {
    outline: none;
  }
  &:focus,
  &:valid {
    & ~ label {
      color: white;
      transform: translateY(-21px);
    }
  }
`;
export const InputSubmit = styled.input`
  background-color: grey;
  padding: 10px 20px;
  width: 110px;
  height: 40px;
  border-radius: 10px;
  position: absolute;
  left: 0px;
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
        opacity: 1;
      }
    }
  }
  @media (max-width: 767px) {
    @keyframes submit {
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
`;
export const Label = styled.label`
  position: absolute;
  top: 12px;
  left: 10px;
  font-size: 12px;
  color: grey;
  background-color: black;
  transition: all 0.2s;
  pointer-events: none;
`;
