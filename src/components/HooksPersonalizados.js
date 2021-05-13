import React, {useState, useEffect} from 'react'
import {useFetch} from '../hooks/useFetch'

export default function HooksPersonalizados() {
    let url = 'https://pokeapi.co/api/v2/pokemon'

    let {data, isPending, error} = useFetch(url)

    return(
        <>
            <h2>Hooks personalizados</h2>
            <h3>Data:
                <pre style={{whiteSpace: "pre-wrap"}}>
                    <code>{JSON.stringify(data)}</code>
                </pre> 
            </h3>
            <h3>Pending:
                <mark>{JSON.stringify(isPending)}</mark>
            </h3>
            <h3>Error:
                <mark>{JSON.stringify(error)}</mark>
            </h3>
        </>

    )
}