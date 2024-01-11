const { default: UserController } = require("@/controllers/UserController");
const { useState, useEffect } = require("react");

const useProfile = (id) => {
  const [user, setUser] = useState(null);

  console.log(id);

  if (!id) {
    return {};
  }

  if (!user) {
    UserController.getPublic(id).then(setUser);
  }

  return user;
};

module.exports = useProfile;
