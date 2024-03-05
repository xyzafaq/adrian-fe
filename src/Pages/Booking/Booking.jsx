import React, { useRef, useState } from 'react'
import Classes from './styles/style.module.css'
import plane from '../../utils/images/plane.jpg'
import plane1 from '../../utils/icons/plane1.png'
import plane2 from '../../utils/icons/plane2.png'
import rotate from '../../utils/icons/rotate.png'
import search from '../../utils/icons/search.png'
import AnimHeading1 from '../../Components/ScrollEffect/AnimHeading1'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Booking() {
  const handleFlyDateChange = (date) => {
    setformdata({
      ...formdata,
      flyDate: date,
    })
  };
  const handleReturnDateChange = (date) => {
    setformdata({
      ...formdata,
      returnDate: date,
    })
  };
  const [formdata,setformdata] = useState({
    from: '',
    to: '',
    flyDate: '',
    returnDate: '',
  });
  function changeValue(event){
    const {name,value} = event.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  }
  const handleSubmit = async (e)=>{
      e.preventDefault();
  }
  return (
    <>
      <section className={Classes.s1} >
            <img src={plane} />
              <form onSubmit={handleSubmit} className={Classes.booking_con} >
              <h1>Book a Jet.</h1>
              <div className={Classes.selections} >
                <h5>Passengers</h5>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              <div className={Classes.filters_con} >
                <div className={Classes.input_con} >
                  <img src={plane1} />
                  <select 
                    name='from'
                    onChange={changeValue}
                  >
                    <option value='' >From?</option>
                    <option value='Istanbul, Turkey' >Istanbul, Turkey</option>
                    <option value='Moscow, Russia' >Moscow, Russia</option>
                    <option value='London, United Kingdom' >London, United Kingdom</option>
                    <option value='Saint Petersburg, Russia' >Saint Petersburg, Russia</option>
                    <option value='Berlin, Germany' >Berlin, Germany</option>
                    <option value='Madrid, Spain' >Madrid, Spain</option>
                    <option value='Barcelona, Spain' >Barcelona, Spain</option>
                    <option value='Rome, Italy' >Rome, Italy</option>
                    <option value='Paris, France' >Paris, France</option>
                    <option value='Bucharest, Romania' >Bucharest, Romania</option>
                  </select>
                </div>
                <div className={Classes.input_con_mini} >
                  <img src={rotate} />
                </div>
                <div className={Classes.input_con} >
                  <img src={plane2} />
                  <select
                    name='to'
                    onChange={changeValue}
                  >
                    <option value='' >To?</option>
                    <option value='Istanbul, Turkey' >Istanbul, Turkey</option>
                    <option value='Moscow, Russia' >Moscow, Russia</option>
                    <option value='London, United Kingdom' >London, United Kingdom</option>
                    <option value='Saint Petersburg, Russia' >Saint Petersburg, Russia</option>
                    <option value='Berlin, Germany' >Berlin, Germany</option>
                    <option value='Madrid, Spain' >Madrid, Spain</option>
                    <option value='Barcelona, Spain' >Barcelona, Spain</option>
                    <option value='Rome, Italy' >Rome, Italy</option>
                    <option value='Paris, France' >Paris, France</option>
                    <option value='Bucharest, Romania' >Bucharest, Romania</option>
                  </select>
                </div>
                <div className={Classes.input_con_date} >
                  <DatePicker
                    selected={formdata.flyDate}
                    onChange={handleFlyDateChange}
                    placeholderText="dd/mm/yyyy"
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
                <div className={Classes.input_con_date} >
                <DatePicker
                    selected={formdata.returnDate}
                    onChange={handleReturnDateChange}
                    placeholderText="dd/mm/yyyy"
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
                <button type='text' className={Classes.input_con_mini2} >
                  <img src={search} />
                </button>
              </div>
              </form>
      </section>
      <AnimHeading1>
        <section className={Classes.s2} >
          <h1>My Bookings</h1>
          <div className={Classes.booking_list_con} >
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
            </div>
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
            </div>
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
            </div>
          </div>
        </section>
      </AnimHeading1>
    </>
  )
}

export default Booking
