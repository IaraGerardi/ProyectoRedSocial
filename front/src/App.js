/*React y react router */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*CSS */
import './App.css';
import { Admin } from './components/admin/Admin';
/*Vistas*/
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Cambiar login, allUsers y * cuando vayan haciendo push con los componentes */}
      {/* <Route path='/login' element={<Login/>}/> */}   
      <Route path='/home' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/allUsers' element={<Admin />}/>
      {/* <Route path='*' element={<Error/>}/> */}
    </Routes>
    {/* <div className="App">
      <Home/> 
      <Profile />
    </div> */}
    </BrowserRouter>
  );
}

export default App;
