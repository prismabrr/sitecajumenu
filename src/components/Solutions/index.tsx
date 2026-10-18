
const solutions = [
  {
    icon: "🍽️",
    title: "Cardápio Digital",
    description:
      "Apresente seus produtos de forma organizada e facilite os pedidos dos seus clientes.",
  },
  {
    icon: "🖥️",
    title: "PDV e Caixa",
    description:
      "Registre vendas, organize o atendimento e tenha mais controle da operação.",
  },
  {
    icon: "📋",
    title: "Gestão de Pedidos",
    description:
      "Acompanhe os pedidos e mantenha sua equipe organizada durante o atendimento.",
  },
  {
    icon: "📊",
    title: "Gestão do Restaurante",
    description:
      "Tenha mais visibilidade sobre as informações e a rotina do seu negócio.",
  },
];

export default function Solutions() {
  return (
    <section
      id="solucoes"
      style={{
        padding: "80px 24px",
        background: "#F7F9F6",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <span
          style={{
            color: "#FF6B0A",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "1.5px",
          }}
        >
          NOSSAS SOLUÇÕES
        </span>

        <h2
          style={{
            marginTop: "12px",
            color: "#0B3B2E",
            fontSize: "clamp(28px, 4vw, 42px)",
          }}
        >
          Tudo para seu restaurante crescer
        </h2>

        <p
          style={{
            maxWidth: "620px",
            margin: "16px auto 40px",
            color: "#66756B",
            lineHeight: 1.7,
          }}
        >
          Simplifique sua operação com ferramentas pensadas para facilitar
          o dia a dia do seu restaurante.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "24px",
            textAlign: "left",
          }}
        >
          {solutions.map((solution) => (
            <article
              key={solution.title}
              style={{
                background: "#FFFFFF",
                padding: "28px",
                borderRadius: "18px",
                border: "1px solid #E7EDE6",
                boxShadow: "0 8px 24px rgba(11, 59, 46, 0.04)",
              }}
            >
              <div
                style={{
                  width: "54px",
                  height: "54px",
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "15px",
                  background: "#EAF4E5",
                  fontSize: "26px",
                  marginBottom: "20px",
                }}
              >
                {solution.icon}
              </div>

              <h3
                style={{
                  color: "#0B3B2E",
                  fontSize: "19px",
                  marginBottom: "12px",
                }}
              >
                {solution.title}
              </h3>

              <p
                style={{
                  color: "#66756B",
                  fontSize: "14px",
                  lineHeight: 1.8,
                }}
              >
                {solution.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
