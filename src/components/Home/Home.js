import React from "react";
import { GET_ALL_USUARIO } from "../../api";

const Home = () => {
  const [usuarios, setUsuarios] = React.useState(null);

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
      <div>Hello Home</div>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
