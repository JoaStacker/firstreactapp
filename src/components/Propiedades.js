import React from 'react'
import PropTypes from 'prop-types'

export default function Propiedades(props) {
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.arreglo.join(',')}</li>
                <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
                {props.elementoReact}
                <li>{props.arreglo.map(el => props.funcion(el)).join(',')}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    )
}

//Props por defect
Propiedades.defaultProps = {
    porDefecto: "Las props",
};


Propiedades.propTypes = {
    numero: PropTypes.number.isRequired
}