import './App.css'; 
import { BrowserRouter, Route} from 'react-router-dom';
import About from './Components/HomePage/About/About';
import Contact from './Components/HomePage/Contact/Contact';
import HomePage from './Components/HomePage/HomePage';
import Skills from './Components/HomePage/Skills/Skills';
import Project from './Components/HomePage/Project/Project';
import NavBar from './Components/HomePage/NavBar/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
      
     
      <NavBar/>
      <Route path="/" exact component={HomePage} />
       <Route path="/about" exact component={About} />
       <Route path="/project" exact component={Project} />
       <Route path="/skills" exact component={Skills} />
       <Route path="/contact" exact component={Contact} />
      </div>
       
      </BrowserRouter>
       
    </div>
  );
}

export default  App;
