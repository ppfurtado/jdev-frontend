const URL_API =
  "https://springboot-restapi-sample.herokuapp.com/springboot-restapi-sample";

export function GET_ALL_USUARIO() {
  return {
    url: `${URL_API}/usuarios`,
  };
}

export function POST_USUARIO(user) {
  return {
    url: `${URL_API}/criar-usuario`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        nome: user.nome,
        idade: user.idade,
      }),
    },
  };
}

export function DELETE(id) {
  return {
    url: `${URL_API}/deletar-usuario?iduser=${id}`,
    options: {
      method: "DELETE",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  };
}
