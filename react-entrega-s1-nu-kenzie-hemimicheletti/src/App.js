import { useState } from "react";
import "./reset.css";
import "./App.css";
import Form from "./Components/Form/form";
import TotalMoney from "./Components/TotalMoney/totalMoney";
import List from "./Components/List/list";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  
  return (
    <div className="App">
      <header>
        <div className="containerLogo">
          <img src={require('../src/Images/NuKenzie.png')} alt=""/>
        </div>
        <button className="botaoInicio">Início</button>
      </header>
      <div className="containerFormTotalList">
        <div className="formETotal">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          ></Form>
          <TotalMoney listTransactions={listTransactions}></TotalMoney>
        </div>
        <div className="divList">
          <List listTransactions={listTransactions}></List>
        </div>
      </div>
    </div>
  );
}

export default App;
