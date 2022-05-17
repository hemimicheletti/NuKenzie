import { useState } from 'react'
import '../Form/formStyle.css'

function Form({listTransactions, setListTransactions}){
    const [description, setDescription] = useState("")
    const [type, setType] = useState("entrada")
    const [value, setValue] = useState (0)
    

    const handleSubmit = (event) => {
        event.preventDefault();         
            const novoItem = {
                description: description,
                type: type,
                value: parseInt(value),
            }

            setListTransactions([...listTransactions, novoItem])           
    };

    return(
        <div className="containerForm">
            <form action="text" onSubmit={handleSubmit}>

                <div className='containerDescricao'>
                    <p>Descrição</p>
                <input className='inputDescricao' type="text" name="descricao" id="descricao" placeholder='Digite aqui sua descrição' value={description} onChange={(event) => setDescription(event.target.value)}/>
                <span>Ex: Compra de roupas</span>
                </div>
                <div className='valores'>
                <div className='containerValor'>
                    <p>Valor</p>
                <input  type="text" name="valor" id="valor"  value={value} onChange={(event) => setValue(event.target.value)}/>
                </div>
                <div className='containerEntradas'>
                    <p>Tipo de Valor</p>
                <select name="tipo" id="tipo" value={type} onChange={(event) => setType(event.target.value)}>
                    <option value="entrada"> Entrada </option>
                    <option value="saída"> Saída </option>
                </select>
                </div>
                </div>
                <button className="botaoValor" type='submit'> Inserir Valor</button>
            </form>
        </div>
    )
}

export default Form;