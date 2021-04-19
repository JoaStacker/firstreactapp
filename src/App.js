import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ComponenteClase, ComponenteDeclarada, ComponenteExpresada} from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Probando cursito de John mircha <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <section>
          <ComponenteClase msg="Hola soy un componente de clase" />
          <ComponenteDeclarada msg="Hola soy un componente de funcion declarada" />
          <ComponenteExpresada msg="Hola soy un componente de funcion expresada" />
          <hr />
          <Propiedades 
            cadena="Esto es una cadena"
            numero={19}
            booleano={true}
            arreglo={[1,2,3]}
            objeto={{nombre: "Joaquin", correo: "joessar99@gmail.com"}}
            funcion={(num) => num * num}
            elementoReact={<li>Esto es un elemento react</li>}
            componenteReact={<ComponenteClase msg="Soy un componente pasado como prop"/>}
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
        </section>
        </header>
      </div>
      

    </>
  );
}

export default App;
