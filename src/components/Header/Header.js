import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Header = () => {
  return (
    <div className="containerHeader">
      <Link to="/">
        <h2>CRUD SPRINGBOOT API REST</h2>
      </Link>
      <nav>
        <ul>
          <li>
            <Link className="buttoCriarUsuario" to="criar-usuario">
              Criar Usuário
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
