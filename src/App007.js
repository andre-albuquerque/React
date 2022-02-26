import React from 'react';

export default function App() {

    const carros=['HRV', 'Golf', 'Focus', 'Cruze', 'Argo'];
    const listaCarros=carros.map(
        (c, i)=> 
            <li key={i}>{c}</li>
    )

    return (
        <>
            <h1>Listas com a função MAP</h1>
            <ul>{listaCarros}</ul>
        </>
    );
}