import { useState } from 'react';

import Menu from './components-Home/Menu';
import Posts from './components-Home/Posts';
import EditUser from '../Profile/popUpForm';
import "./Home.css";

function Home() {
  // Estado para ver si se ve el pop up o no
  const [popUp, setPopUp] = useState(false);

  return (



    <div className="container-Home">
      <Menu />
       {/* Le paso a posts la funcion de cambiar el estado */}
      <Posts setPopUp={setPopUp}/>
      {/* Render condicional del popUp al cual le paso desde que vista lo estoy llamando, para que sepa si renderizar el de postear o el de editar perfil*/}
      {popUp ? <EditUser father='home' setPopUp={setPopUp} /> : null}
    </div>
  )
}

export default Home;
