import "./dashnav.css";

import { useUser } from "../../context/UserContext";

export function DashNavbar({ onMenuClick }) {
  const { user, loading } = useUser();
  console.log("user:", user, "loaading:", loading);

  if (loading) return null;

  return (
    <div>
      <div style={{ color: "red", fontSize: "20px" }}>
        TOKEN: {localStorage.getItem("token") || "NO TOKEN"}
      </div>
      <div style={{ color: "red", fontSize: "30px" }}>
        TEST {user?.username}
      </div>
      <div className="prof">
        <div className="nj">
          <button
            className="menu-btn"
            onClick={() => {
              console.log("clicked");
              alert("Please click anywhere to close");
              onMenuClick();
            }}
            aria-label="Open menu"
          >
            ☰
          </button>

          <p className="itle">
            P WALL<span>PAPERS</span>
          </p>
        </div>
        {user && (
          <>
            <div className="xb">
              <span className="username">👤{user.username}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
