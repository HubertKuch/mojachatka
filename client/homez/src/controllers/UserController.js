import instance from "./axios";

class UserController {
  static async getPublic(id) {
    return (await instance.get("/publicUser/" + id)).data;
  }

  static async register(type, data) {
    const res = await instance.post("/register?type=" + type, data);

    return res;
  }
}

export default UserController;
