import styled from 'styled-components';

interface StyledMenuProps {
  displayMenu: string;
  effect: string;
}
export const Ul = styled.ul`
  display: flex;
  gap: 50px;
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
export const UlMobile = styled(Ul)<StyledMenuProps>`
  position: absolute;
  display: ${({ displayMenu }) => (displayMenu == 'open' ? 'flex' : 'flex')};
  flex-direction: column;
  right: -2rem;
  background: #252525;
  align-items: center;
  justify-content: start;
  padding: 15px 0px;
  overflow: hidden;
  width: 0px;
  height: 0px;

  gap: 30px;
  border-radius: 8px;
  transition: all 0.8s;
  animation: ${({ effect }) => effect} forwards ease-out 0.8s;

  @keyframes smoothMenu {
    0% {
      width: 0px;
      height: min-content;
    }

    100% {
      width: 150px;
      height: max-content;
    }
  }
  @keyframes smoothMenuClose {
    0% {
      width: 150px;
      height: max-content;
    }

    100% {
      width: 0px;
      height: min-content;
    }
  }
`;
