import Home from './pages/Home';
import About from './pages/About';
import Portafolio from './pages/Portafolio';
import Contact from './pages/Contact';
import {Switch , Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path ='/'>
         <Home/>
       </Route>
       <Route exact path ='/about'>
          <About/>
       </Route>
       <Route exact path ='/portafolio'>
         <Portafolio/>
       </Route>
       <Route exact path ='/contact'>
         <Contact/>
       </Route>
     </Switch>
    </div>
  );
}

export default App;
