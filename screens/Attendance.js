import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
//import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

// Create the chartData state
const [chartData, setChartData] = useState();
const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.59:8000/api/students')
      .then(({ data }) => {
        console.log(data);
        //console.log("defaultApp -> data", data.name)
        setData(data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  console.log(data);
// in your fetch function, convert the data to chartData
const labels = Object.keys(data.students);
const students = labels.map((name) => data.students[name]);
//const deaths = labels.map((name) => data.deaths[name]);
//const recovered = labels.map((name) => data.recovered[name]);

setChartData({
    labels,
    datasets: [{
        data: students,
        label: 'Infected',
        borderColor: '#3333ff',
        fill: true
    }, {
        data: deaths,
        label: 'Deaths',
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        fill: true
    }, {
        data: recovered,
        label: 'Recovered',
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        fill: true
    }]
})

// Now render your chart (but make sure chartData exists)
return ( 
    <div className = { styles.container }> 
        {chartData &&
            <Line data={chartData} />
        }
    </div>
);