const { default: axios } = require("axios");

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
  validateStatus: () => true,
});

export default instance;
