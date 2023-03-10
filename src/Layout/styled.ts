import styled from 'styled-components';

export const Content = styled.div`
  min-height: 100vh;
  padding: 2rem 4rem 0rem 4rem;
  @media (max-width: 720px) {
    padding: 2rem 2rem 0px 2rem;
  }
`;

export const PageSwitch = styled.section`
  width: 100%;
  height: calc(100vh - 60px);
  position: relative;
  padding: 4rem 6rem;
  @media (max-width: 720px) {
    padding: 4rem 0rem;
  }
`;
