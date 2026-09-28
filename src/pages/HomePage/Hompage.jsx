import Vid from "../../assets/Vid.mp4";
import { NavBar } from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";

import "./HomePage.css";
export function HomePage() {
  return (
    <div className="min-h-screen Home-page">
      
      <NavBar/>
      <div className="vidCont">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="bg  w-full object-cover -z-10"
        >
          <source src={Vid} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <section className="main-text">
          <div className="headCont">
            <h1 className="hh">
              Hey{" "}
              <i
                className="fa-solid fa-hand fa-sm slow-wave"
                style={{ color: "rgb(200, 198, 198)" }}
              ></i>
            </h1>
            <h1 className="head">
              Welcome to Primal Wall<span>papers</span>{" "}
              {/* <i
                className="fa-solid fa-horse fa-bounce fa-flip-horizontal fa-2xs"
                style={{ color: "rgb(200, 198, 198)", transform: "scaleX(-1)" }}
              ></i> */}
            </h1>
          </div>
          <div className="subCont">
            <h2 className="sub">
              Give Your Screen A New Vibe
            </h2>
          </div>
          <div className="submCont">
            <h2 className="subm">
              <span>Discover. Download. Transform your screen...</span>
            </h2>
          </div>
        </section>
      </div>
      <div className="scrollCont">
        <section className="small-boxes">
          <div className="boxa box">
  <h1>🖼️ Wallpaper Library</h1>
  <h2>Lots of wallpapers in one place.</h2>
</div>

<div className="boxb box">
  <h1>💎 High Quality</h1>
  <h2>Cool wallpapers for your screen.</h2>
</div>

<div className="boxc box">
  <h1>🔥 Top Picks</h1>
  <h2>Discover wallpapers you'll love.</h2>
</div>

<div className="boxd box">
  <h1>📱 Mobile Device</h1>
  <h2>Wallpapers for mobile devices.</h2>
</div>

<div className="boxe box">
  <h1>✨ New Wallpapers</h1>
  <h2>Fresh wallpapers added regularly.</h2>
</div>
        </section>
      </div>
     
      <hr className=".hr"></hr>
      <section className="btnCont">
        <Link to="/create-account" className="btna">
          Sign Up <i className="fa-solid fa-arrow-right fa-beat fa-xl"></i>
        </Link>
        <Link to="/account-login" className="btna">
          Login <i className="fa-solid fa-arrow-right fa-beat fa-xl"></i>
        </Link>
      </section>
    </div>
  );
}
