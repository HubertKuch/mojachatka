import AuthController from "@/controllers/AuthController";
import useStore from "@/store/store";
import { useEffect, useState } from "react";

export default function useUser({ reload } = { reload: false }) {
  const [user, setUser] = useState(useStore((s) => s.user));

  useEffect(() => {
    if (reload) {
      AuthController.getProfile().then((user) => {
        setUser(user.body.user);
      });
    }
  }, [reload]);

  return user;
}
