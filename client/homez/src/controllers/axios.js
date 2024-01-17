import useStore from "@/store/store";

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

instance.interceptors.response.use((res) => {
  if (res.status === 403) {
    useStore.setState({ user: null, isLoggedIn: false }, true);
  }

  return res;
});

export default instance;
