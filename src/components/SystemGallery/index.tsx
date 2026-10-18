
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
  max-width: 700px;
  margin: 0 auto 40px;
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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryCard = styled.article`
  padding: 14px;
  background: #FFFFFF;
  border: 1px solid #DDE7DC;
  border-radius: 18px;
  box-shadow: 0 8px 24px rgba(11, 59, 46, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(11, 59, 46, 0.1);
  }

  img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: contain;
    border: 1px solid #E1E9E0;
    border-radius: 12px;
    background: #FFFFFF;
  }

  h3 {
    margin: 16px 4px 8px;
    color: #0B3B2E;
    font-size: 18px;
  }

  p {
    margin: 0 4px 6px;
    color: #66756B;
    font-size: 14px;
    line-height: 1.7;
  }
`;

const images = [
  {
    title: "Painel administrativo",
    description: "Tenha uma visão organizada do seu negócio.",
    src: "/images/dashboard.webp",
    alt: "Painel administrativo do CajuMenu",
  },
  {
    title: "Cardápio digital",
    description: "Uma experiência prática para seus clientes.",
    src: "/images/dashboard.webp",
    alt: "Cardápio digital do CajuMenu",
  },
  {
    title: "PDV e vendas",
    description: "Organize o atendimento e registre suas vendas.",
    src: "/images/dashboard.webp",
    alt: "Tela do PDV do CajuMenu",
  },
  {
    title: "Gestão de pedidos",
    description: "Acompanhe os pedidos durante a operação.",
    src: "/images/dashboard.webp",
    alt: "Tela de gestão de pedidos do CajuMenu",
  },
];

export default function SystemGallery() {
  return (
    <Section id="galeria">
      <Container>
        <Heading>
          <span>EXPLORE O CAJUMENU</span>
          <h2>Tecnologia que facilita cada etapa.</h2>
          <p>
            Conheça as ferramentas que ajudam a organizar
            a rotina e melhorar a experiência do seu restaurante.
          </p>
        </Heading>

        <Grid>
          {images.map((image) => (
            <GalleryCard key={image.title}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </GalleryCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
