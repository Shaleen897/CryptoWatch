import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import CoinItem from './components/CoinItem';
import Pagination from './components/Pagination';

function App() {


  const [coin, setCoin] = useState([]);

 
  
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false";
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  
  return (
    <>
        <div className='text-white'>
          <Nav/>
          <Routes>
            <Route path='/' element={<Home props={coin} />} />
            <Route path='/coins/:id' element={<CoinItem />} />
          </Routes>
          
        </div>
    </>
  );
}

export default App;
