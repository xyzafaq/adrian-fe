import React, { useState } from 'react'
import Classes from './styles/style.module.css'
import img1 from '../../utils/images/img1.jpg'
import plane1 from '../../utils/icons/plane1.png'
import plane2 from '../../utils/icons/plane2.png'
import rotate from '../../utils/icons/rotate.png'
import search from '../../utils/icons/search.png'

function Booking() {    
  return (
    <>
        <section className={Classes.s1} >
            <img src={img1} />
            <div className={Classes.booking_con} >
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
                  <select>
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
                  <select>
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
                  <input 
                    name='flyDate'
                    placeholder='flyDate'
                    type='date'
                  />
                </div>
                <div className={Classes.input_con_date} >
                  <input 
                    name='returnDate'
                    placeholder='returnDate'
                    type='date'
                  />
                </div>
                <div className={Classes.input_con_mini2} >
                  <img src={search} />
                </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default Booking
