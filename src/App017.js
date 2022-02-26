import React, {useState, useEffect} from 'react';
import Pagina1 from './componentes/Pagina1';
import Pagina2 from './componentes/Pagina2';


export default function App(){

    const [pagina,setPagina]=useState(0)

    useEffect(
        ()=>{
            const url=window.location.href
            const res=url.split('?')
            setPagina(parseInt(res[1]))
        }
    )

    const LinksPaginas=(pag)=>{
        if (pag===1){
            window.open('http://localhost:3000?1', '_self')
        }else if (pag===2){
            window.open('http://localhost:3000?2', '_self')
        }
    }

    const retornarPagina=()=>{

        if(pagina===1){
            return <Pagina1/>
        }else if(pagina===2){
            return <Pagina2/>
        }else{
            return  <div>
                        <button onClick={()=>LinksPaginas(1)}>Pagina1</button>
                        <button onClick={()=>LinksPaginas(2)}>Pagina2</button>
                    </div>
        }
    }

    return(
        <>
            {retornarPagina()}
        </>
    )
}