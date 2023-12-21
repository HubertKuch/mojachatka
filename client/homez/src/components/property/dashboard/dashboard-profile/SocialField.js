"use client";

import React, { useState } from "react";
import useSocials from "@/hooks/useSocials";
import SocialMediaController from "@/controllers/SocialMediaController";

const SocialField = () => {
  const socials = useSocials();
  const [changedSocials, setChangedSocials] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(changedSocials);

    for (const social of changedSocials) {
      await SocialMediaController.putMedia({
        type: social.type,
        link: social.link || "",
      });
    }
  };

  const onChange = (type, link) => {
    console.log(link);
    setChangedSocials((s) => {
      const social = s.find((s) => s.type === type);

      social ? (social.link = link) : s.push({ type, link });

      return s;
    });
  };

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Facebook Url
            </label>
            <input
              defaultValue={
                socials.find((s) => s.type === "FACEBOOK")?.link || ""
              }
              onChange={(e) => onChange("FACEBOOK", e.target.value)}
              type="text"
              className="form-control"
              placeholder="Facebook Url"
            />
          </div>
        </div>
        {/* End .col */}
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Pinterest Url
            </label>
            <input
              defaultValue={
                socials.find((s) => s.type === "PINTEREST")?.link || ""
              }
              type="text"
              onChange={(e) => onChange("PINTEREST", e.target.value)}
              className="form-control"
              placeholder="Pinterest Url"
            />
          </div>
        </div>
        {/* End .col */}
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Instagram Url
            </label>
            <input
              defaultValue={
                socials.find((s) => s.type === "INSTAGRAM")?.link || ""
              }
              type="text"
              onChange={(e) => onChange("INSTAGRAM", e.target.value)}
              className="form-control"
              placeholder="Instagram Url"
            />
          </div>
        </div>{" "}
        {/* End .col */}
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Twitter Url
            </label>
            <input
              defaultValue={
                socials.find((s) => s.type === "TWITTER")?.link || ""
              }
              type="text"
              onChange={(e) => onChange("TWITTER", e.target.value)}
              className="form-control"
              placeholder="Twitter Url"
            />
          </div>
        </div>
        {/* End .col */}
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Linkedin Url
            </label>
            <input
              defaultValue={
                socials.find((s) => s.type === "LINKEDIN")?.link || ""
              }
              type="text"
              onChange={(e) => onChange("LINKEDIN", e.target.value)}
              className="form-control"
              placeholder="Linkedin Url"
            />
          </div>
        </div>
        {/* End .col */}
        <div className="col-md-12">
          <div className="text-end">
            <button
              type="submit"
              className="ud-btn btn-dark"
              onClick={onSubmit}
            >
              Update Social
              <i className="fal fa-arrow-right-long" />
            </button>
          </div>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default SocialField;
