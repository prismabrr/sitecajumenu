

import styled from "styled-components";

const Section = styled.section`
  padding: 80px 24px;
  background: #ffffff;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  align-items: center;
  gap: 48px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`;

const TextContent = styled.div`
  .eyebrow {
    color: #ff6b0a;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;
  }

  h2 {
    margin: 16px 0;
    color: #0b3b2e;
    font-size: clamp(30px, 4vw, 44px);
    line-height: 1.2;
  }

  p {
    color: #66756b;
    font-size: 16px;
    line-height: 1.8;
  }
`;

const ImageArea = styled.div`
  position: relative;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  
.dashboard {
  width: 100%;
  max-width: 520px;
  height: auto;
  object-fit: contain;
  border: 1px solid #D7E5D8;
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(11, 59, 46, 0.12);
  background: #FFFFFF;
}


  .phone {
    width: 30%;
    max-width: 180px;
    height: auto;
    object-fit: contain;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    gap: 8px;

    .phone {
      width: 28%;
    }
  }
`;

export default function SystemShowcase() {
  return (
    <Section id="sistema">
      <Container>
        <TextContent>
          <span className="eyebrow">CONHEÇA O SISTEMA</span>

          <h2>
            Seu restaurante organizado em um só lugar.
          </h2>

          <p>
            Gerencie pedidos, acompanhe suas vendas e ofereça
            um cardápio digital moderno. Tenha mais praticidade
            para cuidar do seu negócio e atender melhor seus clientes.
          </p>
        </TextContent>

        <ImageArea>
          <img
            className="dashboard"
            src="/images/dashboard.webp"
            alt="Painel administrativo do CajuMenu"
          />

          <img
            className="phone"
            src="/images/cardapio.webp"
            alt="Cardápio digital do CajuMenu no celular"
          />
        </ImageArea>
      </Container>
    </Section>
  );
}
