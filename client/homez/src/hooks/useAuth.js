import useStore from "@/store/store";

const { default: AuthController } = require("@/controllers/AuthController");
const { useState, useEffect } = require("react");

const useAuth = ({ redirect } = { redirect: true }) => {
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    AuthController.authenticated().then(setAuth);
  });

  useEffect(() => {
    if (!auth) {
      useStore.setState({ user: null, isLoggedIn: false });
    }

    if (!auth && redirect && window) {
      window?.location?.replace("/logowanie");
    }
  }, [auth]);

  return auth;
};

export default useAuth;
