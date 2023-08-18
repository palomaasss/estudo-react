import { useState } from 'react';
import './App.scss';

function App() {

  const[valor, setValor] = useState (0)
  const[nParcela, setNParcela] = useState (0)
  const[nJuros, setNJuros] = useState (0)
  const[parcela, setParcela] = useState (0)
  const[juros, setJuros] = useState (0)


  function CalcularParcela(){
      let x= valor /nParcela
      setParcela(x)


      
      let y= valor *( 1 + nJuros * nParcela ) 
      setJuros(y)

  }









  return (

    <div className='pag-simulador'>
      <div className='cabecalho'>

          <img src='/assets/images/logo.png' alt=''/>

        <h2>Portifolio.me</h2>
      </div>

      <div className='pag-center'>
        <h1>Simulador de Compra de veículo</h1>

          <div className='center'>
            <div className='img'> <img src='/assets/images/carro.png' alt=''/> </div>
            
            <div className='simulador'>

              <p> Valor Total</p>
              <input type='text' value={valor} onChange={e => setValor(e.target.value)}/>

              <div className='lado'>

              <p> Parcela</p>
              <input type='text' value={nParcela} onChange={e => setNParcela(e.target.value)}/>

              <p> Juros mensal(%)</p>
              <input type='text' value={nJuros} onChange={e => setNJuros(e.target.value)}/>


              </div>
              <button onClick={CalcularParcela}>Calcular</button>

              <p>  Valor das parcelas:  {parcela}</p>
              <p> Valor total: {juros}</p>
            </div>
          </div>
      </div>
    </div>

  );
}

export default App;

