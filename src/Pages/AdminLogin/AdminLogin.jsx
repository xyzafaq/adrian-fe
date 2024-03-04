import React, {useState} from 'react'
import { auth,provider } from '../../config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Classes from './styles/style.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import googleIcon from '../../utils/icons/googleIcon.png'
import AnimHeading1 from '../../Components/ScrollEffect/AnimHeading1';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function AdminLogin() {
  const passwordRegex = /^(?=.*[A-Z]).{8,}$/;
  const [validFail,setvalidFail] = useState(false);
  const Navigate = useNavigate();
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
      if (!passwordRegex.test(formdata.password)) {
        setvalidFail(true);
        setTimeout(() => {
          setvalidFail(false);
        }, 3000);
        return;
      }
      Navigate('/admin-manager');
  }
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user);
        Navigate('/admin-manager');
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Google sign-in error:", errorCode, errorMessage);
    });
  };
  return (
    <>
      <>
        {/* <Snackbar open={open1} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
          <Alert severity="success" sx={{ width: '100%' }}>
            Product updated successfully!
          </Alert>
        </Snackbar> */}
        <Snackbar open={validFail} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
          <Alert severity="error" sx={{ width: '100%' }}>
            Password must be at least 8 characters long and contain at least one capital letter
          </Alert>
        </Snackbar>
      </>
      <AnimHeading1>
        <section className={Classes.s1}>
        <form onSubmit={handleSubmit} className={Classes.form} >
          <h1>Admin Login</h1>
          <div className={Classes.google_con} onClick={handleGoogleSignIn} >
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
      </AnimHeading1>
    </>
  )
}

export default AdminLogin
