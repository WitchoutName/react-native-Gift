import { create } from "apisauce";
export const BASE_URL = "http://192.168.1.104:8000/"; //"192.168.1.104 192.168.0.184  http://192.168.1.114:8000/",
//"https://www.group-list.xyz/"
const client = create({
  baseURL: BASE_URL,
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
