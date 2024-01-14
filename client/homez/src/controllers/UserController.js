import instance from "./axios";

class UserController {
  static async getPublic(id) {
    return (await instance.get("/publicUser/" + id)).data;
  }
}

export default UserController;
