import { useState } from "react";

export default function PasswordDataStep({ register }) {
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  return (
    <div>
      <div>
        <label htmlFor="password">Haslo</label>
        <input
          onInput={(el) => setPass(el.target.value)}
          {...register("password", { required: true })}
          className="form-control"
          type={"password"}
        />
      </div>
      <div>
        <label htmlFor="passwordRepeat">Powtorz haslo</label>
        {err ? <p className="error">{err}</p> : ""}
        <input
          onInput={(el) => {
            const repeatedPass = el.target.value;

            setErr(pass === repeatedPass ? "" : "Hasla nie sa identyczne");
          }}
          {...register("passwordRepeat", { required: true })}
          className="form-control"
          type={"password"}
        />
      </div>
    </div>
  );
}
