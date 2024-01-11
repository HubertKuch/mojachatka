const { default: useStore } = require("@/store/store");
const { default: axios } = require("axios");
const store = useStore.getState();

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Authorization: `Bearer: ${store.token}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  validateStatus: () => true,
});

export default instance;
