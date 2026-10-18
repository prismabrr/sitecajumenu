
import styled from "styled-components";

const HeroSection = styled.section`
  width: 100%;
  background: #063b2b;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export default function Hero() {
  return (
    <HeroSection id="inicio">
      <img
        src="/images/cajumenu-banner.webp"
        alt="CajuMenu — sistema completo para restaurantes"
      />
    </HeroSection>
  );
}
