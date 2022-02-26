import React from 'react';
import Globais from './Globais';


export default function Info(){
    return(
        <>
            <p>{'Nome: ' + Globais.nome}</p>
            <p>{'Curso: ' + Globais.curso}</p>
            <p>{'Ano: ' + Globais.ano}</p>
        </>
    )
}