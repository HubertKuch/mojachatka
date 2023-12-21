"use client";

import useUser from "@/hooks/useUser";
import React from "react";

const PersonalInfo = () => {
  const user = useUser();

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Username
            </label>
            <input
              defaultValue={user.username}
              type="text"
              className="form-control"
              placeholder="Username"
              disabled
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Email</label>
            <input
              defaultValue={user.email}
              type="email"
              className="form-control"
              placeholder="Mail"
              disabled
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Phone</label>
            <input
              defaultValue={user.phoneNumber}
              type="text"
              className="form-control"
              placeholder="Telefon"
              disabled
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              First Name
            </label>
            <input
              defaultValue={user.firstName}
              type="text"
              className="form-control"
              placeholder="Your Name"
              disabled
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Last Name
            </label>
            <input
              defaultValue={user.lastName}
              type="text"
              className="form-control"
              placeholder="Your Name"
              disabled
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-12">
          <div className="text-end">
            <button disabled type="submit" className="ud-btn btn-dark">
              Update Profile
              <i className="fal fa-arrow-right-long" />
            </button>
          </div>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default PersonalInfo;
