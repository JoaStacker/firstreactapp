import React , {createRef, useRef} from 'react';


export default function Referencias () {
    let refMenu = useRef(),
    refMenuBtn = useRef()

    console.log(refMenu, refMenuBtn)

    const handleToggleMenu = () => {
        // const $menu = document.getElementById('menu')

        // if(e.target.textContent === 'Menu'){
        //     e.target.textConent = "Cerrar"
        //     $menu.style.display = 'block'
        // }else{
        //     e.target.textConent = "Menu"
        //     $menu.style.display = 'none'
        // }

        if(refMenuBtn.current.textContent === 'Menu'){
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "block";
        }else{
            refMenuBtn.current.textContent = "Menu";
            refMenu.current.style.display = "none";
        }
    }

    return (
        <>
            <h2>Referencias</h2>
            <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Cerrar</button>
            <nav id="menu" ref={refMenu}>
                <a href="#">Seccion 1</a><br/>
                <a href="#">Seccion 2</a><br/>
                <a href="#">Seccion 3</a><br/>
                <a href="#">Seccion 4</a><br/>
                <a href="#">Seccion 5</a><br/>
                <a href="#">Seccion 6</a>
            </nav>
        </>
    )
}