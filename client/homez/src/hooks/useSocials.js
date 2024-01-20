const {
  default: SocialMediaController,
} = require("@/controllers/SocialMediaController");
const { useState, useEffect } = require("react");

const useSocials = () => {
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    SocialMediaController.getSocialMedia().then(setSocials);
  }, []);

  return socials;
};

export default useSocials;
