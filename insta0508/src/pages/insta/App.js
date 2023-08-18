import { useState } from 'react';
import './App.scss';

function App() {

  const[ usuario, setUsuario] = useState('');
  const[ tempo, setTempo] = useState('');
  const[ avatar, setAvatar] = useState('');
  const[ descricao, setDescricao] = useState('');
  const[ post, setPost] = useState('');
  const[ curtidas, setCurtidas] = useState('');
  const[vetor, setVetor] = useState([]);


    if(curtidas > 0 && usuario != '' && avatar != '' && post != ''){
      let p = {
        nome: usuario,
        tempo: tempo,
        foto: avatar,
        descrição: descricao,
        postagem:  post,
        curtidas: curtidas
      }

      setVetor([...vetor, p])

}

  return (
    <div className="App">
      
      <div className='s1'>

        <div className='logo'> <img src='/assets/images/logo.png' alt='' /> <h2>Portifolio.me </h2></div>

        <div className='s1-1'> 
          <div className='s1-1-lado'> <img src='/assets/images/home.png' alt=''/> <p> Página inicial </p></div>
          <div className='s1-1-lado'> <img src='/assets/images/pesquisa.png' alt=''/> <p> Pesquisa </p></div>
          <div className='s1-1-lado'> <img src='/assets/images/reels.png' alt='' /> <p> Reels </p></div>
          <div className='s1-1-lado'> <img src='/assets/images/mensagens.png' alt='' /> <p> Mensagens </p></div>
          <div className='s1-1-lado'> <img src='/assets/images/coracao.png' alt='' /> <p> Notificações </p></div>
          <div className='s1-1-lado'> <img src='/assets/images/criar.png' alt=''/> <p> Criar </p></div>
        </div>

      </div>




      <div className='s2'>

        <div className='s2-novas'><h3>Novas publicações</h3></div>

        <div className='s2-stories'> 
         <img src='/assets/images/stories.png' alt=''/>
         <img src='/assets/images/stories1.png' alt=''/>
         <img src='/assets/images/stories2.png' alt=''/>
         <img src='/assets/images/stories3.png' alt=''/>
         <img src='/assets/images/stories4.png' alt=''/>
         <img src='/assets/images/stories5.png' alt=''/>
         <img src='/assets/images/stories6.png' alt=''/>
         <img src='/assets/images/stories7.png' alt=''/>
        </div>


        <div className='s2-post'>
            <div className='s2-post-1'>
                <b>Usuário:</b> <input type='text'  placeholder='ex: brunofofo'  value={usuario} onChange={e => setUsuario(e.target.value)}/>
                <b>Tempo:</b> <input type='text'  placeholder='2 sem'  value={tempo} onChange={e => setTempo(e.target.value)}/>
            </div>


            <div className='s2-post-2'>  <b>Avatar:</b> <input type='text'  placeholder='link de foto'  value={avatar} onChange={e => setAvatar(e.target.value)}/></div>

            <div className='s2-post-3'>  <b>Descrição:</b> <input type='text'  placeholder='ex: sou o bruno fofo'  value={descricao} onChange={e => setDescricao(e.target.value)}/></div>

            <div className='s2-post-4'> 
                <b>Post:</b> <input type='text'  placeholder='ex: link da foto'  value={post} onChange={e => setPost(e.target.value)}/>
                <b>Curtidas:</b> <input type='text'  placeholder='0'  value={curtidas} onChange={e => setCurtidas(Number(e.target.value))}/>
            </div>

            <div className='s2-post-5'> <button> Postar </button> </div>
        </div>

      </div>


    </div>
    );
}

export default App;
