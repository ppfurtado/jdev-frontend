import React from "react";

import { useNavigate, useParams } from "react-router-dom";

import { GET_USUARIO, PUT_USUARIO } from "../../api";
import ArrowLeft from "../ArrowLeft/ArrowLeft";

import "./style.css";

const EditUser = () => {
  const [nome, setnome] = React.useState("");
  const [idade, setIdade] = React.useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const handleNome = (e) => {
    setnome(e.target.value);
    console.log(e.target.value);
  };
  const handleIdade = (e) => {
    setIdade(e.target.value);
    console.log(e.target.value);
  };

  React.useEffect(() => {
    const { url } = GET_USUARIO(id);
    const getUSer = async () => {
      const user = await fetch(url);
      const json = await user.json();
      setnome(json.nome);
      setIdade(json.idade);
    };

    getUSer();
  }, [id]);

  const putUser = async (e) => {
    try {
      e.preventDefault();
      if (nome === "") {
        return alert("Insira o nome do usuário");
      }
      if (idade === "") {
        return alert("Insira a idade do usuário");
      }
      const { url, options } = PUT_USUARIO({
        id: id,
        nome: nome,
        idade: idade,
      });
      const users = await fetch(url, options);
      navigate("/");
      return users;
    } catch (error) {
      return console.log(error);
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
          <label htmlFor="id">
            <span> id </span>
            <input id="id" type="text" value={id} disabled />
          </label>
          <label htmlFor="nome">
            <span> Nome </span>
            <input id="nome" type="text" value={nome} onChange={handleNome} />
          </label>
          <label htmlFor="idade">
            <span> Idade </span>
            <input
              id="idade"
              type="number"
              value={idade}
              onChange={handleIdade}
            />
          </label>
          <button className="button" id="enviar" onClick={putUser}>
            Atualizar
          </button>
          <button className="button" id="cancelar" onClick={handleCancel}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
