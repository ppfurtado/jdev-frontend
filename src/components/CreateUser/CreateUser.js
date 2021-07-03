import React from "react";
import { POST_USUARIO } from "../../api";

const CreateUser = () => {
  const [nome, setnome] = React.useState("");
  const [idade, setIdade] = React.useState("");

  const handleNome = (e) => {
    setnome(e.target.value);
  };
  const handleIdade = (e) => {
    setIdade(e.target.value);
  };

  const postUSer = async (e) => {
    e.preventDefault();
    console.log("nome", nome);
    const { url, options } = POST_USUARIO({
      nome: nome,
      idade: idade,
    });
    const users = await fetch(url, options);
    return users;
  };

  return (
    <div>
      <form onSubmit={postUSer}>
        <label htmlFor="nome">
          Nome:
          <input id="nome" type="text" value={nome} onChange={handleNome} />
        </label>
        <label htmlFor="idade">
          Idade:
          <input
            id="idade"
            type="number"
            value={idade}
            onChange={handleIdade}
          />
        </label>
        <button onClick={postUSer}>Enviar</button>
      </form>
    </div>
  );
};

export default CreateUser;
