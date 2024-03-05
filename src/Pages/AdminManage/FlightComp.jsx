import React, {useState} from 'react'
import Classes from './styles/style.module.css'
import deleteIcon from '../../utils/icons/deleteIcon.png'
import ConfirmDeletePopup from './ConfirmDeletePopup';


function FlightComp() {
    const [openConfirmDelete,setopenConfirmDelete] = useState(false);
    const handleopenConfirmDelete = ()=>{
        setopenConfirmDelete(true);
    }
    const handleCloseConfirmDelete = ()=>{
        setopenConfirmDelete(false)
    }
  return (
    <>
        <div className={Classes.booking_list_elem} >
          <div>
            <div className={Classes.b_list_line1} >
              <h5 className={Classes.text}> <span>Name:</span> John Doe </h5>
              <h5 className={Classes.text}> <span>Flight Id:</span> 89735654068 </h5>
            </div>
            <div className={Classes.b_list_line2} >
              <div>
                <h5 className={Classes.text}> <span>Departure Airport:</span> <br/> Turweston Aerodrome </h5>
              </div>
              <div>
                <h5 className={Classes.text}> <span>Departure Time:</span> <br/> 1 March, 2024 -- 3:30 AM </h5>
              </div>
            </div>
            <hr />
            <div className={Classes.b_list_line2} >
              <div>
                <h5 className={Classes.text}> <span>Arrival Airport:</span> <br/> Leonardo da Vinci Fiumicino </h5>
              </div>
              <div>
                <h5 className={Classes.text}> <span>Arrival Time:</span> <br/> 1 March, 2024 -- 3:30 AM </h5>
              </div>
            </div>
          </div>
          <div>
            <div className={Classes.b_list_line1} >
              <h5 className={Classes.text}> <span>Name:</span> John Doe </h5>
              <h5 className={Classes.text}> <span>Flight Id:</span> 89735654068 </h5>
            </div>
            <div className={Classes.b_list_line2} >
              <div>
                <h5 className={Classes.text}> <span>Departure Airport:</span> <br/> Turweston Aerodrome </h5>
              </div>
              <div>
                <h5 className={Classes.text}> <span>Departure Time:</span> <br/> 1 March, 2024 -- 3:30 AM </h5>
              </div>
            </div>
            <hr />
            <div className={Classes.b_list_line2} >
              <div>
                <h5 className={Classes.text}> <span>Arrival Airport:</span> <br/> Leonardo da Vinci Fiumicino </h5>
              </div>
              <div>
                <h5 className={Classes.text}> <span>Arrival Time:</span> <br/> 1 March, 2024 -- 3:30 AM </h5>
              </div>
            </div>
          </div>
          <img onClick={handleopenConfirmDelete} src={deleteIcon} />
        </div>
        { openConfirmDelete &&
            <ConfirmDeletePopup handleCloseConfirmDelete={handleCloseConfirmDelete}
                title={'Delete Flight?'} description={`Are you sure you want to delete this?`}
            />
        }
    </>
  )
}

export default FlightComp
