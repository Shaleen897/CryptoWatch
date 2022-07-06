import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BarChart from './BarChart';
import DOMPurify from 'dompurify';
const CoinItem = () => {

  const params = useParams();
  const [coin, setCoin] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins/${params.id}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoin(res.data)
      // console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  return (
    <>
      <div>

        <div key={coin?.id} className='mt-8 w-full flex flex-col justify-center items-center'>
          <div className='text-3xl text-center capitalize px-3 py-3 w-[80%] rounded flex justify-center items-center bg-primary'>
            <h1 className=''>{coin?.id}</h1>
          </div>

          <div className='mt-4 capitalize px-3 py-3  w-[80%] rounded flex justify-between items-center bg-primary'>
            <p className="p-2 bg-indigo-600 rounded">Rank #{coin?.market_cap_rank}</p>
            <div className="flex md:text-2xl"><img src={coin.image?.small} className="w-[30px] mr-1" alt='Coin' /> {coin.symbol}</div>
            <p className='md:text-3xl'>{coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}</p>
          </div>

          <div className='mt-4 capitalize px-3 py-3 w-[80%] rounded  hidden md:block bg-primary'>
            <table className='table-auto w-full mobile:w-full'>
              <thead>
                <tr>
                  <th scope="col" className="bg-black text-center px-6 py-3 text-xs font-medium uppercase tracking-wider">
                    1h</th>
                  <th scope="col" className="bg-black text-center px-6 py-3  text-xs font-medium uppercase tracking-wider">
                    24h</th>
                  <th scope="col" className="bg-black text-center px-6 py-3  text-xs font-medium uppercase tracking-wider">
                    7d</th>
                  <th scope="col" className="bg-black text-center px-6 py-3  text-xs font-medium uppercase tracking-wider">
                    14d</th>
                  <th scope="col" className="bg-black text-center px-6 py-3 text-xs font-medium uppercase tracking-wider">
                    30d</th>
                  <th scope="col" className="bg-black text-center px-6 py-3 text-xs font-medium uppercase tracking-wider">
                    1yr</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center px-6 py-4 whitespace-nowrap">{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">{coin.market_data?.price_change_percentage_7d_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">{coin.market_data?.price_change_percentage_14d_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">{coin.market_data?.price_change_percentage_30d_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">{coin.market_data?.price_change_percentage_1y_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>

                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 w-[80%] md:hidden font-bold">
            <div className="bg-black  space-y-3 p-4  rounded-lg shadow ">
              <div className="flex items-center justify-between text-sm">
                <div className="text-sm flex">1h: {coin.market_data?.price_change_percentage_1h_in_currency ? <p className='ml-1'>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</div>
                <div className='flex'>24h: {coin.market_data?.price_change_percentage_24h_in_currency ? <p className='ml-1'>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</div>
              </div>
              <hr />
              <div className="flex items-center justify-between text-sm">
                <div className="text-sm flex">7d: {coin.market_data?.price_change_percentage_7d_in_currency ? <p className='ml-1'>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</div>
                <div className='flex'>14d: {coin.market_data?.price_change_percentage_14d_in_currency ? <p className='ml-1'>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</div>
              </div>
              <hr />
              <div className="flex items-center justify-between text-sm">
                <div className="text-sm flex">30d: {coin.market_data?.price_change_percentage_30d_in_currency ? <p className='ml-1'>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</div>
                <div className='flex'>1yr: {coin.market_data?.price_change_percentage_1y_in_currency ? <p className='ml-1'>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</div>
              </div>
            </div>
          </div>



          <div className='px-3 py-3 w-[80%] mt-4 rounded flex justify-center items-center bg-slate-700'>
            <div className='p-4 w-[100%]'>
              <div className=' py-2 flex justify-between items-center'>
                <p>24 Hours Low:</p>
                {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
              </div>
              <hr />
              <div className='py-2 flex justify-between items-center'>
                <p>24 Hours High:</p>
                {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}
              </div>
              <hr />
              <div className='py-2 flex justify-between items-center'>
                <p>Market Cap:</p>
                {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
              </div>
              <hr />
              <div className='py-2 flex justify-between items-center'>
                <p>Circulating Supply:</p>
                {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className='w-[80%] text-center'>
          <BarChart props={coin} /> 
          </div>
        </div>

        <div className='mt-8 w-[full] flex flex-col justify-center items-center'>
          <div className=' w-[80%] sm:p-4 text-justify'>
            <p dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(coin.description?.en)
            }}>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoinItem;

/* <li>{coin.market_cap_rank}</li>
                                    <li className='flex uppercase mt-4'>
                                    <img src={coin.image} className="w-[25px] mr-1" alt='Coin' />  {coin.symbol}
                                    </li>
                                    <li>${coin.current_price.toLocaleString()}</li>
                                    <li>{coin.price_change_percentage_24h.toFixed(2)}%</li>
                                    <li>{coin.total_volume.toLocaleString()}</li>
                                    <li>{coin.market_cap.toLocaleString()}</li> */