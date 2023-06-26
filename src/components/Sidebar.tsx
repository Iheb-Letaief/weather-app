
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMap, faLocationDot, faCalendarAlt, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="logo-section">
        <h1>Weather Dashboard</h1>
      </div>
      <div className="pages-section">
        <ul>
          <li>
            <a href='#' ><FontAwesomeIcon icon={faHouse} /> Dashboard</a>
          </li>
          <li>
            <a href='#'><FontAwesomeIcon icon={faMap} /> Map</a>
          </li>
          <li>
            <a href='#'> <FontAwesomeIcon icon={faLocationDot} /> Saved locations</a>
          </li>
          <li>
            
            <a href='#'><FontAwesomeIcon icon={faCalendarAlt} /> Calendar</a>
          </li>
        </ul>
      </div>
      <div className="system-section">
        <h2>System</h2>
        <ul>
          <li>
            <a href='#'><FontAwesomeIcon icon={faCog} /> Settings</a>
          </li>
          <li>
            
            <a href='#'><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
