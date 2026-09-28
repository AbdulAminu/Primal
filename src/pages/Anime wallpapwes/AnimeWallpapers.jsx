import { useEffect, useState } from "react";
import axios from "axios";
import "./AnimeWallpapers.css";
import { DashNavbar } from "../../components/dashNav/dashNav";
import { SideBar } from "../../components/sidebar/sidebar";
import { Nav } from "../../components/Nav/Nav";
import Loader from "../../components/loader/loader";

export const AnimeWallpapers = () => {
  const [selectedWallpaper, setSelectedWallpaper] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [wallpapers, setWallpapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWallpapers = async () => {
      try {
        const response = await axios.get(
          "https://my-app-eta-steel-94.vercel.app/api/wallpapers/category/Anime",
        );

        setWallpapers(response.data.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load wallpapers");
      } finally {
        setLoading(false);
      }
    };

    fetchWallpapers();
  }, []);
  const downloadWallpaper = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;
      link.download = "primal-wallpaper.jpg";

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };
  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <Loader />
        </div>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="app-shel">
      <DashNavbar onMenuClick={() => setSidebarOpen(true)} />

      <div className="bod-row">
        <SideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="ai-wallpaper-page">
          <Nav />

          <h1 className="wall-head">
            Anime Wall<span>papers</span>
          </h1>

          <div className="wallpaper-grid">
            {wallpapers.map((wallpaper) => (
              <div className="wallpaper-crd" key={wallpaper._id}>
                <img src={wallpaper.image} alt="Anime wallpaper" />

                <div className="wallpaper-actions">
                  <button onClick={() => setSelectedWallpaper(wallpaper.image)}>
                    <i
                      className="fa-solid fa-magnifying-glass fa-l"
                      style={{ color: "rgb(1, 1, 1)" }}
                    ></i>
                  </button>

                  <button onClick={() => downloadWallpaper(wallpaper.image)}>
                    <i
                      className="fa-solid fa-download"
                      style={{ color: "rgb(28, 27, 27)" }}
                    ></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {selectedWallpaper && (
            <div className="preview-overlay">
              <div className="preview-box">
                <button
                  className="close-preview"
                  onClick={() => setSelectedWallpaper(null)}
                >
                  ✕
                </button>

                <img src={selectedWallpaper} alt="Wallpaper preview" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
