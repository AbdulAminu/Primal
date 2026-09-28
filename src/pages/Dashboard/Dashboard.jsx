
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SideBar } from "../../components/sidebar/sidebar";
import { DashNavbar } from "../../components/dashNav/dashNav";

import "./Dashboard.css";

import avbg from "../../assets/avbg.mp4";
import persn from "../../assets/persn.jpeg";
import ccar from "../../assets/ccar.jpg";
import nature from "../../assets/nature.jpg";
import d from "../../assets/d.jpg";
import Anime from "../../assets/Anime.jpg";
import abs from "../../assets/abs.jpg";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate= useNavigate()

  return (
    <div className="app-shell">
      <DashNavbar onMenuClick={() => setSidebarOpen(true)} />

      <div className="body-row">
        <SideBar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="main-content">
          <section>
            <div className="sec-vid">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="vv -z-10"
              >
                <source src={avbg} type="video/mp4" />
              </video>

              <div className="verl">
                <section className="verl-txt">
                  <h1 className="qw">
                    PRIMAL WALL<span>PAPERS</span>
                  </h1>

                  <div className="spc">
                    <h3 className="wq">Give your screen</h3>
                    <h3 className="e">a new vibe</h3>
                  </div>

                  <p className="wwq">
                    Discover and download stunning wallpapers for your mobile
                    devices
                  </p>

                  <div className="lq">
                    <p>🎖️ High quality</p>
                    <p>⚡ Fast download</p>
                    <p>🛡️ Easy to use</p>
                  </div>
                </section>
              </div>
            </div>
          </section>

          <div className="divider">
            <hr className="bz" />
            <span>Categories</span>
            <hr />
          </div>

          <section className="vvert">
  <div className="pi">
    <button className="bq" onClick={() => navigate("/category/Space-Wallpapers")}>
      <img src={persn} alt="AI" className="icp" />
      <p className="p">Space <br></br>Wallpapers</p>
    </button>
  </div>

  <div className="pi">
    <button className="bq"onClick={() => navigate("/category/Abstract-Wallpapers")}>
      <img src={abs} alt="Abstract" className="icp" />
      <p className="p">Abstract <br></br> Wallpapers</p>
    </button>
  </div>

  <div className="pi">
    <button className="bq" onClick={() => navigate("/category/Nature-Wallpapers")}>
      <img src={nature} alt="Nature" className="icp" />
      <p className="p">Nature <br></br> Wallpapers</p>
    </button>
  </div>

  <div className="pi">
    <button className="bq" onClick={() => navigate("/category/Car-Wallpapers")}>
      <img src={ccar} alt="Cars" className="icp" />
      <p className="p">Car <br></br> Wallpapers</p>
    </button>
  </div>

  <div className="pi">
    <button className="bq" onClick={() => navigate("/category/Anime-Wallpapers")}>
      <img src={Anime} alt="Anime" className="icp" />
      <p className="p">Anime <br></br>Wallpapers</p>
    </button>
  </div>

  <div className="pi">
  <button
  className="bq"
  onClick={() => navigate("/category/Dark-Wallpapers")}
>
  <img src={d} alt="Dark" className="icp" />
  <p className="p">
    Dark <br /> Wallpapers
  </p>
</button>
</div>
</section>
        </main>
      </div>
    </div>
  );
}
