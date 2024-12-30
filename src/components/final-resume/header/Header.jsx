import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">LOGO</div>
      <div className="resume-title">
        Resume1 <span className="edit-icon">✏️</span>
      </div>
      <div className="dropdown">More Options ▼</div>
      <div className="buttons">
        <button className="custom-btn download">Download</button>
        <button className="custom-btn  print">Print</button>
        <button className="custom-btn  email">Email</button>
        <button className="custom-btn  finish-resume">Finish Resume</button>
      </div>
      <div className="zoom-controls">
        <span className="icon">⟲</span>
        <span className="icon">➖</span>
        <span className="zoom">100%</span>
        <span className="icon">➕</span>
      </div>
    </div>
  );
};

export default Header;
