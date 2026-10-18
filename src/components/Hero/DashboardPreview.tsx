
import styled from "styled-components";

const Preview = styled.div`
  width: 100%;
  min-width: 0;
  position: relative;
  padding: 20px 0;

  .dashboard {
    overflow: hidden;
    background: #ffffff;
    border: 1px solid #dce6dc;
    border-radius: 12px;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.3);
  }

  .topbar {
    min-height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 10px 14px;
    border-bottom: 1px solid #e8eee7;
    color: #0b3b2e;
    font-size: 11px;
    font-weight: 800;
  }

  .status {
    color: #51851d;
    background: #eff8e7;
    border-radius: 5px;
    padding: 5px 7px;
    font-size: 9px;
  }

  .content {
    display: grid;
    grid-template-columns: 86px minmax(0, 1fr);
    min-height: 260px;
  }

  .sidebar {
    background: #0b3b2e;
    color: #ffffff;
    padding: 14px 8px;
    font-size: 9px;
  }

  .sidebar div {
    padding: 10px 5px;
    border-radius: 5px;
    margin-bottom: 5px;
  }

  .sidebar .active {
    background: #1b5a42;
    color: #b5ec65;
  }

  .main {
    padding: 15px 12px;
    min-width: 0;
  }

  .main h3 {
    color: #183b2e;
    font-size: 15px;
  }

  .subtitle {
    margin-top: 5px;
    color: #7a877d;
    font-size: 9px;
  }

  .metrics {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 6px;
    margin: 15px 0;
  }

  .metric {
    min-width: 0;
    padding: 9px 6px;
    border: 1px solid #e6ede5;
    border-radius: 6px;
  }

  .metric span {
    color: #748176;
    font-size: 8px;
  }

  .metric strong {
    display: block;
    margin-top: 7px;
    color: #0b3b2e;
    font-size: clamp(10px, 1.1vw, 15px);
    overflow-wrap: anywhere;
  }

  .orders {
    border: 1px solid #e6ede5;
    border-radius: 7px;
    padding: 10px;
  }

  .orders-title {
    color: #183b2e;
    font-size: 10px;
    font-weight: 800;
    margin-bottom: 9px;
  }

  .order {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    padding: 9px 0;
    border-top: 1px solid #edf1ec;
    font-size: 9px;
    color: #46554b;
  }

  .tag {
    color: #427a21;
    background: #e9f6df;
    padding: 4px 5px;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 8px;
  }

  @media (max-width: 480px) {
    .content {
      grid-template-columns: 66px minmax(0, 1fr);
    }

    .sidebar {
      padding: 10px 4px;
      font-size: 8px;
    }

    .main {
      padding: 10px 7px;
    }

    .metrics {
      gap: 4px;
    }
  }
`;

export default function DashboardPreview() {
  return (
    <Preview>
      <div className="dashboard">
        <div className="topbar">
          <span>🥭 CajuMenu</span>
          <span className="status">Painel de gestão</span>
        </div>

        <div className="content">
          <aside className="sidebar">
            <div className="active">▦ Dashboard</div>
            <div>▤ Pedidos</div>
            <div>▧ Cardápio</div>
            <div>▣ Mesas</div>
            <div>◷ Relatórios</div>
          </aside>

          <div className="main">
            <h3>Visão geral</h3>
            <p className="subtitle">
              Acompanhe seu restaurante
            </p>

            <div className="metrics">
              <div className="metric">
                <span>Vendas</span>
                <strong>R$ 1.245</strong>
              </div>

              <div className="metric">
                <span>Pedidos</span>
                <strong>48</strong>
              </div>

              <div className="metric">
                <span>Ticket médio</span>
                <strong>R$ 25,95</strong>
              </div>
            </div>

            <div className="orders">
              <p className="orders-title">Pedidos recentes</p>

              <div className="order">
                <span>Pedido #1256</span>
                <span className="tag">Finalizado</span>
              </div>

              <div className="order">
                <span>Pedido #1255</span>
                <span className="tag">Finalizado</span>
              </div>

              <div className="order">
                <span>Pedido #1254</span>
                <span className="tag">Em preparo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Preview>
  );
}
