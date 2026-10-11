import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './components/Overview';
import ActivityCards from './components/ActivityCards';
import FriendsList from './components/FriendsList';
import WorkoutCategories from './components/WorkoutCategories';

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="app">
            <Sidebar />

            <div className="main-content">
                <Header onSearch={setSearchTerm} />

                <Overview />

                <ActivityCards searchTerm={searchTerm} />

                <WorkoutCategories searchTerm={searchTerm} />
            </div>

            <FriendsList />
        </div>
    );
}

export default App;