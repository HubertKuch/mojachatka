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
          <div>
            <label>{key}</label>
            <input disabled className="form-control" value={data[key]} />
          </div>
        ))}
      </div>
      <div>
        <ConfirmModal
          setState={setOk}
          title={"Czy wszystkie dane sie zgadzaja?"}
          trigger={<button type="button">Zakoncz</button>}
        />
      </div>
    </>
  );
}
