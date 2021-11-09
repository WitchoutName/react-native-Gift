import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "./httpService";
import * as Crypto from "expo-crypto";

const authUrl = "auth/";
const tokenKey = "token";

getAuthToken().then((t) => {
  api.setAuthToken(t);
});

async function passwordToHash(password, user) {
  const hash = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    password || user.password
  );
  return password ? hash : { ...user, password: hash };
}

export async function register(user) {
  const response = await api.client.put(
    authUrl + "get-token/",
    await passwordToHash(null, user)
  );
  if (response.status >= 200 && response.status < 300) {
    await setAuthToken(response.data.token);
  }
  return response;
}

export async function login(email, password) {
  const response = await api.client.post(authUrl + "get-token/", {
    email,
    password: await passwordToHash(password),
  });
  //console.log(response);
  if (response.status >= 200 && response.status < 300) {
    await setAuthToken(response.data.token);
    return response;
  }
  return response;
}

export function loginWithAuthToken(token) {
  setAuthToken(token);
}

export async function logout() {
  const response = await setAuthToken("");
  return response;
}

async function setAuthToken(authToken) {
  try {
    await AsyncStorage.setItem(tokenKey, authToken);
    api.setAuthToken(authToken);
  } catch (error) {
    throw new Error("Error storing the auth token");
  }
}

export async function getUser() {
  try {
    const response = await api.client.post(authUrl + "get-user/");
    //console.log(response);
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function putUser(user) {
  try {
    const response = await api.client.put(authUrl + "update-user/", user);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getAuthToken() {
  try {
    return await AsyncStorage.getItem(tokenKey);
  } catch (error) {
    throw new Error("Error getting the auth token");
  }
}

export async function loginWithGoogle(accessToken) {
  const response = await api.client.post(authUrl + "google-login/", {
    access_token: accessToken,
  });
  if (response.status >= 200 && response.status < 300) {
    await setAuthToken(response.data.token);
    return response;
  }
  return response;
}

export async function requestCodeToEmail(email) {
  const response = await api.client.post(authUrl + "change-password/0/", {
    email,
  });

  return response;
}
export async function codeValidation(code) {
  const response = await api.client.post(authUrl + "change-password/1/", {
    code,
  });

  return response;
}

export async function changePassword(password, code) {
  const response = await api.client.post(authUrl + "change-password/2/", {
    password: await passwordToHash(password),
    code,
  });

  return response;
}

export default {
  login,
  loginWithAuthToken,
  logout,
  getUser,
  putUser,
  getAuthToken,
  register,
  loginWithGoogle,
  requestCodeToEmail,
  codeValidation,
  changePassword,
};
