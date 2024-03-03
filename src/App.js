import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import UserSignup from './Pages/UserSignup/UserSignup';
import UserLogin from './Pages/UserLogin/UserLogin';
import AdminLogin from './Pages/AdminLogin/AdminLogin';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/customer-signup' element={<UserSignup/>} />
        <Route path='/customer-login' element={<UserLogin/>} />
        <Route path='/admin-login' element={<AdminLogin/>} />
      </Routes>
    </div>
  );
}

export default App;
