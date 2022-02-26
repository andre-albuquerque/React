import React, {useState} from 'react';

const carros = [
    {categoria:'Sport', preço:'110000', modelo:'Golf GTI'},
    {categoria:'Sport', preço:'120000', modelo:'Camaro'},
    {categoria:'SUV', preço:'85000', modelo:'HRV'},
    {categoria:'Utilitario', preço:'125000', modelo:'Hilux'},
    {categoria:'Utilitario', preço:'90000', modelo:'Ranger'},
]

const linhas=(cat)=>{        
    const li=[]
    carros.forEach(
        (carro)=>{
            if(carro.categoria.toUpperCase()===cat.toUpperCase() || cat.toUpperCase()=== ''){
                li.push(
                    <tr>
                        <td>{carro.categoria}</td>
                        <td>{carro.preço}</td>
                        <td>{carro.modelo}</td>
                    </tr>
                ) 
            }
        }
    )
    return li
}

const pesCategoria=(cat, scate)=>{
    return(
        <div>
            <label>Digite uma categoria: </label>
            <input type='text' value={cat} onChange={(e)=>scate(e.target.value)}/>
        </div>
    )
}

const TabelaCarros=(cat)=>{
    return(
        <table border='1' style={{borderCollapse:'collapse'}}>
            <thead>
                <tr>
                    <th>Categoria</th><th>Preço</th><th>Modelo</th>
                </tr>
            </thead>
            <tbody>
                {linhas(cat)}
            </tbody>
        </table>
    )
}

export default function App(){

    const [categoria, setCategoria]=useState('')

    return(
        <>
            {pesCategoria(categoria, setCategoria)}
            <br/>
            {TabelaCarros(categoria)}
        </>
    )
}