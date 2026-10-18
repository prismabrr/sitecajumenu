
import styled from "styled-components";

const Phone = styled.div`
  width: 190px;
  max-width: 100%;
  padding: 8px;
  border: 3px solid #26352e;
  border-radius: 27px;
  background: #101713;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);

  .screen {
    overflow: hidden;
    border-radius: 19px;
    background: #ffffff;
    min-height: 340px;
  }

  .phone-header {
    background: #063b2b;
    color: #ffffff;
    padding: 18px 10px 13px;
  }

  .brand {
    font-size: 14px;
    font-weight: 800;
  }

  .subtitle {
    margin-top: 5px;
    color: #cde6d4;
    font-size: 9px;
  }

  .search {
    margin: 12px 8px;
    padding: 9px;
    border: 1px solid #e3e9e1;
    border-radius: 7px;
    color: #829087;
    font-size: 9px;
  }

  .categories {
    display: flex;
    gap: 5px;
    padding: 0 8px 10px;
  }

  .category {
    padding: 6px 7px;
    border-radius: 6px;
    background: #f0f3ee;
    color: #536157;
    font-size: 8px;
  }

  .category.active {
    background: #0b3b2e;
    color: #ffffff;
  }

  .product {
    display: grid;
    grid-template-columns: 43px minmax(0, 1fr);
    gap: 7px;
    padding: 9px 8px;
    border-top: 1px solid #edf0eb;
  }

  .food {
    display: grid;
    place-items: center;
    width: 43px;
    height: 43px;
    border-radius: 7px;
    background: #fff0dc;
    font-size: 25px;
  }

  .product-name {
    color: #24382b;
    font-size: 10px;
    font-weight: 800;
  }

  .product-description {
    margin-top: 4px;
    color: #778278;
    font-size: 8px;
    line-height: 1.4;
  }

  .price {
    margin-top: 5px;
    color: #0b3b2e;
    font-size: 10px;
    font-weight: 800;
  }

  .bottom {
    display: flex;
    justify-content: space-around;
    padding: 12px 5px;
    border-top: 1px solid #edf0eb;
    color: #0b3b2e;
    font-size: 9px;
    font-weight: 700;
  }

  @media (max-width: 480px) {
    width: 170px;

    .screen {
      min-height: 310px;
    }
  }
`;

export default function PhonePreview() {
  return (
    <Phone>
      <div className="screen">
        <header className="phone-header">
          <div className="brand">🥭 CajuMenu</div>
          <p className="subtitle">Seu cardápio digital</p>
        </header>

        <div className="search">⌕ Buscar no cardápio...</div>

        <div className="categories">
          <span className="category active">Todos</span>
          <span className="category">Lanches</span>
          <span className="category">Porções</span>
        </div>

        <div className="product">
          <div className="food">🍔</div>
          <div>
            <p className="product-name">X-Burger</p>
            <p className="product-description">
              Pão, hambúrguer, queijo e tomate
            </p>
            <p className="price">R$ 28,00</p>
          </div>
        </div>

        <div className="product">
          <div className="food">🍱</div>
          <div>
            <p className="product-name">Quentinha M</p>
            <p className="product-description">
              Arroz, feijão e acompanhamento
            </p>
            <p className="price">R$ 18,00</p>
          </div>
        </div>

        <div className="product">
          <div className="food">🍟</div>
          <div>
            <p className="product-name">Batata frita</p>
            <p className="product-description">
              Porção crocante
            </p>
            <p className="price">R$ 16,00</p>
          </div>
        </div>

        <footer className="bottom">
          <span>⌂ Início</span>
          <span>⌕ Buscar</span>
          <span>🛒 Carrinho</span>
        </footer>
      </div>
    </Phone>
  );
}
