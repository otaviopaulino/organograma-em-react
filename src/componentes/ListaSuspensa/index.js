import './ListaSuspensa.css'

const ListaSuspensa = ({label, itens,  valor, aoAlterado, obrigatorio = false}) => {    

    return (
        <div className="lista-suspensa" >
            <label>
                {label}
            </label>            

            <select onChange={evento => aoAlterado(evento.target.value)} value={valor} required={obrigatorio}>
                <option value={""}></option>
                {
                    itens.map(item=> {                        
                        return <option key={item}>{item}</option>
                    }
                )
                }
            </select>
        </div>
    )
}

export default ListaSuspensa