import { useGlobal } from "../context/GlobalContext";
function Amount() {
  const { fromCurrency, toCurrency, amount, setAmount, setResult } =
    useGlobal();

  const ApiKey = process.env.REACT_APP_API_KEY;

  const convertHandle = (e) => {
    e.target.blur();
    var myHeaders = new Headers();
    myHeaders.append("apikey", ApiKey);

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setResult(result.result.toFixed(2));
        }
      })
      .catch((error) => console.log("error", error));
    e.preventDefault();
  };

  return (
    <div className="mb-3 ps-3 pe-3 pt-3">
      <label htmlFor="amount" className="form-label fs-5">
        Amount
      </label>
      <div className="d-flex">
        <span className="bg-primary rounded p-2">{fromCurrency}</span>
        <input
          type="number"
          className="form-control"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={convertHandle}
        >
          Convert
        </button>
      </div>
    </div>
  );
}

export default Amount;
