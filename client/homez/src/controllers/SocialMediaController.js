import instance from "./axios";

class SocialMediaController {
  static async getSocialMedia() {
    return (await instance.get("/socialMedia")).data;
  }

  static async putMedia({ type, link }) {
    return (await instance.put("/socialMedia", JSON.stringify({ type, link })))
      .data;
  }
}

export default SocialMediaController;
