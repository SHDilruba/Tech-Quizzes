import React, { useState, useEffect} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css'

const Statistics = () => {
  const [chart, setChart] = useState([]);

  useEffect( () =>{
       fetch('https://openapi.programming-hero.com/api/quiz')
       .then(res => res.json())
       .then(data => setChart(data.data))
       console.log(chart)
  },[]);

  return (
    <div className='mt-5 pt-5 mb-5 pb-5 bg-light container'>
        <div className='chart'>
           <LineChart
                   width={600}
                   height={450} 
                   data={chart}>
                  <Line type="monotone"
                      dataKey="total" 
                      stroke="#82ca9d"/>
                  <XAxis dataKey="name"/>
                <YAxis />
             <Tooltip></Tooltip>
           </LineChart>
        </div>
  </div>
          
    );
  }


export default Statistics;