import React from 'react'
import Classes from './styles/style.module.css'
import deleteBoxIcon from '../../utils/icons/deleteBoxIcon.png'

function ConfirmDeletePopup({handleCloseConfirmDelete,title,description}) {
  const handleConfirm = async (event)=>{
    handleCloseConfirmDelete();
  }
  const handleCancel = async (event)=>{
    handleCloseConfirmDelete();
  }
  const handleBgClick = (event) =>{
    handleCloseConfirmDelete();
  }
  const handleMainClick = (event) =>{
    event.stopPropagation();
  }
  return (
    <>
      <div className={Classes.confirm_bg} onClick={handleBgClick} >
        <div className={Classes.confirm_con} onClick={handleMainClick} >
          <img src={deleteBoxIcon} alt='delete-icon' />
          <h1> {title} </h1>
          <h5>{description} </h5>
          <div className={Classes.btn_con} >
            <button onClick={handleCancel} >
              <h5>Cancel</h5>
            </button>
            <button onClick={handleConfirm} >
              <h5>Delete</h5>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfirmDeletePopup
