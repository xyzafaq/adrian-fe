import React, { useState } from 'react'
import Classes from './styles/style.module.css'
import UserComp from './UserComp'

function AdminManage() {
  return (
    <>
        <section className={Classes.s1} >
          <h1>All Accounts</h1>
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
          <h1>All Bookings</h1>
          <div className={Classes.booking_list_con} >
            <div className={Classes.booking_list_elem} >
              <div>
                <div className={Classes.b_list_line1} >
                  <h5 className={Classes.text}> <span>Name:</span> John Doe </h5>
                  <h5 className={Classes.text}> <span>Flight Id:</span> 89735654068 </h5>
                </div>
                <div className={Classes.b_list_line2} >
                  <div>
                    <h5 className={Classes.text}> <span>Departure Airport:</span> <br/> Lorem Ipsum, lorem ipsum </h5>
                  </div>
                  <div>
                    <h5 className={Classes.text}> <span>Departure Time:</span> <br/> 1 March, 2024 -- 3:30 AM </h5>
                  </div>
                </div>
                <hr />
                <div className={Classes.b_list_line2} >
                  <div>
                    <h5 className={Classes.text}> <span>Arrival Airport:</span> <br/> Lorem Ipsum, lorem ipsum </h5>
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
                    <h5 className={Classes.text}> <span>Departure Airport:</span> <br/> Lorem Ipsum, lorem ipsum </h5>
                  </div>
                  <div>
                    <h5 className={Classes.text}> <span>Departure Time:</span> <br/> 1 March, 2024 -- 3:30 AM </h5>
                  </div>
                </div>
                <hr />
                <div className={Classes.b_list_line2} >
                  <div>
                    <h5 className={Classes.text}> <span>Arrival Airport:</span> <br/> Lorem Ipsum, lorem ipsum </h5>
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
                    <h5 className={Classes.text}> <span>Departure Airport:</span> <br/> Lorem Ipsum, lorem ipsum </h5>
                  </div>
                  <div>
                    <h5 className={Classes.text}> <span>Departure Time:</span> <br/> 1 March, 2024 -- 3:30 AM </h5>
                  </div>
                </div>
                <hr />
                <div className={Classes.b_list_line2} >
                  <div>
                    <h5 className={Classes.text}> <span>Arrival Airport:</span> <br/> Lorem Ipsum, lorem ipsum </h5>
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
                    <h5 className={Classes.text}> <span>Departure Airport:</span> <br/> Lorem Ipsum, lorem ipsum </h5>
                  </div>
                  <div>
                    <h5 className={Classes.text}> <span>Departure Time:</span> <br/> 1 March, 2024 -- 3:30 AM </h5>
                  </div>
                </div>
                <hr />
                <div className={Classes.b_list_line2} >
                  <div>
                    <h5 className={Classes.text}> <span>Arrival Airport:</span> <br/> Lorem Ipsum, lorem ipsum </h5>
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
                    <h5 className={Classes.text}> <span>Departure Airport:</span> <br/> Lorem Ipsum, lorem ipsum </h5>
                  </div>
                  <div>
                    <h5 className={Classes.text}> <span>Departure Time:</span> <br/> 1 March, 2024 -- 3:30 AM </h5>
                  </div>
                </div>
                <hr />
                <div className={Classes.b_list_line2} >
                  <div>
                    <h5 className={Classes.text}> <span>Arrival Airport:</span> <br/> Lorem Ipsum, lorem ipsum </h5>
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
                    <h5 className={Classes.text}> <span>Departure Airport:</span> <br/> Lorem Ipsum, lorem ipsum </h5>
                  </div>
                  <div>
                    <h5 className={Classes.text}> <span>Departure Time:</span> <br/> 1 March, 2024 -- 3:30 AM </h5>
                  </div>
                </div>
                <hr />
                <div className={Classes.b_list_line2} >
                  <div>
                    <h5 className={Classes.text}> <span>Arrival Airport:</span> <br/> Lorem Ipsum, lorem ipsum </h5>
                  </div>
                  <div>
                    <h5 className={Classes.text}> <span>Arrival Time:</span> <br/> 1 March, 2024 -- 3:30 AM </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default AdminManage
