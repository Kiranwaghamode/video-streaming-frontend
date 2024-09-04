import React from 'react'
import './Yesorno.css'
const Yesorno = ({title, handleVideoDelete, handleClose, isLoading}) => {
  return (
   <>
   <div className="modal-overlay">
      <div className="modal-content">
        <h3>{title}</h3>
        <button onClick={handleVideoDelete} className='logout-btn' disabled={ isLoading ? true : false}>Yes</button>
        <button onClick={handleClose}  className='logout-btn'>No</button>
      </div>
    </div>
   
   
   </>
  )
}

export default Yesorno