import useStore from "@/store/store";
import axios from "./axios";

class AuthController {
  static async logout() {
    await axios.get("/logout");
  }

  static async activateAccount(email, code) {
    const res = await axios.get(`/verifyEmail?email=${email}&code=${code}`);

    return res;
  }

  static async login(email, password) {
    const res = await axios.post("/login", { email, password });
    const body = res.data;

    if (res.status === 200) {
      return { ...body, success: true };
    }

    return { ...body, success: false };
  }

  static async authenticated() {
    const res = await fetch(`${process.env.BASE_URL}/authenticated`, {
      credentials: "include",
    });

    return (await res.json()).authenticated;
  }

  static async getProfile() {
    const res = await axios.get("/profile");

    useStore.setState({ user: res.data.user }, true);

    return {
      status: res.status,
      body: res.data,
    };
  }
}

export default AuthController;
