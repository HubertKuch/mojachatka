import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <form className="form-style1">
      <div className="mb25">
        <label className="form-label fw600 dark-color">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Wprowadź adres email"
          required
        />
      </div>
      {/* End email */}

      <div className="mb15">
        <label className="form-label fw600 dark-color">Hasło</label>
        <input
          type="text"
          className="form-control"
          placeholder="Wprowadź hasło"
          required
        />
      </div>
      {/* End Password */}

      <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
        <label className="custom_checkbox fz14 ff-heading">
          Zapamiętaj mnie
          <input type="checkbox" defaultChecked="checked" />
          <span className="checkmark" />
        </label>
        <a className="fz14 ff-heading" href="#">
          Nie pamiętasz hasła?
        </a>
      </div>
      {/* End  Lost your password? */}

      <div className="d-grid mb20">
        <button className="ud-btn btn-thm" type="submit">
          Zaloguj się <i className="fal fa-arrow-right-long" />
        </button>
      </div>
      {/* End submit */}

      <div className="hr_content mb20">
        <hr />
        <span className="hr_top_text">LUB</span>
      </div>

      <div className="d-grid mb10">
        <button className="ud-btn btn-white" type="button">
          <i className="fab fa-google" /> Kontynuuj z Google
        </button>
      </div>
      <div className="d-grid mb10">
        <button className="ud-btn btn-fb" type="button">
          <i className="fab fa-facebook-f" /> Kontynuuj z Facebookiem
        </button>
      </div>
      <p className="dark-color text-center mb0 mt10">
        Nie posiadasz jeszcze konta?{" "}
        <Link className="dark-color fw600" href="/register">
          Stwórz konto.
        </Link>
      </p>
    </form>
  );
};

export default SignIn;
