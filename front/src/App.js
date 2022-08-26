/*React y react router */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*CSS */
import './App.css';
import { Admin } from './components/admin/Admin';
/*Vistas*/
import Home from './components/Home/Home';
import Profile from './components/Profile/profilee';
import Login from './components/Login/Login';
import Error from './components/Error/Error';
import { Welcome } from './components/pageInitial/Welcome';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Cambiar login, allUsers y * cuando vayan haciendo push con los componentes */}
      <Route path='/' element={<Welcome/>}/>
      {/* <Route path='/login' element={<Login/>}/> */}   
      <Route path='/home' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/allUsers' element={<Admin />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    {/* <div className="App">
      <Home/> 
      <Profile />
    </div> */}
    </BrowserRouter>
  );
}

export default App;
