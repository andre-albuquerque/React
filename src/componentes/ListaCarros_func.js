import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function ListaCarros(){

    const [carros,setCarros]=useState([])
           
    useEffect(()=>{ axios.get('https://exemplo1.andrealbuquerq4.repl.co/').then(res=>{
            const dadosCarros=res.data
            setCarros(dadosCarros)
        })

        }
    )
    
    return(
        <div>
            <h1>Consumindo API utilizando componente funcional</h1>
            {carros.map(
                carro => <div key={carro.id}>{carro.marca} - {carro.modelo}</div>
            )}
        </div>  
    )    
}