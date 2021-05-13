import React, {useState, useEffect} from 'react';
import {useFetch} from '../hooks/useFetch'


function Pokemon(props){
    return (
        <figure className="pokemon-card">
            <img className="pokemon-img-responsive" src={props.avatar} alt={props.name}/>
            <figcaption>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</figcaption>
            <a href="#/pokemon" target="_blank" data-poke={props} onClick={() => localStorage.setItem('pokemonInfo', JSON.stringify(props))}>Mas informacion</a>
        </figure>
    )
}

export function AjaxHooks(){
    const [result, setResult] = useState(null)
    const [collection, setCollection] = useState([])
    const [pushedPokemon, setPushedPokemon] = useState(null)
    const [nextPage, setNextPage] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [currentUrl, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')

    let {data, isPending, error} = useFetch(currentUrl) 


    useEffect(() => {
        if(!pushedPokemon) return
        setCollection([...collection, pushedPokemon])
    }, [pushedPokemon])

    useEffect( () => {
        if(!result) return

        const getPokemon = async (results) => {
            results.forEach(async el => {
                const poke = await fetch(el.url) 
                const json = await poke.json()
                // console.log(json)

                let newPokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                }
                setPushedPokemon(newPokemon)
            })
        }

        getPokemon(result.results)
    }, [result])


    useEffect(() => {
        if(!isPending && !result) {
            // console.log(data, isPending, error)
            setResult(data)
            setNextPage(data.next)
            setPrevPage(data.previous)
        }
    })

    return (
        <>
            <h2>Peticiones ascincronas con Hooks (mejorado por mi)</h2>
            <div className="pokemon-list">
                {collection === null ? (
                    <h3>Cargando...</h3>
                ) : (
                    collection.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar} more={el.more}/>)
                )}
            </div>
            <button onClick={() => setUrl(prevPage)}>prev</button>
            <button onClick={() => setUrl(nextPage)}>next</button>
        </>
    )
}



