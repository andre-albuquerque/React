import React from 'react'

export default function Peso(props){
    return(
        <div>
            <label>
                Altura
                <input type='text' value={props.a} onChange={(e)=>{props.sa(e.target.value)}}/>
            </label>
        </div>
    )
}