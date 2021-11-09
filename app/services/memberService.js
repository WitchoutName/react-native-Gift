import api from "./httpService";

const memberUrl = "api/user/glist/";

export async function kickMember(listId, memberId) {
  const response = await api.client.put(
    `${memberUrl}${listId}/member/${memberId}/`
  );
  return response;
}

export async function banMember(listId, memberId) {
  const response = await api.client.delete(
    `${memberUrl}${listId}/member/${memberId}/`
  );
  return response;
}

export default {
  kickMember,
  banMember,
};
