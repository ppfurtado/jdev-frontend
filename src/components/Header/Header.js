import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <h2>CRUD SPRINGBOOT API REST</h2>
      </Link>
      <ul>
        <Link to="criar-usuario">Criar Usuário</Link>
      </ul>
    </nav>
  );
};

export default Header;
