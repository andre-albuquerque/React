import React from 'react';
import LedGreen from './media/led_green.png'
import LedRed from './media/led_red.png'

export default function Led(props) {
    
    return (
        <>
            <img style={{width: '100px'}} src={props.ligado?LedGreen:LedRed}></img>
            <button onClick={()=>props.setLigado(!props.ligado)}>{props.ligado?'Desligar':'Ligar'}</button>
        </>
    )
}