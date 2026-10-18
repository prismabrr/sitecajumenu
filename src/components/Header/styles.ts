
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background: #ffffff;
  border-bottom: 1px solid #e4eae3;
  position: sticky;
  top: 0;
  z-index: 100;

  .content {
    max-width: 1240px;
    min-height: 80px;
    margin: 0 auto;
    padding: 0 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  @media (max-width: 768px) {
    .content {
      min-height: 72px;
      padding: 0 18px;
    }
  }
`;

export const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  flex-shrink: 0;

  .symbol {
    width: 42px;
    height: 42px;
    border-radius: 13px;
    display: grid;
    place-items: center;
    background: #0b3b2e;
    color: #84cc16;
    font-size: 25px;
    font-weight: 900;
  }

  .name {
    color: #0b3b2e;
    font-size: 25px;
    font-weight: 850;
    letter-spacing: -1px;
  }

  .name span {
    color: #FF8A3D;
  }
`;

export const Navigation = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 26px;

  a {
    color: #46554b;
    font-size: 14px;
    font-weight: 600;
    transition: color 0.2s ease;
  }

  a:hover {
    color: #0b3b2e;
  }

  .mobile-actions {
    display: none;
  }

  @media (max-width: 900px) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    padding: 24px 20px;
    background: #ffffff;
    border-bottom: 1px solid #e4eae3;
    flex-direction: column;
    align-items: stretch;
    gap: 22px;

    .mobile-actions {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .login {
    color: #0b3b2e;
    font-size: 14px;
    font-weight: 700;
    padding: 12px 10px;
  }

  .start {
    background: #0b3b2e;
    color: #ffffff;
    padding: 14px 18px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 700;
    transition: background 0.2s ease;
  }

  .start:hover {
    background: #145844;
  }

  @media (max-width: 900px) {
    .login,
    .start {
      display: none;
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  border: 0;
  background: transparent;
  color: #0b3b2e;
  padding: 8px;
  font-size: 25px;

  @media (max-width: 900px) {
    display: grid;
    place-items: center;
  }
`;
