import React, {Component} from 'react';

export default class Padre extends Component {
    state = {
        contador: 0,
    };

    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    render(){
        return (
            <>
                <h2>Comunicacion entre Componentes</h2>
                <b>{this.state.contador}</b>
                <Hijo mensaje="Mensaje para el hijo 1" incrementarContador={this.incrementarContador}/>
                <Hijo mensaje="Mensaje para el hijo 2"/>
            </>
        )
    }
}

function Hijo(props){
    return (
        <>
            <h2>{props.mensaje}</h2>
            <button onClick={props.incrementarContador}>Incrementar Padre</button>
        </>
    )
}

