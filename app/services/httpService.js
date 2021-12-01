import { create } from "apisauce";
//"https://www.group-list.xyz/"
const client = create({
  baseURL: "http://127.0.0.1:8000/", //"http://192.168.1.114:8000/",
});

async function setAuthToken(token) {
  if (token) {
    client.addAsyncRequestTransform(async (request) => {
      request.headers["Authorization"] = `Token ${token}`;
    });
  }
}

export default {
  client,
  setAuthToken,
};
