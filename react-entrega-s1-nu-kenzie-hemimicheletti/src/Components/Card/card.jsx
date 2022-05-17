import "../Card/cardStyle.css";

function Card({ transaction }) {
  return transaction.type === "entrada" ? (
    <li className="containerValores tipoEntrada">
      <div className="containerP">
        <p className="pDescricao">{transaction.description}</p>
        <span>{transaction.type}</span>
      </div>
      <div className="containerValorProduto">
        <p className="pValor">R$ {transaction.value}</p>
        <div className="trash">
            <img src={require('../../Images/trash.png')} alt=""/>
        </div> 
      </div>
    </li>
  ) : (
    <li className="containerValores tipoSaida">
      <div className="containerP">
        <p className="pDescricao">{transaction.description}</p>
        <span>{transaction.type}</span>
      </div>
      <div className="containerValorProduto">
        <p className="pValor">R$ {transaction.value}</p>
        <div className="trash">
            <img src={require('../../Images/trash.png')} alt=""/>
        </div>        
      </div>
    </li>
  );
}

export default Card;
