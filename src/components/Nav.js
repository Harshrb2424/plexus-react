import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <div>
          <img src="/Plexus Logo.png" alt="Plexus Logo" />
          <h2>Plexus</h2>
        </div>
      </Link>
      <div className="links">
        <h3>
          <Link to="/clubs">Clubs</Link>
        </h3>
        <h3>
          <Link to="/events">Events</Link>
        </h3>
        <h3>
          <Link to="/gallery">Gallery</Link>
        </h3>
      </div>
    </nav>
  );
}

export default Nav;
