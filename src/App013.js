import React, {useState} from 'react';

export default function App() {

    const [nome,setNome]=useState()

    const armazenar=(chave,valor)=>{
        localStorage.setItem(chave,valor)
    }
    const consultar=(chave)=>{
        alert(localStorage.getItem(chave))
    }
    const apagar=(chave)=>{
        localStorage.removeItem(chave)
    }

    return (
        <>  
            <br/>
            <label>Digite um nome: </label><br/>
            <input type='text' value={nome} onChange={(e)=>setNome(e.target.value)}></input>
            <br></br>
            <br></br>
            <button onClick={()=>armazenar('ls_nome',nome)}>Gravar nome</button>
            <button onClick={()=>consultar('ls_nome')}>Ver nome</button>
            <button onClick={()=>apagar('ls_nome')}>Remover nome</button>
        </>
    );
}