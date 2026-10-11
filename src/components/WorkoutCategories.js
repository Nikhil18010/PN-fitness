import React from 'react';
import {
    FaDumbbell,
    FaRunning,
    FaBiking,
    FaHeartbeat
} from 'react-icons/fa';
import './styles/WorkoutCategories.css';

const WorkoutCategories = ({ searchTerm }) => {
    const categories = [
        { name: "Strength", duration: "30 min", icon: <FaDumbbell /> },
        { name: "Running", duration: "20 min", icon: <FaRunning /> },
        { name: "Cycling", duration: "15 min", icon: <FaBiking /> },
        { name: "Cardio", duration: "25 min", icon: <FaHeartbeat /> }
    ];

    const filteredCategories = categories.filter((category) =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="workout-categories">
            <div className="categories-header">
                <h2>Workout Categories</h2>
                <span>Today</span>
            </div>

            <div className="categories-grid">
                {filteredCategories.length > 0 ? (
                    filteredCategories.map((category, index) => (
                        <div className="category-card" key={index}>
                            <div className="category-icon">
                                {category.icon}
                            </div>

                            <div className="category-info">
                                <h3>{category.name}</h3>
                                <p>{category.duration}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No workouts found.</p>
                )}
            </div>
        </div>
    );
};

export default WorkoutCategories;