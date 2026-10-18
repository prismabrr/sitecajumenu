
import { useState } from "react";
import { HeaderContainer, Logo, Navigation, HeaderActions, MenuButton } from "./styles";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <div className="content">
        <Logo href="#inicio">
          {/* <span className="symbol">C</span> */}
          <span className="name">
            Caju<span>Menu</span>
          </span>
        </Logo>

        <Navigation $open={menuOpen}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
          <a href="#sistema" onClick={() => setMenuOpen(false)}>O sistema</a>
          <a href="#funcionalidades" onClick={() => setMenuOpen(false)}>Funcionalidades</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>

          <div className="mobile-actions">
            <a href="#acesso" onClick={() => setMenuOpen(false)}>Acessar sistema</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Quero conhecer</a>
          </div>
        </Navigation>

        <HeaderActions>
          <a className="login" href="#acesso">Acessar sistema</a>
          <a className="start" href="#contato">Conheça o CajuMenu</a>
        </HeaderActions>

        <MenuButton
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </MenuButton>
      </div>
    </HeaderContainer>
  );
}
