import React from "react";
import { useNavigate } from "react-router-dom";
import { DELETE, GET_ALL_USUARIO } from "../../api";
import Header from "../Header/Header";

import "./style.css";

const Home = () => {
  const [usuarios, setUsuarios] = React.useState(null);
  const nativate = useNavigate();

  React.useEffect(() => {
    const { url } = GET_ALL_USUARIO();
    async function getData() {
      try {
        const data = await fetch(url);
        const json = await data.json();
        setUsuarios(json);
        return json;
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  const handleEdit = (id) => {
    nativate(`/atualizar/${id}`);
  };

  const hanbleDelete = async (id) => {
    const { url, options } = DELETE(id);
    const data = await fetch(url, options);
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    return data;
  };

  if (usuarios === null) return null;
  return (
    <div>
      <Header />
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
                <button id="button-edit" onClick={() => handleEdit(id)}>
                  Edit
                </button>{" "}
                <button id="button-delete" onClick={() => hanbleDelete(id)}>
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
