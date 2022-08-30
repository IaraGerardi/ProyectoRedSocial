import Menu from './components-Home/Menu';
import Posts from './components-Home/Posts';

import "./Home.css";

function Home() {
  return (
    <div className='boxHome'>
      <div className="container-Home">
        <Menu view='home' />
        <Posts />
      </div>
    </div>
  )
}

export default Home;
