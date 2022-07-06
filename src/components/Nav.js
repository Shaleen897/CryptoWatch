import React from 'react'
import { GiTwoCoins } from 'react-icons/gi';
import {  Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="w-full py-4 h-[60px]  ">
      <Link to='/'>
        <h2 className='text-white text-center text-3xl font-bold flex justify-center items-center'> <span className='text-indigo-600 pr-2'> <GiTwoCoins /> </span> Coins <span className='text-indigo-600 pl-2'> Watch</span> </h2>
      </Link>
    </div>
  )
}

export default Nav;