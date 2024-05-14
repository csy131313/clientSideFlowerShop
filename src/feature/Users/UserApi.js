import axios from "axios";

let baseUrl = "http://localhost:3000/api/user";

export const loginInServer = (user) => {
  return axios.post(`${baseUrl}/login`, user);
};
export const registerInServer = (user) => {
  return axios.post(`${baseUrl}`, user);
};