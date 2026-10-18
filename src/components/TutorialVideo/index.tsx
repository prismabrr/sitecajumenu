
import styled from "styled-components";

const Section = styled.section`
  padding: 80px 24px;
  background: #FFFFFF;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Heading = styled.div`
  max-width: 700px;
  margin: 0 auto 36px;
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
    font-size: 16px;
    line-height: 1.8;
  }
`;

const VideoFrame = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border: 1px solid #D7E5D8;
  border-radius: 18px;
  background: #0B3B2E;
  box-shadow: 0 12px 32px rgba(11, 59, 46, 0.12);

  video,
  iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export default function TutorialVideo() {
  return (
    <Section id="tutorial">
      <Container>
        <Heading>
          <span>APRENDA NA PRÁTICA</span>

          <h2>
            Veja como o CajuMenu funciona.
          </h2>

          <p>
            Um passo a passo para você conhecer as ferramentas,
            entender os recursos e aprender a utilizar o sistema.
          </p>
        </Heading>

        <VideoFrame>
          <video controls preload="metadata">
            <source
              src="/videos/teste.mp4"
              type="video/mp4"
            />
            Seu navegador não suporta a reprodução deste vídeo.
          </video>
        </VideoFrame>
      </Container>
    </Section>
  );
}
