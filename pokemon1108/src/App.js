import axios from 'axios';
import './App.scss';



function App() {
  async function BuscarPokemon(){
    let url = 'https://pokeapi.co/api/v2/pokemon/';

    let response = await axios.get(url);

    let listaPokemons=[];

    for(let item of response.data.results){
      let pokemonResp = await axios.get(item.url);

      let imagem = pokemonResp.data.sprites.other['official-artwork'].front_default;

      let tipos =''
      for(let t of pokemonResp.data.types){
        tipos= tipos+ t.type.name + ',';
      }
    }
    listaPokemons.push({
      nome:item.name,
      imagem: imagem,
      tipos: tipos
    })
 
    setPokemons[listaPokemons]
  }
  
  
  return (

    <div className="App">
      <h1>Pokemon</h1>
      <button onClick={BuscarPokemon} >encontrar pokemon</button>
      <div className='lista'>
        {pokemons.map(item =>
          <div className='card-pokemon'>
            <img src={item.imagem}/>
            <h1>{item.nome}</h1>
            <p>{item.tipos}</p>
          </div>  
          )}
      </div>
    </div>
  );
}

export default App;
