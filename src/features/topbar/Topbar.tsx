import React from "react";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <nav className="topbar-glass">
      <div>
        <Link to={"/"} className="topbar-link">
          Home
        </Link>
      </div>
      <div>
        <Link to={"/info"} className="topbar-link">
          Info
        </Link>
      </div>
      <div>
        <Link to={"/login"} className="topbar-link">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Topbar;
