import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Pg1 from './componentes/Pagina1'
import Pg2 from './componentes/Pagina2'
import Pg3 from './componentes/Pagina3'


export default function App(){
    return(
        <>
            <header>
                <Link to='/'>Home</Link>
                <Link to='/pag1'>Página 1 </Link>
                <Link to='/pag2'>Página 2</Link>
                <Link to='/pag3'>Página 3</Link>
            </header>
            <main>
                <Routes>
                    <Route path="/pag1" element={<Pg1/>}/>
                    <Route path="/pag2" element={<Pg2/>}/>
                    <Route path="/pag3" element={<Pg3/>}/>
                </Routes>
            </main>
        </>
    );
}