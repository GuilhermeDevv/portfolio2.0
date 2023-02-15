import styled, { keyframes } from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  gap: 10px;
  @media (max-width: 720px) {
    display: none;
  }
`;

export const Li = styled.li`
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
`;

export const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 720px) {
    display: flex;
  }
`;
export const ContentMobileMenu = styled.div`
  position: relative;
`;
export const UlMobile = styled(Ul)`
  position: absolute;
  display: ${({ slot }) => slot};
  flex-direction: column;
  top: 20px;
  right: -25px;
  background: #252525;
  align-items: center;
  justify-content: start;
  padding: 15px 0px;
  overflow: hidden;
  width: 0px;
  height: 0px;
  border-radius: 8px;
  transition: all 0.8s;
  animation: smoothMenu forwards ease-out 0.8s;

  @keyframes smoothMenu {
    0% {
      width: 0px;
      height: 0px;
    }

    100% {
      height: 110px;
      width: 150px;
    }
  }
`;
