import React, {useState} from 'react'

function Formularios() {
    const [form, setForm] = useState({})
    const obj = {
        id: 4,
        name: 'George'
    }
    const arr = [4, 'George']
    const set = new Set([])
    set.add("culo")

    console.log({...obj})
    console.log({...arr})
    console.log(set)
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleChecked = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Form submited successfully')
    }

    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input 
                    type="search" 
                    id="nombre" 
                    name="nombre" 
                    value={form.nombre}
                    onChange={handleChange}
                />
                <p>Elige tu Sabor JS favorito</p>
                <label htmlFor="vanilla">
                <input type="radio" id="vanilla" name="sabor" value="vanilla" onChange={handleChange} defaultChecked/>Vanilla
                </label>
                <label htmlFor="react">
                <input type="radio" id="react" name="sabor" value="react" onChange={handleChange}/>React
                </label>
                <label htmlFor="angular">
                <input type="radio" id="angular" name="sabor" value="angular" onChange={handleChange}/>Angular
                </label>
                <label htmlFor="vue">
                <input type="radio" id="vue" name="sabor" value="vue" onChange={handleChange}/>Vue
                </label>
                <p>Elige tu lenguaje de programacion favorito</p>
                <select name="lenguaje" onChange={handleChange} defaultChecked=''>
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">Go</option>
                    <option value="ruby">Ruby</option>
                </select>
                <br />
                <label htmlFor="terminos">
                    <input type="checkbox" id="terminos" name="terminos" onChange={handleChecked}/>Acepto los terminos y condiciones
                </label>
                <br />
                <input type="submit"/>
            </form>
        </>
    )
}

export default Formularios
