import React,{useState} from 'react';

export default function App(){

    const [valorTela,setValorTela]=useState('')
    const [resultado,setResultado]=useState(0)
    const [acumulador,setAcumulador]=useState(0)
    const [operado,setOperado]=useState(false)
    const [cont, setCont] = useState(0)


    // Componentes

    const tela=(valor,res)=>{
        return(
            <div style={cssTela}>
                <span style={cssTelaOp}>{valor}</span>
                <span style={cssTelaRes}>{res}</span>
            </div>
        )
    }

    const Btn=(label,onClick)=>{     
        return(
            <button style={cssBtn} onClick={onClick}>{label}</button>
        )        
    }
    
    
    // Funções

    const oper=(s)=>{

        if ((s=='+' || s=='-' || s=='*' || s=='/' || s=='.' || s=='(' || s==')') && cont == 0) {
    
            addDigito(s)
        
            setCont(1)
    
            return
    
        }else if ((s==0 || s==1 || s==2 || s==3 || s==4 || s==5 ||s==6 || s==7 || s==8 || s==9) || cont == 0){

            addDigito(s)
        
            setCont(0)
    
            return
            
        }else{    

            return
    
        }
    
      }


    const addDigito=(d)=>{
        if((d=='+' || d=='-' || d=='*' || d=='/') && operado){
            console.log("+-*/")
            setOperado(false)
            setValorTela(resultado+d)  
            setCont(0)
            return
        }
    
        if(operado){
            setValorTela(d)
            setOperado(false)
            setCont(0)
            return
        }   

        const valorDigitadoTela=valorTela+d
        setValorTela(valorDigitadoTela)
        console.log(valorDigitadoTela)
    }
    

    const limparMemoria=()=>{
        setOperado(false)
        setValorTela('')
        setResultado(0)
        setAcumulador(0)
        setCont(0)
        return
    }    

    const Operacao=(oper)=>{
        if(oper=='bs'){
            let vtela=valorTela
            vtela=vtela.substring(0,(vtela.length-1))
            setValorTela(vtela)
            setOperado(false)
            setCont(0)            
            return
        }
        try{
            const r=eval(valorTela)  // cálculo
            setAcumulador(r)
            setResultado(r)
            setOperado(true)
            setCont(0)

        }catch{
            setResultado('Syntax Error')
        }
    }

    // Estilos

    const cssConteiner={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        width:300,
        border: '1px solid #000',
        margin: 'auto'
    }

    const cssBotoes={
        flexDirection:'row',
        flexWrap:'wrap'
    }

    const cssTela={
        display:'flex',
        paddingLeft:20,
        paddingRigth:20,
        justifyContent:'center',
        alignItens:'rigth',
        backgroundColor:'#444',
        flexDirection:'column',
        width:260,
        margin: 10,
    }

    const cssTelaOp={
        fontSize:25,
        color:'#fff',
        heigth:20,
        textalign:'right',
    }

    const cssTelaRes={
        fontSize:50,
        color:'#fff',
        textalign:'right',
    }

    const cssBtn={
        fontSize:30,
        heigth:75,
        width:75,
        padding:20,
        backgroundcolor:'#fff',
        color:'#000',
        borderColor:'#000',
        textAlign:'center',
        outline:'none',
    }

    return(
        <div style={cssConteiner}>
            <h2>Caluladora simples</h2>
            {tela(valorTela, resultado)}
            <div style={cssBotoes}>
                {Btn('AC', ()=>limparMemoria())}
                {Btn('(', (()=>addDigito('('), ()=>oper('(')))}
                {Btn(')', (()=>addDigito(')'), ()=>oper(')')))}
                {Btn('/', (()=>addDigito('/'), ()=>oper('/')))}
                {Btn('7', (()=>addDigito('7'), ()=>oper('7')))}
                {Btn('8', (()=>addDigito('8'), ()=>oper('8')))}
                {Btn('9', (()=>addDigito('9'), ()=>oper('9')))}
                {Btn('*', (()=>addDigito('*'), ()=>oper('*')))}
                {Btn('4', (()=>addDigito('4'), ()=>oper('4')))}
                {Btn('5', (()=>addDigito('5'), ()=>oper('5')))}
                {Btn('6', (()=>addDigito('6'), ()=>oper('6')))}
                {Btn('-', (()=>addDigito('-'), ()=>oper('-')))}
                {Btn('1', (()=>addDigito('1'), ()=>oper('2')))}
                {Btn('2', (()=>addDigito('2'), ()=>oper('2')))}
                {Btn('3', (()=>addDigito('3'), ()=>oper('3')))}
                {Btn('+', (()=>addDigito('+'), ()=>oper('+')))}
                {Btn('0', (()=>addDigito('0'), ()=>oper('0')))}
                {Btn('.', (()=>addDigito('.'), ()=>oper('.')))}
                {Btn('<', ()=>Operacao('bs'))}
                {Btn('=', ()=>Operacao('='))}
            </div>
        </div>
    )
}