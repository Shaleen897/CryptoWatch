import React from 'react';
import { Link } from 'react-router-dom';

const Coins = ({ props }) => {


    return (
        <>

            <div className='w-full flex justify-center items-center'>
                <div className='mt-[50px] w-[80%] overflow-auto rounded-lg shadow hidden md:block' data-aos="fade-up">
                    <div className='w-full border bg-primary border-gray-700'>
                        <ul className='flex justify-between items-center w-[94%] px-2 py-4'>
                            <li>#</li>
                            <li>Coin</li>
                            <li>Price</li>
                            <li>24h</li>
                            <li>Volume</li>
                            <li>Mkt Cap</li>
                        </ul>
                    </div>
                    {props.map((coin) => {
                        return (<div >
                            <Link to={`/coins/${coin.id}`}>
                                <ul key={coin.id} className='flex justify-between items-center border border-black hover:bg-slate-500 rounded py-4 px-2 mt-3 hover:-translate-y-2 ease-in-out duration-300'>
                                    <li>{coin.market_cap_rank}</li>
                                    <li className='flex uppercase mt-4'>
                                    <img src={coin.image} className="w-[25px] mr-1" alt='Coin' />  {coin.symbol}
                                    </li>
                                    <li>${coin.current_price.toLocaleString()}</li>
                                    <li className={coin.price_change_percentage_24h <= 0 ? ('text-red-600') : ('text-green-600')}>{coin.price_change_percentage_24h.toFixed(2)}%</li>
                                    <li>{coin.total_volume.toLocaleString()}</li>
                                    <li>{coin.market_cap.toLocaleString()}</li>
                                </ul>
                            </Link>
                        </div>)
                    })}
                </div>

                <div className="mt-[50px] grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden font-bold">
                    {props.map((coin) => {
                        return (
                            <Link to={`/coins/${coin.id}`}>
                                <div data-aos="fade-up" key={coin.id} className="bg-gray-800 space-y-3 p-4 rounded-lg shadow hover:-translate-y-2 ease-in-out duration-300 hover:bg-gray-600">
                                    <div className="flex items-center space-x-10 text-sm">

                                        <div className="text-sm ">Rank: {coin.market_cap_rank}</div>

                                        <div className="text-sm flex items-center">
                                            <div className="text-sm font-medium mr-2"><img src={coin.image} className="w-[30px]" alt='Coin' /></div>
                                            <div className="text-sm uppercase">{coin.symbol}</div>
                                        </div>
                                        <div>
                                            Price:  ${coin.current_price}
                                        </div>
                                    </div>
                                    <div className="text-sm text-white">
                                        24h: {coin.price_change_percentage_24h}%
                                    </div>
                                    <div className="text-sm font-medium text-white">
                                        Volume: ${coin.total_volume}
                                    </div>
                                    <div className="text-sm font-medium text-white">
                                        MKT Cap: ${coin.market_cap}
                                    </div>
                                </div>
                            </Link>)
                    })}
                </div>
            </div>
        </>
    )
}

export default Coins;

/*

 <table className="table-auto w-full divide-y text-white divide-black font-bold">
                        <thead className="">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                >
                                    #
                                </th>

                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                >Coin
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                >Price
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                >24h
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                >Volume
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                >Mkt Cap
                                </th>
                            </tr>
                        </thead>

                        {props.map((coin) => {
                            return (
                                <Link to={`/coins/${coin.id}`}>
                                    <tbody className="cursor-pointer divide-y divide-gray-200 hover:-translate-y-2 ease-in-out duration-300 hover:bg-gray-600" key={coin.id}>
                                        <tr className="">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm ">{coin.market_cap_rank}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium "><img src={coin.image} className="w-[30px]" alt='Coin' /></div>
                                                    <div className="text-sm uppercase">{coin.symbol}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm">{coin.current_price}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm">{coin.price_change_percentage_24h}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm">{coin.total_volume}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm">{coin.market_cap}</div>
                                            </td>


                                        </tr>
                                    </tbody>
                                </Link>
                            )
                        })}
                    </table>*/