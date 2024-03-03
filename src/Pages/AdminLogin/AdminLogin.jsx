import React, {useState} from 'react'
import Classes from './styles/style.module.css'
import { NavLink } from 'react-router-dom'
import googleIcon from '../../utils/icons/googleIcon.png'

function AdminLogin() {
  const [formdata,setformdata] = useState({
    email: '',
    password: '',
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
      <section className={Classes.s1}>
        <form onSubmit={handleSubmit} className={Classes.form} >
          <h1>Admin Login</h1>
          <div className={Classes.google_con} >
            <img src={googleIcon} alt='google-icon' />
            <h5>Continue with Google</h5>
          </div>
          <div className={Classes.or_con} >
            <hr/>
            <h5>or</h5>
            <hr/>
          </div>
          <input 
            placeholder='Email'
            name='email'
            type='email'
            value={formdata.email}
            onChange={changeValue}
            required
          />
          <input 
            placeholder='Password'
            name='password'
            type='password'
            value={formdata.password}
            onChange={changeValue}
            required
          />
          <button type='submit' >Submit</button>
          <h5>
            <NavLink to='/customer-login'>Forget Password?</NavLink>
          </h5>
        </form>
      </section> 
    </>
  )
}

export default AdminLogin
