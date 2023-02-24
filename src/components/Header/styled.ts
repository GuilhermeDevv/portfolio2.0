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
