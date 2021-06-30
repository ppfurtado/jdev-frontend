const URI_API =
  "https://springboot-restapi-sample.herokuapp.com/springboot-restapi-sample";

export function GET_ALL_USUARIO() {
  return {
    url: `${URI_API}/usuarios`,
  };
}
