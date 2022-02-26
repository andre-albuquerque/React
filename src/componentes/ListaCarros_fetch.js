import React, {useState, useEffect} from 'react'

export default function ListaCarros(){

    const [carros,setCarros]=useState([])
           
    useEffect(()=>{ 
        fetch('https://exemplo1.andrealbuquerq4.repl.co').then(res=>res.json())
            .then(
                (res)=>{setCarros(res)}
            )       
        }
    )
    
    return(
        <div>
            <h1>Consumindo API utilizando fetch</h1>
            {carros.map(
                carro => <div key={carro.id}>{carro.marca} - {carro.modelo}</div>
            )}
        </div>  
    )    
}