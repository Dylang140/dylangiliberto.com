import logo from './logo.svg';
import './App.css';
import Home from './components/home.js'
import About from './components/about.js'
import Projects from './components/projects.js'
import Contact from './components/contact.js'
import NavBar from './components/navBar.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import WeatherProject from './components/weatherProject';
import MessageboardProject from './components/messageboardProject';
import ButtonGUIProject from './components/buttonGUIProject';


function App() {
  return (
    <div className="root">
      <Router className="root">
        <div className='head'>
          <NavBar />
        </div>
        
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/about"} element={<About/>} />
          <Route path={"/projects"}>
            <Route path={"/projects/"} element={<Projects/>} />
            <Route path={"/projects/weather"} element={<WeatherProject />} />
            <Route path={"/projects/messageboard"} element={<MessageboardProject />} />
            <Route path={"/projects/buttonGUI"} element={<ButtonGUIProject />} />
          </Route>
          <Route path={"/contact"} element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jssss</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
