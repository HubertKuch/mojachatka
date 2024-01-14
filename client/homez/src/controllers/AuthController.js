import useStore from "@/store/store";
import axios from "./axios";

class AuthController {
  static async login(email, password) {
    const res = await axios.post("/login", { email, password });
    const body = res.data;

    if (res.status === 200) {
      localStorage.setItem(process.env.TOKEN_KEY, body.token);
      useStore.getState().setToken(body.token);
      useStore.getState().setRefreshToken(body.refresh);

      return { ...body, success: true };
    }

    return { ...body, success: false };
  }

  static async getProfile() {
    const res = await axios.get("/profile");

    return {
      status: res.status,
      body: res.data,
    };
  }
}

export default AuthController;
