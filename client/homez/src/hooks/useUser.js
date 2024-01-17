import AuthController from "@/controllers/AuthController";
import useStore from "@/store/store";
import { useState } from "react";

export default function useUser({ reload } = { reload: false }) {
  const [user, setUser] = useState(useStore((s) => s.user));

  if (reload) {
    AuthController.getProfile().then((user) => {
      setUser(user.body.user);
    });
  }

  return user;
}
