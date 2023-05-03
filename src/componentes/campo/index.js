import { useState } from "react"
import "./campo.css"

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    //destructuracion
    const { type = "text" } = props



    const manejarcambio = (e) =>{
        props.actualizarValor(e.target.value)
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificado} 
        required={props.required}
         value={props.valor}
         onChange={manejarcambio}
         type={type}
         
         />

    </div>
}

export default Campo