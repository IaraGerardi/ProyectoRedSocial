import Sidebar from "./Sidebar";
import imgProfile from "../assets/imgUser.jpg";

function Menu() {
  return (
    <div className="container-Menu">
      <div className="profile liSidebar" >
        <img className="imgProfile" src={imgProfile} alt=""/>
    
        <span className="userProfile">@usuario</span>
      </div>
     <Sidebar/>
    </div>
  )
}

export default Menu;
