import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import UserSignup from './Pages/UserSignup/UserSignup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/customer-signup' element={<UserSignup/>} />
      </Routes>
    </div>
  );
}

export default App;
