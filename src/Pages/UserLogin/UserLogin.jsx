import React, {useState} from 'react'
import Classes from './styles/style.module.css'
import { NavLink } from 'react-router-dom'
import googleIcon from '../../utils/icons/googleIcon.png'

function UserLogin() {
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
        <div>
          <div className={Classes.left_con} >
            <div className={Classes.txt_con} >
              <h1>Log in or Sign up</h1>
              <h4>You can click on following buttons to switch.</h4>
            </div>
            <div className={Classes.btn_con} >
              <NavLink to='/customer-signup' >
                <button className={Classes.btn2} >
                  <h5>Signup</h5>
                </button>
              </NavLink>
              <NavLink to='/customer-login' >
                <button className={Classes.btn1} >
                  <h5>Login</h5>
                </button>
              </NavLink>
            </div>
            <h5>Copy the button and use it in your designs or you can copy the components from assets page</h5>
          </div>
        </div>
        <div>
          <div className={Classes.right_con} >
            <form onSubmit={handleSubmit} className={Classes.form} >
              <h1>Login</h1>
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
            <div className={Classes.below_form_txt} >
            Don’t Have an account? 
                <NavLink to='/customer-signup'><span>Signup Now</span></NavLink>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default UserLogin
