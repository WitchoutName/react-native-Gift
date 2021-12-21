import api from "./httpService";

const memberUrl = "api/gift-list/";

export async function inviteUser(listId, memberId, member_type) {
  const response = await api.client.post(
    `${memberUrl}${listId}/manage-member/${memberId}/`,
    { member_type }
  );
  return response;
}

export async function cancelInvite(listId, memberId) {
  const response = await api.client.put(
    `${memberUrl}${listId}/manage-member/${memberId}/`
  );
  return response;
}

export async function kickUser(listId, memberId) {
  const response = await api.client.delete(
    `${memberUrl}${listId}/manage-member/${memberId}/`
  );
  return response;
}

export default {
  cancelInvite,
  kickUser,
  inviteUser,
};
