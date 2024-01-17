import ConfirmModal from "@/components/customs/ConfirmModal";
import useStore from "@/store/store";
import { useEffect, useState } from "react";

export default function EndStep({ onSubmit }) {
  const data = useStore.getState().registerData;
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (ok) {
      onSubmit();
    }
  }, [ok]);

  return (
    <>
      <div>
        {Object.keys(data).map((key) => (
          <div key={key}>
            <label>{key}</label>
            <input disabled className="form-control" value={data[key]} />
          </div>
        ))}
      </div>
      <div>
        <button type="submit" className="ud-button form-control mt-5">
          Zakoncz
        </button>
      </div>
    </>
  );
}
