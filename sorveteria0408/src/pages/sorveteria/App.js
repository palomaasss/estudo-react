import { useState } from 'react';
import './App.scss';
import Tabela from '../../components/tabela';
import Adicionar from '../../components/tabela';



function App() {
    const[ nome, setNome]= useState([{nome: ''}])
    const[ valor,setValor]= useState([{valor: ''}])

  
    const AdicionarNome = (nomes) =>{
      let x= [...nome, nomes]
      setNome(x)
    }
    const AdicionarValores = (valores) =>{
      let x= [...valor, valores]
      setNome(x)
    }

    
    


  return (
    <div className="App">
        <div className='cabecalho'>

            <img src='/assets/images/logo.png' alt=''/>

            <h2>Portifolio.me</h2>

        </div>
        <div className='princ'>
          <div className='sorvetes'>
           <div className='up'>
           
             <h1>Sorveteria</h1>
          </div>

        <div className='novo'>
            <h1>Novo item</h1>

          <div className='inputs'>
              
          </div>

        </div>

        <div className='total'>
          <h3> Lista de compras</h3>
          <h5> Total: R$ </h5>
        </div>

        <div className='lista'>
          <Adicionar nome={nome}/>
        </div>
      </div>
        </div>
        

    </div>
  );
}

export default App;
