import { NavLink } from "react-router-dom";
import "./sidebar.css";

export function SideBar({ isOpen, onClose }) {
  console.log("sidebar received isOpen:", isOpen);
  return (
    <>
      {isOpen && <div className="sidebar-backdrop" onClick={onClose} />}

      <div className={`side ${isOpen ? "open" : ""}`}>
        <div className="contenta">
          <NavLink to="/Dashboard" end onClick={onClose}  className="category-link">
            <i
              className="fa-solid fa-house"
              style={{ color: "rgb(161, 27, 27)",   marginRight: "6px", }}
            ></i>
            {""} Home
          </NavLink>
          <NavLink to="/about" onClick={onClose}>
            About
          </NavLink>
          <NavLink to="/favourites" onClick={onClose}  className="category-link">
            <i
              className="fa-solid fa-star"
              style={{ color: "rgb(161, 27, 27)",  marginRight: "6px",}}
            ></i>
            Favourites
          </NavLink>
        </div>
        <br />
        <hr />
        <br />
        <div className="contentb">
          <p className="dy">Categories</p>
          <br></br>
          <NavLink to="/category/Space-Wallpapers" onClick={onClose}  className="category-link">
            <i className="fa-solid fa-light fa-shuttle-space"style={{ color: "rgb(161, 27, 27)",   marginRight: "6px",}}></i>{" "}
            {""} {""} {""} {""}
            Space
          </NavLink>
          <NavLink to="/category/nature-wallpapers" onClick={onClose} className="category-link">
            <i
              className="fa-solid fa-mountain-sun fa-l"
              style={{ color: "rgb(161, 27, 27)",   marginRight: "6px",}}
            ></i>
            
            Nature
          </NavLink>
          <NavLink to="/category/abstract-wallpapers" onClick={onClose}  className="category-link">
            <i
              className="fa-solid fa-circle-nodes fa-l"
              style={{ color: "rgb(161, 27, 27)" ,  marginRight: "6px",}}
            ></i>
            Abstract
          </NavLink>
          <NavLink to="/category/car-wallpapers" onClick={onClose}  className="category-link">
            <i
              className="fa-solid fa-car fa-l"
              style={{ color: "rgb(161, 27, 27)",  marginRight: "6px", }}
            ></i>
            Cars
          </NavLink>
          <NavLink to="/category/dark-wallpapers" onClick={onClose}  className="category-link">
            <i
              className="fa-solid fa-circle-half-stroke fa-l"
              style={{ color: "rgb(161, 27, 27)",   marginRight: "6px", }}
            ></i>
            Dark
          </NavLink>
          <NavLink to="/category/Anime-Wallpapers" onClick={onClose}  className="category-link">
            <i
              className="fa-brands fa-d-and-d"
              style={{ color: "rgb(161, 27, 27)",   marginRight: "6px", }}
            ></i>
            Anime
          </NavLink>
        </div>
        <br></br>
        <div className="bt">
          <h1>
            PRIMAL <br></br> WALL<span>PAPERS</span>
          </h1>
        </div>
      </div>
    </>
  );
}
