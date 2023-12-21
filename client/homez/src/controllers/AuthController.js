class AuthController {
  static async login(email, password) {
    const res = await fetch(process.env.BASE_URL + "/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    const body = await res.json();

    if (res.status === 200) {
      localStorage.setItem(process.env.TOKEN_KEY, body.token);
      localStorage.setItem(process.env.REFRESH_KEY, body.refresh);

      return { ...body, success: true };
    }

    return { ...body, success: false };
  }

  static async refresh() {
    const res = await fetch(process.env.BASE_URL + "/refreshToken", {
      method: "POST",
      body: JSON.stringify({
        refreshToken: localStorage.getItem(process.env.REFRESH_KEY),
      }),
      headers: {
        Authorization: `Bearer ${localStorage.getItem(process.env.TOKEN_KEY)}`,
      },
    });

    if (res.status !== 200) {
      console.error(await res.json());
      return;
    }

    return await res.json();
  }

  static async getProfile() {
    return await (
      await fetch(process.env.BASE_URL + "/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            process.env.TOKEN_KEY,
          )}`,
        },
      })
    ).json();
  }

  static clearStorage() {
    localStorage.clear();
  }
}

export default AuthController;
