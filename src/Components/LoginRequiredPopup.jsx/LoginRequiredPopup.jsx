import React from 'react'
import {useNavigate} from 'react-router-dom'
import Classes from './styles/style.module.css'
import warningBoxIcon from '../../utils/icons/warningBoxIcon.png'

function LoginRequiredPopup({handleCloseLoginRequired}) {
  const Navigate = useNavigate();
    const handleConfirm = async (event)=>{
    handleCloseLoginRequired();
    Navigate('/customer-login');
  }
  const handleCancel = async (event)=>{
    handleCloseLoginRequired();
  }
  const handleBgClick = (event) =>{
    handleCloseLoginRequired();
  }
  const handleMainClick = (event) =>{
    event.stopPropagation();
  }
  return (
    <>
      <div className={Classes.confirm_bg} onClick={handleBgClick} >
        <div className={Classes.confirm_con} onClick={handleMainClick} >
          <img src={warningBoxIcon} alt='delete-icon' />
          <h1>Login Required</h1>
          <h5>You’re about to delete Kanzo Product. This action cannot be undone.</h5>
          <div className={Classes.btn_con} >
            <button onClick={handleCancel} >
              <h5>Cancel</h5>
            </button>
            <button onClick={handleConfirm} >
              <h5>Login</h5>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginRequiredPopup
