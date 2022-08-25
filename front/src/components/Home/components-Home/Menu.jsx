import Sidebar from "./Sidebar";


function Menu() {
  return (
    <div className="container-Menu">
      <div className="profile">
        <div className="imgprofile"></div>
    
        <span>@usuario</span>
      </div>
     <Sidebar/>
    </div>
  )
}

export default Menu;
