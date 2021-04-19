import React, {Component} from 'react';

//Funcion expresada
const ComponenteExpresada = props => <h2>{props.msg}</h2>


//Funcion declarada
function ComponenteDeclarada(props) {
    return (
        <h2>{props.msg}</h2>
    )
}


//Clase
class ComponenteClase extends Component {
    render(){
        return <h2>{this.props.msg}</h2>
    }
}

export  {ComponenteClase, ComponenteDeclarada, ComponenteExpresada};