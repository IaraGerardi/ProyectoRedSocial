import Sidebar from "./Sidebar";
import imgProfile from "../assets/imgUser.jpg";
import { Link } from "react-router-dom";

// View indica en que vista esta el componente asi puede redirigir a perfil de usuario o a home segun cual sea
function Menu({ view }) {
  return (
    <div className="container-Menu">
      <div className="profile liSidebar" >
        {view == 'profile' ?
          <Link to={'/home'} >
            <svg className="imgProfile" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" /><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" /></svg>
          </Link>
          : view === 'home' ?
          // este link to habria que actualizarlo con info que venga desde el back
            <Link to={'/profile/hola'} >
              <img className="imgProfile" src={imgProfile} alt="" />
            </Link>
            : null}
        <span className="userProfile">{ view === 'profile' ? 'Home' : view === 'home' ? '@usuario' : null}</span>
      </div>
      <Sidebar />
    </div>
  )
}

export default Menu;
