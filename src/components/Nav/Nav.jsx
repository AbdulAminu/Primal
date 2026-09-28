import "./Nav.css"
import { NavLink } from "react-router-dom"

export function Nav(){
    return(
        <div>
            <div className="Navig">
                <NavLink to={"/Dashboard"} className="wo"><i className="fa-solid fa-house" style={{ color: "rgb(70, 8, 8)"}}></i></NavLink>
                 <NavLink to={"/category/Space-wallpapers"}>Space</NavLink>
                 
                <NavLink to={"/category/nature-wallpapers"}>Nature</NavLink>
                <NavLink to={"/category/abstract-wallpapers"}>Abstract</NavLink>
                <NavLink to={"/category/car-wallpapers"}>Cars</NavLink>
                <NavLink to={"/category/dark-wallpapers"}>Dark</NavLink>
                <NavLink to={"/category/Anime-wallpapers"}>Anime</NavLink>
            </div>

            <hr className="yn"></hr>
        </div>
    )
}