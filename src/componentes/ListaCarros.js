import React from 'react'
import axios from 'axios'

export default class ListaCarros extends React.Component{
           
    state={
        carros:[]
    }
        
    componentDidMount(){
        axios.get('https://exemplo1.andrealbuquerq4.repl.co/').then(res=>{
                this.setState({carros:res.data})
            })
    }

    
    render(){   
        return(
            <div>
                <h1>Consumindo API utilizando componente de classe</h1>
                {this.state.carros.map(
                    carro=> <div key={carro.id}>{carro.marca} - {carro.modelo}</div>
                )}
            </div>  

            
        )
    }
}