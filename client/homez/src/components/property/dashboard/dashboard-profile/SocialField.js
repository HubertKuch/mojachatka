"use client";

import React, { useRef } from "react";
import useSocials from "@/hooks/useSocials";

const SocialField = () => {
  const socials = useSocials();
  const ref = useRef([]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current[0]);
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
              ref={ref}
              value={socials.find((s) => s.type === "FACEBOOK")?.link}
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
              value={socials.find((s) => s.type === "PINTEREST")?.link}
              ref={ref}
              type="text"
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
              value={socials.find((s) => s.type === "INSTAGRAM")?.link}
              ref={ref}
              type="text"
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
              value={socials.find((s) => s.type === "TWITTER")?.link}
              type="text"
              ref={ref}
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
              value={socials.find((s) => s.type === "LINKEDIN")?.link}
              type="text"
              ref={ref}
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
