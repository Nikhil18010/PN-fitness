import React, { useState } from 'react';
import {
    FaBullseye,
    FaFire,
    FaWalking,
    FaDumbbell
} from 'react-icons/fa';
import './styles/FriendsList.css';


const FriendsList = () => {

    const [workoutHistory, setWorkoutHistory] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('workoutHistory')) || [];
        } catch {
            return [];
        }
    });

    const [workoutName, setWorkoutName] = useState('');
    const [workoutDuration, setWorkoutDuration] = useState('');

    

    // User fitness information
const [height, setHeight] = useState(
    () => Number(localStorage.getItem('bmiHeight')) || 175
);

const [weight, setWeight] = useState(
    () => Number(localStorage.getItem('bmiWeight')) || 75
);

// BMI calculation
const heightInMeters = height / 100;

const bmi =
    height > 0 && weight > 0
        ? weight / (heightInMeters * heightInMeters)
        : 0;

const roundedBMI = bmi > 0 ? bmi.toFixed(1) : "--";

let fitnessStatus;

if (bmi === 0) {
    fitnessStatus = "Enter valid values";
} else if (bmi < 18.5) {
    fitnessStatus = "Underweight";
} else if (bmi < 25) {
    fitnessStatus = "Healthy Range";
} else if (bmi < 30) {
    fitnessStatus = "Overweight";
} else {
    fitnessStatus = "Obesity Range";
}
    
const [stepTarget, setStepTarget] = useState(
    () => Number(localStorage.getItem('stepTarget')) || 10000
);

const [calorieTarget, setCalorieTarget] = useState(
    () => Number(localStorage.getItem('calorieTarget')) || 600
);

const [workoutTarget, setWorkoutTarget] = useState(
    () => Number(localStorage.getItem('workoutTarget')) || 60
);
const totalWorkoutMinutes = workoutHistory.reduce(
    (total, workout) => total + workout.duration,
    0
);


const goals = [
    {
        name: "Daily Steps",
        current: 7240,
        target: stepTarget,
        icon: <FaWalking />,
        onTargetChange: setStepTarget
    },
    {
        name: "Calories",
        current: 420,
        target: calorieTarget,
        unit: "kcal",
        icon: <FaFire />,
        onTargetChange: setCalorieTarget
    },
    {
        name: "Workout",
        current: totalWorkoutMinutes,
        target: workoutTarget,
        unit: "min",
        icon: <FaDumbbell />,
        onTargetChange: setWorkoutTarget
    }
];
    return (
        <div className="friends-list">

            <div className="header-section">
                <h2>
                    <FaBullseye /> Today's Goals
                </h2>
            </div>

            <div className="goals-list">
                {goals.map((goal, index) => (
                    <div className="goal-item" key={index}>

                        <div className="goal-header">
                            <div className="goal-name">
                                <span className="goal-icon">
                                    {goal.icon}
                                </span>
                                {goal.name}
                            </div>

                           
<span className="goal-percent">
    {Math.min(
        100,
        Math.round((goal.current / Math.max(1, goal.target)) * 100)
    )}%
</span>
                        </div>

                        <div className="goal-progress-bar">
                            <div
                                className="goal-progress"
                                style={{
                                    width: `${goal.progress}%`
                                }}
                            ></div>
                        </div>

                       
<div className="goal-details">
    <span>
        {goal.name === "Daily Steps"
            ? goal.current.toLocaleString()
            : `${goal.current} ${goal.unit || ""}`}
    </span>

    <label className="goal-target-control">
        Goal:
        <input
            type="number"
            min="1"
            value={goal.target}
           
onChange={(e) => {
    const value = Number(e.target.value);

    if (value > 0) {
        goal.onTargetChange(value);

        const storageKey = {
            "Daily Steps": "stepTarget",
            "Calories": "calorieTarget",
            "Workout": "workoutTarget"
        }[goal.name];

        localStorage.setItem(storageKey, String(value));
    }
}}
        />
        {goal.name === "Daily Steps" ? "" : goal.unit}
    </label>
</div>

                    </div>
                ))}
            </div>

            
<div className="workout-entry">
    <h2>Log a Workout</h2>

    <input
        type="text"
        placeholder="Workout name (e.g. Running)"
        value={workoutName}
        onChange={(e) => setWorkoutName(e.target.value)}
    />

    <input
        type="number"
        min="1"
        placeholder="Duration in minutes"
        value={workoutDuration}
        onChange={(e) => setWorkoutDuration(e.target.value)}
    />

    <button
        type="button"
        onClick={() => {
            if (!workoutName.trim() || Number(workoutDuration) <= 0) {
                return;
            }

            const updatedHistory = [
                ...workoutHistory,
                {
                    id: Date.now(),
                    name: workoutName.trim(),
                    duration: Number(workoutDuration)
                }
            ];

            setWorkoutHistory(updatedHistory);

            localStorage.setItem(
                'workoutHistory',
                JSON.stringify(updatedHistory)
            );

            setWorkoutName('');
            setWorkoutDuration('');
        }}
    >
        Add Workout
    </button>
</div>


<div className="workout-history">
    <h2>Workout History</h2>

    {workoutHistory.length === 0 ? (
        <p>No workouts logged yet.</p>
    ) : (
        workoutHistory.map((workout) => (
            <div className="workout-history-item" key={workout.id}>
                <span>{workout.name}</span>
                <div className="workout-history-actions">
    <strong>{workout.duration} min</strong>
    <button
        type="button"
        onClick={() => {
            const updatedHistory = workoutHistory.filter(
                (item) => item.id !== workout.id
            );

            setWorkoutHistory(updatedHistory);
            localStorage.setItem(
                'workoutHistory',
                JSON.stringify(updatedHistory)
            );
        }}
    >
        Delete
    </button>
</div>
            </div>
        ))
    )}
</div>

            


            
<div className="workout-summary">
    <h2>Workout Summary</h2>

    {workoutHistory.length === 0 ? (
        <p>No workouts logged yet.</p>
    ) : (
        workoutHistory.map((workout) => (
            <div className="summary-item" key={workout.id}>
                <span>{workout.name}</span>
                <strong>{workout.duration} min</strong>
            </div>
        ))
    )}
</div>


            <div className="bmi-summary">
                <h2>BMI & Fitness Summary</h2>
                <div className="bmi-inputs">
    <div className="bmi-input">
        <label>Height (cm)</label>
        <input
            type="number"
            value={height}
           onChange={(e) => {
    const value = Number(e.target.value);

    setHeight(value);
    localStorage.setItem('bmiHeight', String(value));
}}
        />
    </div>

    <div className="bmi-input">
        <label>Weight (kg)</label>
        <input
            type="number"
            value={weight}
            onChange={(e) => {
    const value = Number(e.target.value);

    setWeight(value);
    localStorage.setItem('bmiWeight', String(value));
}}
        />
    </div>
</div>

                <div className="bmi-details">

                    <div className="bmi-item">
                        <span>Height</span>
                        <strong>{height} cm</strong>
                    </div>

                    <div className="bmi-item">
                        <span>Weight</span>
                        <strong>{weight} kg</strong>
                    </div>

                    <div className="bmi-item">
                        <span>BMI</span>
                        <strong>{roundedBMI}</strong>
                    </div>

                </div>

                <div className={`fitness-status ${fitnessStatus.toLowerCase().replace(" ", "-")}`}>
    <span>Fitness Status</span>
    <strong>{fitnessStatus}</strong>
</div>
            </div>

        </div>
    );
};

export default FriendsList;