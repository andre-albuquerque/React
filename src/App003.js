import React, {useState} from 'react';
import Led from './componentes/Led'

export default function App() {

    const [ligado, setLigado] = useState(false)

    const cancelar=(obj)=>{
        return obj.preventDefault()
    }

    return (
        <>
            <h1>Eventos em React</h1>
            <Led ligado={ligado} setLigado={setLigado}/>
            <hr/>
            <a href='http://youtube.com.br' 
            target='_blank' 
            onClick={(e)=>cancelar(e)}
            >Youtube Brasil
            </a>
        </>
    )
}