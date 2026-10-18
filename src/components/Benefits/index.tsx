
import styled from "styled-components";

const Section = styled.section`
  padding: 80px 24px;
  background: #F7F9F6;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Heading = styled.div`
  max-width: 680px;
  margin: 0 auto 44px;
  text-align: center;

  span {
    color: #FF6B0A;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;
  }

  h2 {
    margin: 14px 0;
    color: #0B3B2E;
    font-size: clamp(28px, 4vw, 42px);
    line-height: 1.2;
  }

  p {
    color: #66756B;
    line-height: 1.8;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.article`
  padding: 28px 24px;
  background: #FFFFFF;
  border: 1px solid #E0E9DF;
  border-radius: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(11, 59, 46, 0.08);
  }

  .icon {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    margin-bottom: 22px;
    border-radius: 14px;
    background: #EAF4E5;
    color: #0B3B2E;
    font-size: 24px;
  }

  h3 {
    margin-bottom: 12px;
    color: #0B3B2E;
    font-size: 18px;
  }

  p {
    color: #66756B;
    font-size: 14px;
    line-height: 1.8;
  }
`;

const benefits = [
  {
    icon: "◷",
    title: "Mais agilidade",
    description:
      "Simplifique tarefas e agilize o atendimento do seu restaurante.",
  },
  {
    icon: "☷",
    title: "Mais organização",
    description:
      "Mantenha pedidos e operações organizados em um só fluxo.",
  },
  {
    icon: "↗",
    title: "Mais visibilidade",
    description:
      "Consulte informações importantes para acompanhar seu negócio.",
  },
  {
    icon: "▣",
    title: "Mais praticidade",
    description:
      "Tenha uma experiência prática com as ferramentas do sistema.",
  },
];

export default function Benefits() {
  return (
    <Section id="beneficios">
      <Container>
        <Heading>
          <span>VANTAGENS DO CAJUMENU</span>

          <h2>
            Menos complicação.
            <br />
            Mais tempo para crescer.
          </h2>

          <p>
            Recursos para ajudar você a organizar a rotina e dedicar
            mais atenção aos seus clientes.
          </p>
        </Heading>

        <Grid>
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title}>
              <div className="icon" aria-hidden="true">
                {benefit.icon}
              </div>

              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </BenefitCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
