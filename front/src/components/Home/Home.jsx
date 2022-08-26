import { useState } from 'react';

import Menu from './components-Home/Menu';
import Posts from './components-Home/Posts';

import "./Home.css";

function Home() {

  

  return (



    <div className="container-Home">
          <Menu />
     
       
          <Posts />

    
    </div>
  )
}

export default Home;
