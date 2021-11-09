import api from "./httpService";

const itemUrl = "api/user/glist/item/";

export async function getItems() {
  const response = await api.client.get(itemUrl);
  return response;
}

export async function postItem(item) {
  const response = await api.client.post(itemUrl, { ...item });
  return response;
}

export async function putItem(item) {
  const response = await api.client.put(`${itemUrl}${item.id}/`, { ...item });
  return response;
}

export async function deleteItem(id) {
  const response = await api.client.delete(`${itemUrl}${id}/`);
  return response;
}

export default {
  getItems,
  postItem,
  putItem,
  deleteItem,
};
