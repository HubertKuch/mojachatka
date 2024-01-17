import { ErrorMessage } from "formik";

const Error = ({ name }) => (
  <ErrorMessage name={name}>
    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
  </ErrorMessage>
);

export default Error;
