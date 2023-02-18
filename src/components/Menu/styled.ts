import styled from 'styled-components';

export const Container = styled.div`
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
  padding: 0px 20px;
  background-color: rgba(128, 128, 128, 0.07);
  border-radius: 10px;
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #555;
  transition: background-color 0.2s;
  &:hover {
    background-color: #f2f2f2;
    & path {
      color: black;
    }
  }
`;
