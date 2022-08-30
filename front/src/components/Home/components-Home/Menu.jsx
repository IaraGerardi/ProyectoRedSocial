import Sidebar from "./Sidebar";
import imgProfile from "../assets/imgUser.jpg";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="container-Menu">
      <div className="profile liSidebar" >
        <Link to={'/profile/hola'} > <img className="imgProfile" src={imgProfile} alt=""/></Link>
          
        <span className="userProfile">@usuario</span>
      </div>
     <Sidebar/>
    </div>
  )
}

export default Menu;
