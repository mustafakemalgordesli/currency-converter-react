import { useGlobal } from "../context/GlobalContext";
import CurrencyRow from "../components/CurrencyRow";
import Amount from "../components/Amount";
function CurrencyForm() {
  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } =
    useGlobal();
  return (
    <form>
      <Amount />
      <CurrencyRow
        currency={fromCurrency}
        setCurrency={setFromCurrency}
        text="From"
      />

      <CurrencyRow
        currency={toCurrency}
        setCurrency={setToCurrency}
        text="To"
      />
    </form>
  );
}

export default CurrencyForm;
