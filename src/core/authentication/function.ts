import { jwtDecode } from "jwt-decode";

import { AccessTokenPayload, UserInformation } from "./type";

const USER_INFO_KEY = "user";
const TOKEN_KEY = "token";

export const getUserInformation = (): UserInformation | object => {
  return JSON.parse(localStorage.getItem(USER_INFO_KEY) ?? "{}");
};

export const getAccessToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const saveUserInformation = (userInformation: UserInformation) => {
  return localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInformation));
};

export const saveAccessToken = (token: string) => {
  return localStorage.setItem(TOKEN_KEY, token);
};

export const removeUserInformation = () => {
  return localStorage.removeItem(USER_INFO_KEY);
};

export const removeAccessToken = () => {
  return localStorage.removeItem(TOKEN_KEY);
};

export const accessTokenDecode = (token: string) => {
  try {
    return jwtDecode<AccessTokenPayload>(token);
  } catch {
    return {};
  }
};

export const clearToken = () => {
  removeAccessToken();
  removeUserInformation();
};
