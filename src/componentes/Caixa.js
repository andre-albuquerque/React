import React from 'react';

export default function Caixa(props) {

    return(
        <>  
            <p>{props.site}</p>
            {props.children[0]}
            {props.children[1]}
            {props.children}
        </>
    );
}