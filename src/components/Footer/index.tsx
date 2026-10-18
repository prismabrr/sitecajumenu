
import styled from "styled-components";

const FooterSection = styled.footer`
  background: #082F25;
  color: #FFFFFF;
  padding: 60px 24px 24px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px 24px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const Brand = styled.div`
  h2 {
    color: #FFFFFF;
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -1px;
  }

  h2 span {
    color: #FF6B0A;
  }

  p {
    max-width: 300px;
    margin-top: 14px;
    color: #C5D6CC;
    font-size: 14px;
    line-height: 1.8;
  }
`;

const Column = styled.div`
  h3 {
    margin-bottom: 18px;
    color: #FFFFFF;
    font-size: 15px;
  }

  a {
    display: block;
    width: fit-content;
    margin-bottom: 13px;
    color: #C5D6CC;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: #FF8A3D;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.14);

  p {
    color: #B8CCC0;
    font-size: 13px;
    line-height: 1.7;
  }

  a {
    color: #B8CCC0;
    text-decoration: none;
  }

  a:hover {
    color: #FFFFFF;
  }
`;

export default function Footer() {
  return (
    <FooterSection id="contato">
      <Container>
        <FooterGrid>
          <Brand>
            <h2>
              Caju<span>Menu</span>
            </h2>

            <p>
              Tecnologia para simplificar a rotina do seu restaurante
              e ajudar seu negócio a crescer.
            </p>
          </Brand>

          <Column>
            <h3>Navegação</h3>
            <a href="#inicio">Início</a>
            <a href="#solucoes">Soluções</a>
            <a href="#sistema">Conheça o sistema</a>
            <a href="#beneficios">Benefícios</a>
          </Column>

          <Column>
            <h3>Conteúdo</h3>
            <a href="#tutorial">Tutorial em vídeo</a>
            <a href="#galeria">Galeria do sistema</a>
            <a href="#comecar">Comece agora</a>
          </Column>

          <Column>
            <h3>Contato</h3>
            <a href="mailto:contato@cajumenu.com.br">
              E-mail
            </a>
            <a href="#comecar">Conheça o CajuMenu</a>
          </Column>
        </FooterGrid>

        <Bottom>
          <p>
            © {new Date().getFullYear()} CajuMenu. Todos os direitos
            reservados.
          </p>

          <p>
            Feito para facilitar a vida de quem empreende.
          </p>
        </Bottom>
      </Container>
    </FooterSection>
  );
}
