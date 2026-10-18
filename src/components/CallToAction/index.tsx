
import styled from "styled-components";

const Section = styled.section`
  padding: 72px 24px;
  background: #F7F9F6;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 32px;
  background: #0B3B2E;
  border-radius: 24px;
  text-align: center;
  overflow: hidden;

  @media (max-width: 600px) {
    padding: 44px 22px;
    border-radius: 18px;
  }
`;

const Eyebrow = styled.span`
  color: #C5E8A5;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.6px;
`;

const Title = styled.h2`
  max-width: 720px;
  margin: 16px auto;
  color: #FFFFFF;
  font-size: clamp(28px, 4vw, 44px);
  line-height: 1.2;
`;

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto 28px;
  color: #D9E7DE;
  font-size: 16px;
  line-height: 1.8;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 28px;
  border-radius: 10px;
  background: #FF6B0A;
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #E85B00;
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid #FFFFFF;
    outline-offset: 4px;
  }
`;

export default function CallToAction() {
  return (
    <Section id="comecar">
      <Container>
        <Eyebrow>SEU RESTAURANTE PODE IR MAIS LONGE</Eyebrow>

        <Title>
          Pronto para simplificar a gestão do seu restaurante?
        </Title>

        <Description>
          Conheça o CajuMenu e descubra como organizar melhor a rotina
          do seu negócio com ferramentas pensadas para restaurantes.
        </Description>

        <Button href="#contato">
          Quero conhecer o CajuMenu →
        </Button>
      </Container>
    </Section>
  );
}
