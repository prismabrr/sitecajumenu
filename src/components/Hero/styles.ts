
import styled from "styled-components";

export const HeroSection = styled.section`
  background:
    radial-gradient(
      circle at 85% 40%,
      rgba(132, 204, 22, 0.14),
      transparent 35%
    ),
    #f7f9f6;

  overflow: hidden;

  .hero-content {
    max-width: 1240px;
    min-height: 600px;
    margin: 0 auto;
    padding: 72px 28px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 48px;
  }

  @media (max-width: 900px) {
    .hero-content {
      grid-template-columns: 1fr;
      padding: 56px 24px;
      gap: 40px;
    }
  }
`;

export const HeroText = styled.div`
  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    margin-bottom: 24px;
    padding: 9px 13px;
    border: 1px solid #dce9d5;
    border-radius: 30px;
    background: #fff;
    color: #315b37;
    font-size: 12px;
    font-weight: 700;
  }

  .eyebrow-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #84cc16;
  }

  h1 {
    max-width: 600px;
    color: #0b3b2e;
    font-size: clamp(38px, 4.5vw, 62px);
    font-weight: 850;
    line-height: 1.1;
    letter-spacing: -2px;
  }

  h1 span {
    color: #72b51b;
  }

  .description {
    max-width: 490px;
    margin-top: 22px;
    color: #647067;
    font-size: 16px;
    line-height: 1.8;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 28px;
  }

  .primary-button,
  .secondary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    min-height: 50px;
    padding: 0 19px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
    transition: 0.2s ease;
  }

  .primary-button {
    background: #0b3b2e;
    color: #fff;
  }

  .primary-button:hover {
    background: #145844;
    transform: translateY(-2px);
  }

  .secondary-button {
    background: #fff;
    color: #0b3b2e;
    border: 1px solid #dce5da;
  }

  .secondary-button:hover {
    background: #eff5ec;
  }

  .trust {
    margin-top: 24px;
    color: #647067;
    font-size: 12px;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 40px;
      letter-spacing: -1.5px;
    }

    .buttons {
      flex-direction: column;
      align-items: stretch;
    }

    .primary-button,
    .secondary-button {
      width: 100%;
    }
  }
`;

export const HeroVisual = styled.div`
  position: relative;
  min-width: 0;
  min-height: 390px;
  display: flex;
  align-items: center;
  justify-content: center;

  .glow {
    position: absolute;
    width: 80%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: rgba(132, 204, 22, 0.15);
    filter: blur(35px);
  }

  .dashboard {
    position: relative;
    z-index: 1;
    width: 100%;
    overflow: hidden;
    background: #fff;
    border: 1px solid #e0e8de;
    border-radius: 16px;
    box-shadow: 0 25px 60px rgba(11, 59, 46, 0.12);
  }

  .dash-top {
    min-height: 55px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    border-bottom: 1px solid #edf0eb;
  }

  .dash-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #0b3b2e;
    font-size: 13px;
    font-weight: 800;
  }

  .brand-icon {
    width: 26px;
    height: 26px;
    display: grid;
    place-items: center;
    border-radius: 7px;
    background: #0b3b2e;
    color: #84cc16;
    font-weight: 900;
  }

  .dash-status {
    padding: 6px 8px;
    border-radius: 7px;
    background: #eff8e7;
    color: #3f7416;
    font-size: 10px;
  }

  .dash-body {
    display: grid;
    grid-template-columns: 105px minmax(0, 1fr);
  }

  .sidebar {
    padding: 18px 8px;
    background: #f8faf7;
    border-right: 1px solid #edf0eb;
  }

  .side-label {
    margin: 0 0 12px 7px;
    color: #9aa49b;
    font-size: 9px;
    text-transform: uppercase;
  }

  .side-item {
    margin-bottom: 7px;
    padding: 9px 7px;
    border-radius: 7px;
    color: #677369;
    font-size: 10px;
  }

  .side-item.active {
    background: #e8f3df;
    color: #0b3b2e;
  }

  .side-icon {
    display: inline-block;
    width: 9px;
    height: 9px;
    margin-right: 4px;
    border: 1px solid currentColor;
    border-radius: 2px;
  }

  .dash-main {
    min-width: 0;
    padding: 20px 14px;
  }

  .welcome {
    color: #0b3b2e;
    font-size: 17px;
  }

  .subwelcome {
    margin-top: 6px;
    color: #8b968c;
    font-size: 10px;
    line-height: 1.5;
  }

  .metric-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 7px;
    margin-top: 18px;
  }

  .metric {
    min-width: 0;
    padding: 10px 7px;
    border: 1px solid #e8eee6;
    border-radius: 8px;
  }

  .metric-label {
    color: #788479;
    font-size: 9px;
  }

  .metric-value {
    margin-top: 8px;
    color: #0b3b2e;
    font-size: clamp(11px, 1.4vw, 17px);
    font-weight: 800;
    overflow-wrap: anywhere;
  }

  .metric-change {
    margin-top: 5px;
    color: #5b9c29;
    font-size: 8px;
    line-height: 1.4;
  }

  .orders {
    margin-top: 15px;
    padding: 12px;
    border: 1px solid #e8eee6;
    border-radius: 9px;
  }

  .orders-heading {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 12px;
    color: #183c2e;
    font-size: 10px;
    font-weight: 800;
  }

  .order-row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
    padding: 10px 0;
    border-top: 1px solid #f0f2ee;
    color: #657267;
    font-size: 9px;
  }

  .order-name {
    color: #304337;
    font-weight: 700;
  }

  .order-tag {
    grid-column: 2;
    justify-self: end;
    padding: 4px 6px;
    border-radius: 5px;
    background: #edf7e5;
    color: #4e811f;
    font-size: 8px;
  }

  .order-tag.pending {
    background: #fff2e8;
    color: #c65a16;
  }

  .float-card {
    position: absolute;
    z-index: 2;
    right: -8px;
    bottom: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 13px 16px;
    border: 1px solid #e6ece3;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 12px 30px rgba(11, 59, 46, 0.12);
  }

  .float-icon {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    background: #fff0e5;
    color: #ff6b0a;
  }

  .float-title {
    color: #0b3b2e;
    font-size: 11px;
    font-weight: 800;
  }

  .float-subtitle {
    margin-top: 4px;
    color: #788479;
    font-size: 9px;
  }

  @media (max-width: 480px) {
    min-height: 320px;

    .dash-body {
      grid-template-columns: 76px minmax(0, 1fr);
    }

    .dash-main {
      padding: 14px 8px;
    }

    .sidebar {
      padding: 14px 5px;
    }

    .side-item {
      padding: 8px 4px;
      font-size: 8px;
    }

    .metric-grid {
      gap: 4px;
    }

    .metric {
      padding: 8px 5px;
    }

    .orders {
      padding: 8px;
    }

    .float-card {
      right: 0;
      padding: 10px;
    }
  }
`;
