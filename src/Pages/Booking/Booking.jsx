import React, { useState } from 'react'
import Classes from './styles/style.module.css'
import img1 from '../../utils/images/img1.jpg'

function Booking() {
    
  return (
    <>
        <section className={Classes.s1} >
            <img src={img1} />
            <div className={Classes.booking_con} >
              <h1>Book a Jet.</h1>
              <select>
                
              </select>
            </div>
        </section>
    </>
  )
}

export default Booking
