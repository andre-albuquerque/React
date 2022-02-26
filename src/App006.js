import React, {useState} from 'react';

export default function App(){
    
    const [cor, setColor]=useState(1)

    const vermelho = {color:'#f00'}
    const verde = {color:'#0f0'}
    const azul = {color:'#00f'}

    const retornaCor=(c)=>{
        if (c==1){
            return vermelho
        }else if (c==2){
            return verde
        }else{
            return azul
        }
    }

    const mudaCor = ()=>{
        setColor(cor+1)
        if (cor > 2){
            setColor(1)
        }
    }

    /*const intervalo = 1000;

    setInterval(mudaCor, intervalo);*/

    return(
        <>
            <h1 style={retornaCor(cor)}>Renderização condicional parte 2</h1>
            <button onClick={()=>mudaCor()}>Muda cor</button>
        </>
    )
}