
import styled from "styled-components";

export const FeaturesSection = styled.section`
  background: #ffffff;
  border-bottom: 1px solid #e8eee7;

  .features-container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 30px 24px;
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 18px;
  }

  @media (max-width: 1000px) {
    .features-container {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (max-width: 520px) {
    .features-container {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding: 28px 18px;
      gap: 24px 12px;
    }
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;

  .icon {
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    border-radius: 13px;
    background: #edf6e5;
    color: #0b3b2e;
  }

  .icon svg {
    width: 23px;
    height: 23px;
  }

  h3 {
    color: #183b2e;
    font-size: 13px;
    font-weight: 800;
  }

  p {
    max-width: 160px;
    color: #718075;
    font-size: 11px;
    line-height: 1.6;
  }
`;
