import { NavLink } from "react-router-dom";
import ong from "../../assets/ong.jpeg";
import "./NavBar.css";
import { useState } from "react";
export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen)
  return (
    <nav>
      
      <div
        className="title-BLOCK"
      >
        <img src={ong
        } alt="Company logo" className="imgq" />
        <h1 className="title">PRIMAL WALL<span>PAPERS</span></h1>
      </div>
      <button  onClick={() => {  setMenuOpen(!menuOpen)}}>
        <i
          className="fa-solid fa-bars fa-2xl menu"
          style={{ color: "rgb(226, 224, 224)" }}
        ></i>
      </button>
      <div className="ul">
      <ul className={menuOpen ? "open" : ""} >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Contact-Info">Contact Info</NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
}
