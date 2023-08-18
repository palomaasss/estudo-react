import { useState } from 'react';
import './App.scss';
import axios from 'axios';


export default function App() {
    const[perso, setPerso]=useState('')
    const[lista, setLista]=useState([])

    async function pesq(){
        let url = 'http://gateway.marvel.com/v1/public/characters?apikey=5a428427c562ec65c4978facdca1f9c1&ts=1&hash=661a4b15f847b7bf5902353561240cdf' + perso

        let x= await axios.get(url);
        setLista(x.data.results)

        


    }

  




  return (






    <div className="App">
     

     <div className='cabecalho'>

     <div className='c-s1'>
        <img src='/assets/images/marvel.png' alt=''/>
      </div>


      <div className='c-s2'>

        <p>Home</p>
        <p>Personagens</p>
        <p>Quadrinhos</p>
        <p>Eventos</p>
        <p>Contatos</p>
        <img src='/assets/images/user.png' alt=''/>
      </div>
     </div>


     <div className='s1'>
      <h1>Personagens da MARVEL</h1>

      <div className='s1-1'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum augue ut ligula malesuada blandit. Quisque tempor ex quis congue malesuada. Pellentesque est eros, aliquam non malesuada et, molestie ut purus.
        </p>
        <div className='input'>
          <button onClick={pesq}> <img src='/assets/images/pesq.png' alt=''/> </button>
          
          <input type='text' value={perso} onChange={e => setPerso(e.target.value)} placeholder='Nome do personagem'/> 
        </div>
        
      </div>

     </div>
      

    
          
    
   



    <div className='scroll'>


      {lista.map(item =>
        <tr><td><img src={item.results.thumbnail.path.extension} alt=''/></td></tr>
        )}

            
            
    
  



    </div>


    </div>
  )}

