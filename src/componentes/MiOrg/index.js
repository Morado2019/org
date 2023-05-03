import { useState } from "react"
import "./MiOrg.css"

const Miorg = (props) => {

    //Estado - hooks
    //useState
    //useState()
    //conts[nombreVariable, funcionActualizar]
   // console.log(props)
   // const [Mostrar, actualizarMostrar] = useState(true)
   // const manejarClik = () => {
       // console.log("Mostrar/ ocultar elemento", !Mostrar)

       // actualizarMostrar(!Mostrar)

    //}


    return <section className="orgSection">
        <h3 className="title">Mi organización </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />

    </section>
}
export default Miorg