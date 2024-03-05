import React, { useState } from 'react'
import Classes from './styles/style.module.css'
import deleteIcon from '../../utils/icons/deleteIcon.png'
import ConfirmDeletePopup from './ConfirmDeletePopup';

function UserComp() {
    const [openConfirmDelete,setopenConfirmDelete] = useState(false);
    const handleopenConfirmDelete = ()=>{
        setopenConfirmDelete(true);
    }
    const handleCloseConfirmDelete = ()=>{
        setopenConfirmDelete(false)
    }
    return (
    <>
        <div className={Classes.all_acc_elem} >
          <h5>John Doe</h5>
          <h5>johndoe@gmail.com</h5>
          <h5>2 Jan, 2024</h5>
          <h5>5</h5>
          <img onClick={handleopenConfirmDelete} src={deleteIcon} />
        </div>
        { openConfirmDelete &&
            <ConfirmDeletePopup handleCloseConfirmDelete={handleCloseConfirmDelete}
                title={'Delete Account?'} description={`Are you sure you want to delete Afaq's account?`}
            />
        }
    </>
  )
}

export default UserComp
