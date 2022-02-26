import React from 'react';

export default class BaseClasse extends React.Component{
    constructor(props){
        super(props)
        this.state={
            nome='André',
            curso:'React',
            ativo:true,
            idade:this.props.idadeUser
        }
        this.status = this.props.status
        let ad = this.ativarDesativar.bind(this)
    }
    ativarDesativar(){
        this.setState(
            state=>({
                ativo=!state.ativo
            })
        )
    }

    componentDidMount(){
        console.log('O componente fo criado.')
    }

    componentDidUpdate(){
        console.log('O componente foi atualizado.')
    }

    componentWillUnmount(){
        console.log('O componente foi removido.')
    }

    render(){
        return(
            <>
                <h1>Componente de classe</h1>
                <button onClick={this.ad}>Ativar Desativar</button> {/*com bind*/}
                <button onClick={()=>this.ativarDesativar}></button> {/*sem bind*/}
            </>
        )
    }

}