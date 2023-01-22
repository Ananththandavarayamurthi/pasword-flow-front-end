import './App.css'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserContext from "./Context/UserContext";
import useFindUser from "./Hooks/useFindUser";
import Home from "./Home"
import Login from "./Components/Login";
import Register from "./Components/Register";
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import Header from './Components/Header';

function App() {
  const [user, setUser, loading] = useFindUser();
  const[data,setData]=useState("")
  
  


  
  
  return (
    <UserContext.Provider value={{user, setUser, loading}}>
      <div>
          <Header />
          <Routes>
            
              <Route path='/login' element={<Login data={{data,setData}}/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/passwordReset" element={<ResetPassword />} />
              <Route path="/home" element={<Home data={{setData,data}}/>}/>
    
            
          </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
