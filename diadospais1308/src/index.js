import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/home';
import Pegadinha from './pages/pegadinha';
import Real from './pages/real';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path= '/' element={ <App/> }/>
        <Route path= '/pegadinha' element={ <Pegadinha/> }/>
        <Route path= '/real' element={ <Real/> }/>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


