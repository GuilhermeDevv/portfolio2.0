import styled from 'styled-components';

export const Container = styled.header`
  height: 40px;
`;
export const Content = styled.div`
  max-height: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & span {
    font-size: 22px;
  }
  & span:first-child {
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  & span:last-child {
    color: white;
  }
`;
export const ButtonCv = styled.button`
  background-color: grey;
  border-radius: 29px;
  border: 1px solid grey;
  color: white;
  font-size: 15px;
  padding: 10px 25px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: white;
    color: black;
    border-color: black;
    transition: 0.3s;
  }
`;
