import styled from 'styled-components';

export const Container = styled.header`
  padding: 5rem 3rem;
  height: 60px;
  position: fixed;
  width: 100vw;
`;
export const Content = styled.header`
  max-height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  & div {
    margin-left: auto;
  }
`;
