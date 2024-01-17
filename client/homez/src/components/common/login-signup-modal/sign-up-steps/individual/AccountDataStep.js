import { useState } from "react";
import EmailValidator from "email-validator";

export default function AccountData({ register }) {
  const [err, setErr] = useState("");

  return (
    <div>
      <div>
        <label htmlFor="firstName">Imie</label>
        <input
          {...register("firstName", { required: true })}
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="lastName">Nazwisko</label>
        <input
          {...register("lastName", { required: true })}
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="telephone">Numer telefonu</label>
        <input
          {...register("telephone", { required: true })}
          className="form-control"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        {err ? <p className="error">{err}</p> : ""}
        <input
          onInput={(val) => {
            const isValid = EmailValidator.validate(val.target.value);

            setErr(!isValid ? "Niepoprawny email" : "");
          }}
          {...register("email", { required: true })}
          className="form-control"
        />
      </div>
    </div>
  );
}
