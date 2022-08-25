import Sidebar from "./Sidebar";


function Menu() {
  return (
    <div className="container-Menu">
      <div className="profile">
        <div className="imgProfile"></div>
    
        <span className="userProfile">@usuario</span>
      </div>
     <Sidebar/>
    </div>
  )
}

export default Menu;
