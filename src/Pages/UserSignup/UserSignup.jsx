import React, {useState} from 'react'
import Classes from './styles/style.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import googleIcon from '../../utils/icons/googleIcon.png'
import AnimHeading1 from '../../Components/ScrollEffect/AnimHeading1';

function UserSignup() {
  const Navigate = useNavigate();
  const [formdata,setformdata] = useState({
    fullName: '',
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
    Navigate('/customer-login');
  }
  return (
    <>
      <AnimHeading1>
        <section className={Classes.s1}>
        <div>
          <div className={Classes.left_con} >
            <div className={Classes.txt_con} >
              <h1>Log in or Sign up</h1>
              <h4>You can click on following buttons to switch.</h4>
            </div>
            <div className={Classes.btn_con} >
              <NavLink to='/customer-signup' >
                <button className={Classes.btn1} >
                  <h5>Signup</h5>
                </button>
              </NavLink>
              <NavLink to='/customer-login' >
                <button className={Classes.btn2} >
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
              <h1>Sign Up</h1>
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
                placeholder='Full Name'
                name='fullName'
                type='text'
                value={formdata.fullName}
                onChange={changeValue}
                required
              />
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
                <NavLink to='/customer-login'>Already have an account?</NavLink>
              </h5>
            </form>
            <div className={Classes.below_form_txt} >
              Login instead here? 
                <NavLink to='/customer-login'><span>Login Now</span></NavLink>
            </div>
          </div>
        </div>
        </section> 
      </AnimHeading1>
    </>
  )
}

export default UserSignup
