import React from 'react'
import './Error.css'
const Error = ({closeModal, content}) => {
  return (
    <>
    <div id="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <p>{content}</p>
            <button className="close-button" onClick={closeModal}>Okay</button>
          </div>
        </div> 
    </>
  )
}

export default Error