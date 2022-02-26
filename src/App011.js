import React from 'react';
import Caixa from './componentes/Caixa';
import Nome from './componentes/Nome';

export default function App() {

    return(
        <>
            <Caixa site='https://www.google.com.br'> 
                <h1>Curso de React</h1>
                <Nome/>
            </Caixa>
        </>
    );
}