import React from "react";
// import { Link } from "react-router-dom";
import "../css/footer.css";

function Footer() {
    return (
       <footer>

        <div>
        <img
            className="MRGI"
            src="https://raw.githubusercontent.com/Harshrb2424/plexus-edit/refs/heads/main/assets/MRGI.png"
            alt="MRGI"
          />
          <img
            className="MRCE"
            src="https://raw.githubusercontent.com/Harshrb2424/plexus-edit/refs/heads/main/assets/MRCE.png"
            alt="MRCE"
          />
          <img
            className="Plexus"
            src="https://raw.githubusercontent.com/Harshrb2424/plexus-edit/refs/heads/main/assets/Plexus.png"
            alt="Plexus"
          />
        </div>
        <div>
          <h3>Our Members</h3>
          <h3>Our Management</h3>
          <h3>Our College</h3>
          <h3>Events</h3>
          <h3>About Us</h3>
          <h3>Contact Us</h3>
          <h3>Clubs</h3>
          <h3>Stories</h3>
        </div>
       </footer>
    );
  }

export default Footer