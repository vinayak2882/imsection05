
import './App.css';
import Navbar from './Componenet/Navbar';

import All from './Pages/All';
import Html from './Pages/Html';
import Css from './Pages/Css';
import Javascript from './Pages/Javascript';

function App() {

  let componenet 
  switch (window.location.pathname) {
    case "/":
      componenet = <All/>
      break;
    case "/html":
      componenet = <Html/>
      break;
    case "/css":
      componenet = <Css/>
      break;
    case "/javascript":
      componenet = <Javascript/>
      break;
  
   
  }
  return (
    <div className="App">
     
  
     <Navbar/>
    {componenet}
    </div>
  );
}

export default App;
