// src/components/Header.tsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { BsThreeDots } from 'react-icons/bs';
import './Header.css';
import logo from './logo.png';
 
const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Left side: Logo */}
      <div className="header-logo">
        <img src={logo} alt="HCL Tech Logo" className="logo" />
      </div>
 
      {/* Center: Title */}
      <h1 className="header-title">Test Case Generation Tool</h1>
 
      {/* Right side: Buttons */}
      <div className="header-buttons">
        <Button
          variant="primary"
          className="mr-2 deploy-button"
          style={{
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '20px',
          }}
        >
          Deploy
        </Button>
        <Button variant="outline-secondary">
          <BsThreeDots size={24} />
        </Button>
      </div>
    </header>
  );
};
 
export default Header;