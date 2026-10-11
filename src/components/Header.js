import React, { useState } from 'react';
import './styles/Header.css';
import { FaSearch } from 'react-icons/fa';

const Header = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <header className="header">
            <div className="header-content">
                <h1>PN FITNESS</h1>

                <div className="header-right">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search workouts, activities..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <FaSearch className="search-icon" />
                    </div>

                   <div className="profile-pic">
    <span>👤</span>
</div>
                </div>
            </div>
        </header>
    );
};

export default Header;