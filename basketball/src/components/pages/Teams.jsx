import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const team2abb = {
  "Hawks": "ATL",
  "Celtics": "BOS",
  "Hornets": "CHA",
  "Bulls": "CHI",
  "Cavaliers": "CLE",
  "Mavericks": "DAL",
  "Nuggets": "DEN",
  "Pistons": "DET",
  "Warriors": "GSW",
  "Rockets": "HOU",
  "Pacers": "IND",
  "Clippers": "LAC",
  "Lakers": "LAL",
  "Grizzlies": "MEM",
  "Heat": "MIA",
  "Bucks": "MIL",
  "Timberwolves": "MIN",
  "Pelicans": "NOP",
  "Knicks": "NYK",
  "Nets": "BKN",
  "Thunder": "OKC",
  "Magic": "ORL",
  "76ers": "PHI",
  "Suns": "PHO",
  "Blazers": "POR",
  "Kings": "SAC",
  "Raptors": "TOR",
  "Jazz": "UTH",
  "Wizards": "WAS",
  "Spurs": "SAS"
}

const teamname = (window.location.pathname.split('/')[2]);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: teamname + " win rate",
    },
  },
  scales: {
    y: {
      max: 1,
      min: 0,
    },
  },
};

export const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top', 
    },
    title: {
      display: true,
      text: teamname + " Total Games / Winned Games"
    },
  },
};


export const labels = ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010',
                    '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018',
                '2019', '2020', '2021', '2022', '2023'];
//[0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],

export const barData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

const Teams = () => {
  const [winrate, setWinrate] = useState([]);
  const [year, setYear] = useState([]);
  const [total, setTotal] = useState([]);
  const [win, setWin] = useState([]);
  const [lineData, setLineData] = useState({
    labels,
    datasets: [
      {
        label: teamname + " win rate",
        data: winrate,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  });
  const [barData, setBarData] = useState({
    labels,
    datasets: [
      {
        label: 'Total Games',
        data: total,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Winned Games',
        data: win,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  })
  useEffect(() => {
    async function getWinrate(teamname) {
      const response = await fetch(`http://localhost:5050/teamWinrate/${team2abb[teamname]}`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      records.forEach(function(record) {
        year.push(record["Year"]);
        winrate.push(record["WinRate"]);
        total.push(record["TotalGames"]);
        win.push(record["Wins"]);
      });
      setWinrate(winrate);
      setYear(year);
      setWin(win);
      setTotal(total);
      setBarData({
        labels,
        datasets: [
          {
            label: 'Total Games',
            data: total,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Winned Games',
            data: win,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      });
      setLineData({
        labels,
        datasets: [
          {
            label: teamname + " win rate",
            data: winrate,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      });
    }

    getWinrate(teamname);
    return;
  }, []);
  var teams = {'Lakers': 'https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg',
               'Knicks': 'https://cdn.nba.com/logos/nba/1610612752/global/L/logo.svg',
               'Celtics': 'https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg',
               'Cavaliers': 'https://cdn.nba.com/logos/nba/1610612739/global/L/logo.svg',
               'Timberwolves': 'https://cdn.nba.com/logos/nba/1610612750/global/L/logo.svg',
               'Pistons': 'https://cdn.nba.com/logos/nba/1610612765/global/L/logo.svg',
               'Warriors': 'https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg',
               'Rockets': 'https://cdn.nba.com/logos/nba/1610612745/global/L/logo.svg',
               'Suns': 'https://cdn.nba.com/logos/nba/1610612756/global/L/logo.svg',
               'Bulls': 'https://cdn.nba.com/logos/nba/1610612741/global/L/logo.svg',
               'Kings': 'https://cdn.nba.com/logos/nba/1610612758/global/L/logo.svg',
               'Nets': 'https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg',
               'Bucks': 'https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg',
               '76ers': 'https://cdn.nba.com/logos/nba/1610612755/global/L/logo.svg',
               'Heat': 'https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg',
               'Pelicans': 'https://cdn.nba.com/logos/nba/1610612740/global/L/logo.svg',
               'Spurs': 'https://cdn.nba.com/logos/nba/1610612759/global/L/logo.svg',
               'Hornets': 'https://cdn.nba.com/logos/nba/1610612766/global/L/logo.svg',
               'Hawks': 'https://cdn.nba.com/logos/nba/1610612737/global/L/logo.svg',
               'Mavericks': 'https://cdn.nba.com/logos/nba/1610612742/global/L/logo.svg',
               'Wizards': 'https://cdn.nba.com/logos/nba/1610612764/global/L/logo.svg',
               'Nuggets': 'https://cdn.nba.com/logos/nba/1610612743/global/L/logo.svg',
               'Jazz': 'https://cdn.nba.com/logos/nba/1610612762/global/L/logo.svg',
               'Raptors': 'https://cdn.nba.com/logos/nba/1610612761/global/L/logo.svg'}

  return (
    // <div className="bg-black" style={{maxHeight: "350px", overflow: "hidden"}}>
    <>
      <div className="bg-black" style={{maxHeight: "350px"}}>
          <img
            src={teams[(teamname)]}
            style={{opacity: 0.15, filter: "grayscale(75%)", pointerEvents: "none", userSelect: "none"}}
            className="w-100 position-static top-50 start-100 translate-middle"
          />
          <h1 className="position-absolute top-0 start-50"
            style={{color: '#cccccc', padding: "200px", fontFamily: 'Alegreya Sans SC', fontSize: 80 , pointerEvents: "none", userSelect: "none"}}>
            Analysis of <br/> {teamname}
          </h1>
      </div>
      <div className="bg-black">
        <Container className="mt-0 mb-0">
         <Line options={options} data={lineData} style={{marginBottom: 50}}/>;
        </Container>
      </div>
      <div className="bg-black">
        <Container className="mt-0 mb-0">
         <Bar options={barOptions} data={barData} style={{marginBottom: 75}}/>;
        </Container>
      </div>
    </>
  )
}

export default Teams