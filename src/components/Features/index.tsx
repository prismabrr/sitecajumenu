
const features = [
  { icon: "🍽️", title: "Cardápio digital", description: "Produtos organizados para facilitar os pedidos." },
  { icon: "🖥️", title: "PDV e caixa", description: "Registre vendas e pedidos em um só lugar." },
  { icon: "📋", title: "Gestão de pedidos", description: "Acompanhe o andamento de cada pedido." },
  { icon: "🛵", title: "Delivery", description: "Organize as entregas do restaurante." },
  { icon: "📦", title: "Controle de estoque", description: "Acompanhe produtos e disponibilidade." },
  { icon: "📊", title: "Relatórios", description: "Consulte informações do negócio." },
];

export default function Features() {
  return (
    <section
      id="funcionalidades"
      style={{
        background: "#ffffff",
        padding: "36px 24px",
        borderBottom: "1px solid #e8eee7",
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "28px 20px",
        }}
      >
        {features.map((feature) => (
          <article
            key={feature.title}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                display: "grid",
                placeItems: "center",
                borderRadius: "14px",
                background: "#edf6e5",
                fontSize: "23px",
              }}
            >
              {feature.icon}
            </div>

            <h3 style={{ color: "#183b2e", fontSize: "14px" }}>
              {feature.title}
            </h3>

            <p
              style={{
                maxWidth: "180px",
                color: "#718075",
                fontSize: "12px",
                lineHeight: 1.6,
              }}
            >
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
