import React, {useState} from 'react';

export default function App() {

    const [nome, setNome]=useState('Digite seu nome')
    const [carro, setCarro]=useState('HRV')

    return(
        <>
            <h1>Manipulação de formulário</h1>
            <label>Digite seu nome: </label>
            <input 
            type='text' 
            name='fnome'
            value={nome}
            onChange={(e)=>setNome(e.target.value)}
            />
            <p>Nome digitado: {nome}</p>
            <label>Selecione um carro: </label>
            <select value={carro} onChange={(e)=>setCarro(e.target.value)}>
                <option value='HRV'>HRV</option>
                <option value='Golf'>Golf</option>
                <option value='Cruze'>Cruze</option>
                <option value='Argo'>Argo</option>
            </select>
            <p>Carro selecionado: {carro}</p>
        </>
    );
}