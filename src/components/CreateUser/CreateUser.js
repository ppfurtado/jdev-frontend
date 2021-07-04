import React from "react";
import { useNavigate } from "react-router-dom";

import { POST_USUARIO } from "../../api";
import ArrowLeft from "../ArrowLeft/ArrowLeft";

import "./style.css";

const CreateUser = () => {
  const [nome, setnome] = React.useState("");
  const [idade, setIdade] = React.useState("");

  const navigate = useNavigate();

  const handleNome = (e) => {
    setnome(e.target.value);
  };
  const handleIdade = (e) => {
    setIdade(e.target.value);
  };

  const postUSer = async (e) => {
    try {
      e.preventDefault();
      if (nome === "") {
        return alert("Insira o nome do usuário");
      }
      if (idade === "") {
        return alert("Insira a idade do usuário");
      }
      const { url, options } = POST_USUARIO({
        nome: nome,
        idade: idade,
      });
      const users = await fetch(url, options);
      return users;
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <ArrowLeft />
      <div className="wrapper">
        <h3>Criar Usuário</h3>
        <form>
          <label htmlFor="nome">
            <span> Nome: </span>
            <input id="nome" type="text" value={nome} onChange={handleNome} />
          </label>
          <label htmlFor="idade">
            <span> Idade: </span>
            <input
              id="idade"
              type="number"
              value={idade}
              onChange={handleIdade}
            />
          </label>
          <button className="button" id="enviar" onClick={postUSer}>
            Enviar
          </button>
          <button className="button" id="cancelar" onClick={handleCancel}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
