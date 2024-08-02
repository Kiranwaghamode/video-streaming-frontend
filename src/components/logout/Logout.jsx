import React from 'react';
import './Logout.css';

const Logout = ({ show, handleClose, handleLogout }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Are you sure you want to logout?</h3>
        <button onClick={handleLogout} className='logout-btn'>Yes</button>
        <button onClick={handleClose}  className='logout-btn'>No</button>
      </div>
    </div>
  );
};

export default Logout;
