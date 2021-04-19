import React, {Component} from 'react';

function EstadoAHijo (props) {
    return (
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    )
}



export default class Estado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        }
        
        this.resetTimer = () => {
            this.setState({
                contador: 0
            })
        }

        // setInterval(() => {
        //     this.setState({
        //         contador: this.state.contador + 1
        //     })
        // }, 1000)
        
    }
    

    render(){
        return <div>
            <h2>El State</h2>
            <ul>
                <li>{this.state.contador}</li>
                <li><button onClick={this.resetTimer}>Reset</button></li>
                <EstadoAHijo contadorHijo={this.state.contador}/>
            </ul>
        </div>
    }
}