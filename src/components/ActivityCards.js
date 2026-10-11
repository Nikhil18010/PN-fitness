import React from 'react';
import { FaRunning, FaBiking, FaDumbbell } from 'react-icons/fa';
import './styles/ActivityCards.css';

const ActivityCards = ({ searchTerm }) => {
    const activities = [
        {
            name: "Running",
            progress: 65,
            goal: "10 km / week",
            current: "6.5 / 10 km",
            daysLeft: 3,
            icon: <FaRunning />
        },
        {
            name: "Cycling",
            progress: 50,
            goal: "40 km / week",
            current: "20 / 40 km",
            daysLeft: 4,
            icon: <FaBiking />
        },
        {
            name: "Strength Training",
            progress: 75,
            goal: "4 workouts / week",
            current: "3 / 4 workouts",
            daysLeft: 2,
            icon: <FaDumbbell />
        },
    ];

    const filteredActivities = activities.filter((activity) =>
        activity.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="activity-cards">
            {filteredActivities.length > 0 ? (
                filteredActivities.map((activity, index) => (
                    <div className="activity-card" key={index}>
                        <div className="activity-header">
                            <div className="activity-icon">{activity.icon}</div>
                            <div className="activity-name">{activity.name}</div>
                        </div>

                        <div className="activity-info">
                            <div className="activity-details">
                                Goal: {activity.goal}
                            </div>

                            <div className="progress-header">
                                <span className="progress-label">Progress</span>
                                <span className="progress-percent">
                                    {activity.progress}%
                                </span>
                            </div>

                            <div className="progress-bar">
                                <div
                                    className="progress"
                                    style={{ width: `${activity.progress}%` }}
                                ></div>
                            </div>

                            <div className="current-progress">
                                <span>{activity.current}</span>
                                <span className="days-left">
                                    {activity.daysLeft} days left
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="no-results">No activities found.</p>
            )}
        </div>
    );
};

export default ActivityCards;