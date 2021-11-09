import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "./httpService";
import cache from "./cacheService";

const gListUrl = "api/user/glist/";
const listKey = "activeList";

async function setActiveList(activeList) {
  try {
    await AsyncStorage.setItem(listKey, `${activeList}`);
  } catch (error) {
    throw new Error("Error storing the auth token");
  }
}

async function getActiveList() {
  try {
    return await AsyncStorage.getItem(listKey);
  } catch (error) {
    throw new Error("Error getting the auth token");
  }
}

export async function getLists() {
  const response = await api.client.get(gListUrl);
  return response;
}

export async function getList(id) {
  const response = await api.client.get(`${gListUrl}${id}/`);
  if (response.ok) cache.setList({ ...response.data });
  return response;
}

export async function postList(list) {
  const response = await api.client.post(gListUrl, { ...list });
  return response;
}

export async function putList(list) {
  const response = await api.client.put(`${gListUrl}${list.id}/`, { ...list });
  return response;
}

export async function joinList(token) {
  const response = await api.client.put(gListUrl, { token });
  return response;
}

export async function leaveList(lId) {
  const response = await api.client.delete(gListUrl, { id: lId });
  return response;
}

export async function deleteList(id) {
  const response = await api.client.delete(`${gListUrl}${id}/`);
  return response;
}

export default {
  getLists,
  getList,
  postList,
  putList,
  joinList,
  leaveList,
  deleteList,
  setActiveList,
  getActiveList,
};
