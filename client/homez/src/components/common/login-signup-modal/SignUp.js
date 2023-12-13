import Link from "next/link";

const SignUp = () => {
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
      {/* End Email */}

      <div className="mb20">
        <label className="form-label fw600 dark-color">Hasło</label>
        <input
          type="text"
          className="form-control"
          placeholder="Wprowadź hasło"
          required
        />
      </div>
      {/* End Password */}

      <div className="d-grid mb20">
        <button className="ud-btn btn-thm" type="submit">
          Stwórz konto <i className="fal fa-arrow-right-long" />
        </button>
      </div>

      {/*
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

      */}
      <p className="dark-color text-center mb0 mt10">
        Posiadasz już konto?{" "}
        <Link className="dark-color fw600" href="/login">
          Zaloguj się
        </Link>
      </p>
    </form>
  );
};

export default SignUp;
