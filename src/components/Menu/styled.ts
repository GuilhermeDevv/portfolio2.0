import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  bottom: 20px;

  display: flex;
  justify-content: center;
  width: calc(100% - 80px);
  @media (max-width: 720px) {
    width: calc(100% - 40px);
  }
`;
export const Content = styled.div`
  display: flex;
  padding: 0px 40px;
  display: flex;
  gap: 20px;
  background-color: rgba(128, 128, 128, 0.07);
  border-radius: 10px;

  & a {
    width: 40px;
    height: 40px;
    display: flex;
    border-radius: 50%;
  }
  & a.active {
    background-color: #f2f2f2;

    & path {
      color: black;
    }
  }
`;

export const Options = styled.div`
  margin: 0 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
  transition: background-color 0.2s;
`;
