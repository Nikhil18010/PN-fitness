import React from 'react';
import './styles/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRunning, faChartBar, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';



function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <span>PN</span>
      </div>
      <nav>
        <ul>
          <li>
            <FontAwesomeIcon icon={faHome} className="fa-icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faRunning} className="fa-icon" />
            <span>Workouts</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faChartBar} className="fa-icon" />
            <span>Progress</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCog} className="fa-icon" />
             <span>Settings</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faSignOutAlt} className="fa-icon" />
            <span>Logout</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
