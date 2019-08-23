import React from "react";

import facebook from "../assets/facebook.png";

function Header() {
  return (
    <header class="header">
      <nav>
        <img src={facebook} />
        <div class="profile">
          <a href="">Meu perfil</a>
          <i class="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
