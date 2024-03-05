import React, { useState } from 'react'
import Classes from './styles/style.module.css'
import UserComp from './UserComp'
import FlightComp from './FlightComp'

function AdminManage() {
  return (
    <>
        <section className={Classes.s1} >
          <h1>Manage Accounts</h1>
          <div className={Classes.acc_head} >
            <h5>Name</h5>
            <h5>Email</h5>
            <h5>Since</h5>
            <h5>Flights</h5>
          </div>
          <div className={Classes.all_acc_con} >
            <UserComp />
            <UserComp />
            <UserComp />
            <UserComp />
            <UserComp />
            <UserComp />
            <UserComp />
            <UserComp />
          </div>
        </section>
        <section className={Classes.s2} >
          <h1>Manage Flights- as in the fleet of planes</h1>
          <div className={Classes.booking_list_con} >
            <FlightComp />
            <FlightComp />
            <FlightComp />
          </div>
        </section>
        <section className={Classes.s2} >
          <h1>Manage Bookings</h1>
          <div className={Classes.booking_list_con} >
            <FlightComp/>
            <FlightComp/>
            <FlightComp/>
          </div>
        </section>
    </>
  )
}

export default AdminManage
