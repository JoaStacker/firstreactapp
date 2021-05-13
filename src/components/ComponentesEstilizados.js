import React from 'react';
import styled, {
    css, 
    keyframes,
    ThemeProvider, 
    createGlobalStyle
} from 'styled-components';


export default function ComponentsEstilizados() {
    //variables
    let mainColor = "#db7093",
        mainAlphaColor = "#db709380"
    
    const setTransitionTime = (time) => `all ${time} ease-in-out`;
    
    //keyframes funcion de styled-components para definir animaciones
    const fadeIn = keyframes`
        0%{
            opacity: 0;
        }

        100%{
            opacity: 1;
        }
    `

    //Styled component basic, interpolation
    const MyH3 = styled.h3`
            padding: 2rem;
            text-align: center;
            color: ${props => props.color};
            color: ${({color}) => color};
            color: ${({color}) => color || "#000"};
            background-color: ${mainColor};
            transition: ${setTransitionTime('0.5s')};
            animation: ${fadeIn} 5s ease-out;

            ${(props) => 
                props.isButton && css`
                margin: auto;
                max-width: 50%;
                border-radius: 0.25rem;
                cursor: pointer;
            `}

            &:hover{
                background-color: ${mainAlphaColor};
            }
        `; 
        

    //ThemeProvider variables para pasar como props al componente de ThemeProvider.
    const light = {
        color: "#222",
        bgColor: "#DDD"
    }

    const dark = {
        color: "#DDD",
        bgColor: "#222"
    }       

    const Box = styled.div`
        padding: 1rem;
        margin: 1rem;
        color: ${({theme}) => theme.color};
        background-color: ${({theme}) => theme.bgColor}; 
    `

    //Estilos heredados
    const BoxRounded = styled(Box)`
        border-radius: 1rem;
    `//hereda los estilos de Box pero añade los especificados.



    //Global style para todo el codigo (ideal importarlo en el index.js pero por razones del tutorial no)
    const GlobalStyle = createGlobalStyle`
        h2{
            padding: 2rem;
            background-color: #fff;
            color: #61dafd;
            text-transform: uppercase;
        }
    `

    return(
        <>
            <GlobalStyle />
            <h2>Styled Components</h2>
        
            <MyH3>Hola soy un h3 estilizado con styled-components</MyH3>
            <MyH3 color="#61daf3">HOla soy un h3 estilizado con styled-components y con props</MyH3>

            {/* Estilos filtrados con el paso de props*/}
            <MyH3 isButton>Soy un h3 estilizado como boton</MyH3>

            {/* Theme Provider */}
            <ThemeProvider theme={dark}>
                <Box >Soy una caja dark</Box>
                <BoxRounded >Soy una caja redondeda dark</BoxRounded>
            </ThemeProvider>
            <ThemeProvider theme={light}>
                <Box >Soy una caja light</Box>
            </ThemeProvider>
        </>
    )
}