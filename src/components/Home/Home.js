import React from "react";
import { GET_ALL_USUARIO } from "../../api";

import "./style.css";

const Home = () => {
  const [usuarios, setUsuarios] = React.useState(null);
  console.log(usuarios);

  React.useEffect(() => {
    const { url } = GET_ALL_USUARIO();
    async function getData() {
      try {
        const data = await fetch(url);
        const json = await data.json();
        console.log(json);
        setUsuarios(json);
        return json;
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  if (usuarios === null) return null;
  return (
    <div>
      <h2>Usuários</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Nome</th>
            <th>Idade</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(({ id, nome, idade }) => (
            <tr key={id}>
              <td>{id}</td>
              <td> {nome} </td>
              <td> {idade}</td>
              <td style={{ textAlign: "center", width: "200px" }}>
                {" "}
                <button id="button-edit">Edit</button>{" "}
                <button id="button-delete">Delete</button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
