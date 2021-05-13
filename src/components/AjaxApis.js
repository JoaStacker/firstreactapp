import React, { Component } from 'react'


function Pokemons(props){
    return (
        <figure>
            <img src={props.avatar} alt={props.name}/>
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}


export default class AjaxApis extends Component {
    state = {
        pokemons: []
    }

    componentDidMount = async () => {
        let url = "https://pokeapi.co/api/v2/pokemon"
        try{
            const data = await fetch(url)
            const json = await data.json()
            // console.log(json)
            json.results.forEach(el => {
                fetch(el.url)
                    .then(res => res.json())
                    .then(json => {
                        let pokemon = {
                            id: json.id,
                            name: json.name,
                            avatar: json.sprites.front_default
                        }

                        let pokemons = [...this.state.pokemons, pokemon]
                        this.setState({pokemons})

                        // console.log(json)
                    })
            })
        }catch(err){
            // console.log(err)
        }
    }

    render() {
        return(
            <>
                <h2>Peticiones asincronas en un componente clase</h2>
                {this.state.pokemons.length === 0 
                    ? <h3>Cargando...</h3> 
                    : this.state.pokemons.map(el => <Pokemons key={el.id} name={el.name} avatar={el.avatar}/>)
                }
            </>
        )
    }
}

