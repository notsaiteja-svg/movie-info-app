import React from "react";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <nav>
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <Link to={"/info"}>Info</Link>
      </div>
      <div>
        <Link to={"/login"}>Login</Link>
      </div>
    </nav>
  );
}

export default Topbar;
