import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import SelectButton from "./SelectButton";

import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

const HistoricalChart = (id, days = 365) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;


  const chartDays = [
    {
      label: "24 Hours",
      value: 1,
    },
    {
      label: "30 Days",
      value: 30,
    },
    {
      label: "3 Months",
      value: 90,
    },
    {
      label: "1 Year",
      value: 365,
    },
  ];

const BarChart = ({props}) => {

    const params = useParams();
    const [historicData, setHistoricData] = useState([]);
    const [days, setDays] = useState(1);
    const [flag,setflag] = useState(false);
    
    
    const fetchHistoricData = async () => {
      const { data } = await axios.get(HistoricalChart(props.id, days));
      setflag(true);
      setHistoricData(data.prices);
    };

    useEffect(() => {
      fetchHistoricData();
    }, [days]);
    

    console.log(historicData);
  
  return (
    <>
    <div className='w-[100%] flex justify-center items-center p-4 mb-10'>
      <Line 
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in usd`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
         

    </div>
     {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => {setDays(day.value);
                    setflag(false);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
          
              ))}
    </>
  )
}

export default BarChart


/*
Labels charts

*/