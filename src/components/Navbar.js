import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav">
      <div>Logo</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/post">Posts</Link>
      </div>
    </div>
  );
}

export default Navbar;
