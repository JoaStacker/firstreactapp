import React, {Component} from 'react';
import ClickNHold from 'react-click-n-hold';



//Manejo de Eventos en ES6
export class EventosES6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
            loop: null
        }

        this.restar = this.restar.bind(this)
        this.sumar = this.sumar.bind(this)

        this.end = this.end.bind(this)
        this.holdSum = this.holdSum.bind(this)
        this.holdRes = this.holdRes.bind(this)

    }
    
    sumar(e){
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar(e){
        this.setState({
            contador: this.state.contador - 1
        })
    }

    holdSum(e, enough){
        this.state.loop = setInterval(this.sumar, 100)
        console.log(enough ? 'Click released after enough time': 'Click released too soon');
    }

    holdRes(e, enough){
        this.state.loop = setInterval(this.restar, 100)
        console.log(enough ? 'Click released after enough time': 'Click released too soon');
    }

    end(e){
        console.log("END")
        clearInterval(this.state.loop)
    }

    render(){
        return <div>
            <h2>Eventos en Componentes de Clase ES6</h2>
            <nav>
            <ClickNHold 
				time={0.5} // Time to keep pressing. Default is 2
				onStart={this.sumar} // Start callback
				onClickNHold={this.holdSum} //Timeout callback
				onEnd={this.end} >
					<button>+</button>
			</ClickNHold>
            <ClickNHold 
				time={0.5} // Time to keep pressing. Default is 2
				onStart={this.restar} // Start callback
				onClickNHold={this.holdRes} //Timeout callback
				onEnd={this.end} >
					<button>-</button>
			</ClickNHold>
            </nav>
            <h3>{this.state.contador}</h3>
        </div>
    }
}



//Manejo de Eventos en ES7
export class EventosES7 extends Component {
    state = {
        contador: 0,
        loop: null
    }

    sumar = (e) => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar = (e) => {
        this.setState({
            contador: this.state.contador - 1
        })
    }

    holdSum = (e, enough) => {
        this.state.loop = setInterval(this.sumar, 100)
        console.log(enough ? 'Click released after enough time': 'Click released too soon');
    }

    holdRes = (e, enough) => { 
        this.state.loop = setInterval(this.restar, 100)
        console.log(enough ? 'Click released after enough time': 'Click released too soon');
    }

    end = (e) => {
        console.log("END")
        clearInterval(this.state.loop)
    }

    render(){
        return <div>
            <h2>Eventos en Componentes de Clase ES7</h2>
            <nav>
            <ClickNHold 
				time={0.5} // Time to keep pressing. Default is 2
				onStart={this.sumar} // Start callback
				onClickNHold={this.holdSum} //Timeout callback
				onEnd={this.end} >
					<button>+</button>
			</ClickNHold>
            <ClickNHold 
				time={0.5} // Time to keep pressing. Default is 2
				onStart={this.restar} // Start callback
				onClickNHold={this.holdRes} //Timeout callback
				onEnd={this.end} >
					<button>-</button>
			</ClickNHold>
            </nav>
            <h3>{this.state.contador}</h3>
        </div>
    }
}



const Boton = ({myOnClick}) => <button onClick={myOnClick}> Componente boton </button>


//Mas acerca de eventos 
export class MasSobreEventos extends Component {

    handleClick = (e, mensaje) => {
        console.log("Evento sintetico React", e)
        console.log("Evento nativo", e.nativeEvent)
        console.log("Elemento target", e.target)
        console.log("Elemento del evento nativo", e.nativeEvent.target)
        console.log(mensaje)
    }

    render() {
        return <div>
            <h2>Mas sobre eventos</h2>
            <button onClick={(e) => this.handleClick(e, "Hola pasando un parametro")}>Saludar</button>

            {/* Evento personalizado */}
            <Boton myOnClick={(e) => this.handleClick(e, "Hola pasando un parametro con evento personalizado")}/>
        </div>
    }
}