import "../List/listStyle.css";
import Card from "../Card/card";

function List({ listTransactions }) {
  return listTransactions.length === 0 ? (
    <div className="containerList">
      <div className="containerCabeçalho">
          <h3>Resumo financeiro</h3>
          <div className="containerBotao">
            <button className="botaoTodos">Todos</button>
            <button className="botaoEntradas">Entradas</button>
            <button className="botaoDespesas">Despesas</button>
          </div>
        </div>
      <ul className="containerUl">
        <h1 className="semTransacao"> Você ainda não tem nenhuma transação</h1>
      </ul>
    </div>
  ):(
    <div className="containerList">
      <div className="containerCabeçalho">
          <h3>Resumo financeiro</h3>
          <div className="containerBotao">
            <button className="botaoTodos">Todos</button>
            <button className="botaoEntradas">Entradas</button>
            <button className="botaoDespesas">Despesas</button>
          </div>
        </div>
      <ul className="containerUl">        
        {listTransactions.map((transaction, index) => (
          <Card transaction={transaction} key={index}>
          
          </Card>
        ))}
      </ul>
    </div>
  );
}

export default List;
