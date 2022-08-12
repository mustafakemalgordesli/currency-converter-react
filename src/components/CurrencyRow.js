import { useEffect, useState } from "react";
import { useGlobal } from "../context/GlobalContext";
import Select from "react-select";
function CurrencyRow({ currency, setCurrency, text }) {
  const { symbols } = useGlobal();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    Object.keys(symbols).map((element) => {
      const value = element;
      const label = element + " - " + symbols[element];
      setOptions((s) => [...s, { value, label }]);
      return "";
    });
  }, [symbols]);
  return (
    <div className="mb-3 ps-3 pe-3">
      <label className="form-label fs-5">{text}</label>
      <br />
      <Select options={options} onChange={(e) => setCurrency(e.value)} />
    </div>
  );
}

export default CurrencyRow;
