import React from 'react'
import Modal from 'react-modal'

import './style.css'

const customStyle = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      padding               : '6rem 8rem',
      borderRadius          : '4px',
      background            : 'rgb(15, 15, 15)',
      border                : 'none',
      textAlign             : 'center'
    }
  }
  
const Alert = ({alertMessage, closeModal}) => (
    <Modal
        isOpen={!!alertMessage}
        contentLabel="todo list"
        style={customStyle}
        overlayClassName="Overlay"
        onRequestClose={closeModal}
    >
        <h2>{alertMessage}</h2>
        <button 
            onClick={closeModal} 
            className="btn btn-rounded btn-outlined purple-btn"
        >
            Close
        </button>
    </Modal>
)

export default Alert