import '../TotalMoney/totalMoneyStyle.css'

function TotalMoney ({listTransactions}){

    const valorInicial = 0;
    const mostraPreco = listTransactions.reduce((acumulador, valorAtual) => {
    return (acumulador + valorAtual.value)
    }, valorInicial)

    return(
        <div className="containerTotalMoney">
            <div className='containerConta'>
                <p>Valor Total:</p>
            <span>O valor se refere ao saldo</span>
            </div>
            <div className='valoresConta'> 
            $ {mostraPreco}
            </div>
        </div>
    )
}

export default TotalMoney