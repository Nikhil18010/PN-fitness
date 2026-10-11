import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import './styles/Overview.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const Overview = () => {
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Steps',
                data: [],
                backgroundColor: 'rgba(106, 76, 147, 0.2)',
                borderColor: '#6a4c93',
                borderWidth: 2,
                pointBackgroundColor: '#ff6f61',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#ff6f61',
                pointHoverBorderColor: '#fff',
                fill: true,
            },
        ],
    });

    useEffect(() => {
        setData({
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Steps',
                    data: [6200, 7800, 5400, 9200, 7240, 8600, 10000],
                    backgroundColor: 'rgba(106, 76, 147, 0.2)',
                    borderColor: '#6a4c93',
                    borderWidth: 2,
                    pointBackgroundColor: '#ff6f61',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#ff6f61',
                    pointHoverBorderColor: '#fff',
                    fill: true,
                },
            ],
        });
    }, []);

    const options = {
         responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                    color: '#fff',
                },
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                    color: '#fff',
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        elements: {
            line: {
                tension: 0.4,
            },
        },
    };

    return (
        <div className="overview">
            <h2>Today's Activity</h2>

            <div className="overview-content">

                <div className="stats">

                    <div className="stat">
                        <h3>Steps</h3>

                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: '72%' }}
                            ></div>
                        </div>

                        <div className="details">
                            <span>7,240 / 10,000</span>
                            <span>72%</span>
                        </div>
                    </div>

                    <div className="stat">
                        <h3>Calories</h3>

                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: '70%' }}
                            ></div>
                        </div>

                        <div className="details">
                            <span>420 / 600 kcal</span>
                            <span>70%</span>
                        </div>
                    </div>

                    <div className="stat">
                        <h3>Workout</h3>

                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: '70%' }}
                            ></div>
                        </div>

                        <div className="details">
                            <span>42 / 60 min</span>
                            <span>70%</span>
                        </div>
                    </div>

                </div>

                <div className="chart">
                    <h3>Weekly Activity</h3>

                    <Line
                        data={data}
                        options={options}
                    />
                </div>

            </div>
        </div>
    );
};

export default Overview;