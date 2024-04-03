import { useLoaderData, Form } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

ChartJS.register(ArcElement, Tooltip, Legend);

// const URL = import.meta.env.VITE_BASE_URL
// const allTransactions = useLoaderData()


const DoughnutChart = () => {
    const [chart, setChart] = useState({})
    const URL = import.meta.env.VITE_BASE_URL
    const allTransactions = useLoaderData()
  
  
  
    useEffect(() => {
      const fetchCoins = async () => {
        await fetch(`${URL}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*"
          }
        })
          .then((response) => {
            if (response.ok) {
              response.json().then((json) => {
                console.log(json.data);
                setChart(json.data)
              });
            }
          }).catch((error) => {
            console.log(error);
          });
      };
      fetchCoins()
    }, [URL])
  
    console.log("chart", chart);
    var data = {
      labels: chart?.type?.map(x => x.name),
      datasets: [{
        label: `${chart?.amount?.length} Coins Available`,
        data: chart?.amount?.map(x => x.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    };
  
    var options = {
      maintainAspectRatio: false,
      scales: {
      },
      legend: {
        labels: {
          fontSize: 25,
        },
      },
    }
  
    return (
      <div>
        <Doughnut
          data={data}
          height={400}
          options={options}
  
        />
      </div>
    )
  }
  
  export default DoughnutChart