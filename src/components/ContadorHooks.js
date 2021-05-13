import React, { useState } from 'react';


//componente funcional con el uso de hooks para poder usar el estado
export default function ContadorHooks(props){
    const [contador, setContador] = useState(0);

    const sumar = () => setContador(contador + 1)

    const restar = () => setContador(contador - 1)

    return (
        <>
            <h2>Contador con Hooks - useState</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <h3>{contador}</h3>
            <h3>Contador de {props.titulo}</h3>
            <h3>Maxima cantidad de clicks: {props.max}</h3>
        </>
    )
}


//propiedades por defecto
ContadorHooks.defaultProps = {
    titulo: 'clicks',
    max: 100
}
