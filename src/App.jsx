import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUpPage/SignUp";
import Login from "./pages/LoginPage/Login";
import { HomePage } from "./pages/HomePage/Hompage";
import { About } from "./pages/AboutPage/About";
import { Contact } from "./pages/ContactInfo/contact";
import { Toaster } from "sonner";
import Admin from "./pages/AdminPage/Admin";
import Dashboard from "./pages/Dashboard/Dashboard";
import { AbstractWallpapers } from "./pages/AbstactWallpapers/AbstractWall";
import { SpaceWallpapers } from "./pages/SpaceWallpapers/SpaceWallpapers";
import { CarsWallpapers } from "./pages/carsWallpaper/CarsWallpapers";
import { DarkWallpapers } from "./pages/DarkWallpapers/DarkWallpapers";
import { AnimeWallpapers } from "./pages/Anime wallpapwes/AnimeWallpapers";
import { NatureWallpapers } from "./pages/NatureWallpapers/NatureWallpapers";
function App() {
  return (
    <div>
       <Toaster richColors position="top-right" />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={< HomePage/>} />
          <Route path="/create-account" element={<SignUp />} />
          <Route path="/account-login" element={<Login />} />
          <Route path="/About" element={<About/>}/>
          <Route path="/contact-info" element={<Contact/>}/>
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/category/Abstract-Wallpapers" element={<AbstractWallpapers/>}/>
          <Route path="/category/Space-Wallpapers" element={<SpaceWallpapers/>}/>
          <Route path="/category/Car-Wallpapers" element={<CarsWallpapers/>}/>
          <Route path="/category/Dark-Wallpapers" element={<DarkWallpapers/>}/>
          <Route path="/category/Anime-Wallpapers" element={<AnimeWallpapers/>}/>
          <Route path="/category/Nature-Wallpapers" element={<NatureWallpapers/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
