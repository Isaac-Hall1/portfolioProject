import Home from './component/home/home';
import NavBar from './component/navbar/navbar'
import Projects from './component/Projects/projects';
import Contact from './component/Contact/contact';
import Experience from './component/Experience/experience'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <NavBar/>
      </div>
      <div className="container">
        <Home className="section"/>
        <Projects className="section" />
        <Experience className="section" />
        <Contact className="section" />
      </div>
    </div>
  );
}

export default App;
