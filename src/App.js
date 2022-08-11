import "./App.css";
import GlobalProvider from "./context/GlobalContext";
import CurrencyForm from "./layouts/CurrencyForm";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <div
          className="App-box container border rounded-4 mt-5"
          style={{ maxWidth: 720 }}
        >
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10 fs-3 border-bottom text-center p-2">
              Currency Converter
            </div>
            <div className="col-1"></div>
          </div>
          <div className="ps-5 pe-5">
            <CurrencyForm />
          </div>
          <div className="ps-5 pe-5 mb-2">
            <Result />
          </div>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
