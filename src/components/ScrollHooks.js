import React, { useState, useEffect} from 'react';


export default function ScrollHooks(props){
    const [scrollY, setScrollY] = useState(0);
    const [name, setName] = useState('Joaquin');

    
    useEffect( () => {
        // console.log("Moviendo el scroll");

        const detectarScroll = () => setScrollY(window.pageYOffset);


        window.addEventListener("scroll", detectarScroll);

        return () => {
            window.removeEventListener("scroll", detectarScroll);
            // console.log("Fase de Desmontaje");
        }
    }, [scrollY]);

    
    useEffect( () => {
        // console.log("Fase de Montaje")
    }, [])

    useEffect( () => {
        // console.log("Fase de Actualizacion")

        return () => {
            // console.log("Fase de Desmontaje")
        }
    })

    return (
        <>
            <h2>Hooks - useEffect y ciclo de Vida</h2>
            <p>Scroll Y del Navedador {scrollY}px</p>
        </>
    );
}