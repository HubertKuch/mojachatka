class SocialMediaController {
  static async getSocialMedia() {
    return await (
      await fetch(process.env.BASE_URL + "/socialMedia", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            process.env.TOKEN_KEY,
          )}`,
        },
      })
    ).json();
  }

  static async putMedia({ type, link }) {
    return await (
      await fetch(process.env.BASE_URL + "/socialMedia", {
        method: "PUT",
        body: JSON.stringify({ type, link }),
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            process.env.TOKEN_KEY,
          )}`,
          "Content-Type": "application/json",
        },
      })
    ).json();
  }
}

export default SocialMediaController;
