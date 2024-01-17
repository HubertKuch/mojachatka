import useStore from "@/store/store";

const { default: AuthController } = require("@/controllers/AuthController");
const { useState, useEffect } = require("react");

const useAuth = ({ redirect } = { redirect: true }) => {
  const [auth, setAuth] = useState(true);
  const logout = useStore((s) => s.logout);

  useEffect(() => {
    AuthController.authenticated().then(setAuth);

    return () => {};
  });

  useEffect(() => {
    if (!auth) {
      logout();
    }

    if (!auth && redirect && window) {
      window?.location?.replace("/logowanie");
    }
  }, [auth]);

  return auth;
};

export default useAuth;
