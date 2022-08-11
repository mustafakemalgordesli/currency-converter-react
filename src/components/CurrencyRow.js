import { useGlobal } from "../context/GlobalContext";
function CurrencyRow({ currency, setCurrency, text }) {
  const { symbols } = useGlobal();
  return (
    <div className="mb-3 ps-3 pe-3">
      <label className="form-label fs-5">{text}</label>
      <br />
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="text-center rounded"
        style={{ width: 566, height: 40 }}
      >
        {Object.keys(symbols).map((element) => (
          <option key={element} value={element}>
            {symbols[element]} - {element}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyRow;
