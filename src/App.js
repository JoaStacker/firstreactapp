import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ComponenteClase, ComponenteDeclarada, ComponenteExpresada } from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes'
import CicloVida from './components/CicloVida'
import AjaxApis from './components/AjaxApis'
import ContadorHooks from './components/ContadorHooks'
import ScrollHooks from './components/ScrollHooks'
import RelojHooks from './components/RelojKoos';
import {AjaxHooks} from './components/AjaxHooksConPokePaginacion';
import HooksPersonalizados from './components/HooksPersonalizados';
import Referencias from './components/Referencias'
import Formularios from './components/Formularios'
import Estilos from './components/Estilos'
import ComponentesEstilizados from './components/ComponentesEstilizados';


function App() {
  let {hash} = window.location
  if(!hash || hash === '#/'){
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
            <hr />
            <RenderizadoElementos />
            <hr />
            <EventosES6 />
            <hr />
            <EventosES7 />
            <hr />
            <MasSobreEventos />
            <hr />
            <ComunicacionComponentes />
            <hr />
            <CicloVida />
            <hr />
            <AjaxApis />
            <hr />
            <ContadorHooks />
            <hr />
            <ScrollHooks />
            <hr />
            <RelojHooks />
            <hr />
            <AjaxHooks />
            <hr />
            <HooksPersonalizados />
            <hr />
            <Referencias />
            <hr />
            <Formularios />
            <hr />
            <Estilos />
            <hr />
            <ComponentesEstilizados />
          </section>
          </header>
        </div>
        

      </>
    );
  }else if (hash.includes('#/pokemon')){
    const pokemon = JSON.parse(localStorage.getItem('pokemonInfo'))
    let link = document.querySelector("link[rel~='icon']");
    let title = document.querySelector("title");

    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    link.href = pokemon.avatar;
    title.innerHTML = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

    return (
      <div>
        <figure>
          <img src={pokemon.avatar} alt={pokemon.name}/>
          <figcaption>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</figcaption>
        </figure>
        <div>
          <h2>Habilidades</h2>
          <ul>
            {pokemon.more.abilities.map((el, index) => <li key={index}>{el.ability.name}</li>)}
          </ul>
          <h2>Estadisticas:</h2>
          <ul>
            {pokemon.more.stats.map((el, index) => <li key={index}>{el.stat.name}: <b>{el.base_stat}</b></li>)}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;




































