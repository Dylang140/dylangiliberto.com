import '../App.css';
import { NavLink } from "react-router-dom";

export default function NavBar() {
  let time = new Date().getHours();
  let greeting = "";

  if(time > 4 && time < 12) {
    greeting = "Morning";
  }
  else if(time >= 12 && time < 5) {
    greeting = "Afternoon";
  }
  else if(time >= 5 && time < 8) {
    greeting = "Evening";
  }
  else {
    greeting = "Night";
  }
  console.log("Hours:" + time);
  return (
    <div className='navDiv'>
      <ul className='nav'>
        <NavLink to="/" className={({ isActive }) => isActive ? 'navlink navActive navleft' : 'navlink navnotactive navleft'}>
          <h2>Dylan Giliberto<span className='blinking'>_</span></h2>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'navlink navActive' : 'navlink navnotactive'}>
          <h2>Contact<span className='blinking'>_</span></h2>
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'navlink navActive' : 'navlink navnotactive'}>
          <h2>Projects<span className='blinking'>_</span></h2>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'navlink navActive' : 'navlink navnotactive'}>
          <h2>About<span className='blinking'>_</span></h2>
        </NavLink>
      </ul>
    </div>
  );
}