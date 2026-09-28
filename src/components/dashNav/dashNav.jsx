import "./dashnav.css"

import { useUser } from '../../context/UserContext';

export function DashNavbar({ onMenuClick }) {
  const { user, loading } = useUser();
  console.log("user:", user, 'loaading:', loading)

  if (loading) return null;

  return (
    <div>
        <div className="prof">
          <div className="nj">
            <button className="menu-btn" onClick={()=>{ console.log('clicked'); alert("Please click anywhere to close");onMenuClick()}} aria-label="Open menu">
              ☰
            </button>

            <p className="itle">PRIMAL WALL<span>PAPERS</span></p>
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