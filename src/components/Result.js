import { useState, useEffect } from "react";
import { useGlobal } from "../context/GlobalContext";
function Result() {
  const { result, toCurrency } = useGlobal();

  const [show, setShow] = useState(false);

  useEffect(() => {
    result > 0 ? setShow(true) : setShow(false);
  }, [result]);
  return (
    <div className="fs-4 text-center">
      {show ? (
        <div>
          Result : {result} {toCurrency}
        </div>
      ) : null}
    </div>
  );
}

export default Result;
