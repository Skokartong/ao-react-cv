import React from "react";
import { Link } from "react-router-dom";
import "../Footer/footer.css";

export default function Footer() {
  return (
    <footer>
      <nav id="footer">
        <ul>
          <li>
            <Link to="https://github.com/Skokartong">
              <i className="fa-brands fa-github" style={{ color: "white" }} />
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/amanda-o-05620b293/">
              <i className="fa-brands fa-linkedin" style={{ color: "white" }} />
            </Link>
          </li>
          <li>
            <Link to="https://open.spotify.com/user/amidec?si=72f112ef659f482f">
              <i className="fa-brands fa-spotify" style={{ color: "white" }} />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
