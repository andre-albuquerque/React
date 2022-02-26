import React, {useState} from 'react';

export default function App() {

    const [log, setLog]=useState(false)

    const msglogin=()=>{
        return 'Usuário logado.'
    }

    const msglogoff=()=>{
        return 'Favor realize o login'
    }

    const cumprimento=()=>{
        const hora=new Date().getHours()
        if (hora >=0 && hora < 13){
            return <p>Bom dia</p>
        }else if (hora >=13 && hora < 18){
            return <p>Boa tarde</p>
        }else {
            return <p>Boa noite</p>
        }            
    }

    return(
        <>
            <h1>Renderização condicional</h1>
            {cumprimento()}
            <p>{log?msglogin():msglogoff()}</p>
            <button onClick={()=>setLog(!log)}>{log?'Logoff':'Login'}</button>
        </>
    )
}