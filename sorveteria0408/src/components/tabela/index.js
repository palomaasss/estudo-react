import './index.scss';


import { useState } from 'react';
import React from 'react';


export default function Adicionar(props){
    const[ nome, setNome] = useState('-')
    const[ valor, setValor] = useState('-')
    const[ sorvetes, setSorvetes] = useState('-')
    const[ total, setTotal] = useState(0)
    
    let item = {
         nome:nome, 
         valor:{valor} 
      }

      setSorvetes(item);

      let x = total + valor;
      setTotal(x)

    

    return(
        <div>
            <input type='text' value={nome} onChange={e => setNome(e.target.value)}/>
             <input type='text' value={valor} onChange={e => setValor(Number(e.target.value))}/>
              <button onClick={e => Adicionar(nome, valor, total)}> Adicionar</button>

    
            {sorvetes(item =>
            <div className='lista'> 
              {item.nome} ---- {item.valor}
            </div>  
          )}
        
        </div>
        

        
    )






}