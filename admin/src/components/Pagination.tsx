import { useEffect, useState } from "hono/jsx";
import IntStream from "../utils/IntStream";

export default function Pagination({
  total,
  current,
}: {
  total: number;
  current: number;
}): JSX.Element {
  const [buttons, setButtons] = useState<JSX.Element[]>(
    IntStream(total).map((item, i) => (
      <button
        className={`join-item btn btn-xs ${i + 1 === current ? "btn-active" : ""}`}
      >
        {i + 1}
      </button>
    )),
  );

  useEffect(() => {
    const btns: JSX.Element[] = [];

    for (let i = 0; i < total; i++) {
      btns.push(
        <button
          className={`join-item btn btn-xs ${i + 1 === current ? "btn-active" : ""}`}
        >
          {i + 1}
        </button>,
      );
    }

    setButtons(btns);
  }, [current]);

  return <div className="join w-full justify-center mt-5">{buttons}</div>;
}
