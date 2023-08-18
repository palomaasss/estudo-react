
import { Link } from 'react-router-dom';
import './index.scss';


export default function App() {
  






  return (
    <div className="App">
    


    <div className='cabecalho'>
      <img src='/assets/images/oi.jpg' alt=''/>

      
      
      </div>



      <div className='s1'> <h2> Escolha um e receba uma surpresa</h2>

        <div className='presente'>
        <Link to='./pegadinha' className='links'> <img src='/assets/images/presente.jpg' alt='' /> </Link>
        <Link to='./pegadinha' className='links'> <img src='/assets/images/presente.jpg' alt='' /> </Link>
        <Link to='./pegadinha' className='links'> <img src='/assets/images/presente.jpg' alt='' /> </Link>
        <Link to='./real' className='links'> <img src='/assets/images/presente.jpg' alt='' /> </Link>
        <Link to='./pegadinha' className='links'> <img src='/assets/images/presente.jpg' alt='' /> </Link>
        <Link to='./pegadinha' className='links'> <img src='/assets/images/presente.jpg' alt='' /> </Link>

        </div>
          </div>

      </div>



    

   
  
  );
}
