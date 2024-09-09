import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  username?: string;
  userDomain?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedOption, setSelectedOption, username, userDomain }) => {
  return (
    <div className="sidebar">
      <div className="user-profile">
        <div className="profile-label">User Details</div>
        <div className="user-info-box">
          {username && userDomain && (
            <>
              <div className="username">{username}</div>
              <div className="user-domain">{userDomain}</div>
            </>
          )}
        </div>
      </div>

      <div className="sidebar-menu">
        <ul>
          <li
            className={`sidebar-item ${selectedOption === 'uploadFile' ? 'active' : ''}`}
            onClick={() => setSelectedOption('uploadFile')}
          >
            Upload File
          </li>
          <li
            className={`sidebar-item ${selectedOption === 'generateTestCases' ? 'active' : ''}`}
            onClick={() => setSelectedOption('generateTestCases')}
          >
            Generate Test Cases
          </li>
          <li
            className={`sidebar-item ${selectedOption === 'result' ? 'active' : ''}`}
            onClick={() => setSelectedOption('result')}
          >
            Result
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
