import React from "react";
import "../Footer/footer.css";

export default function Footer() {
  return (
    <footer>
      <nav id="footer">
        <ul>
          <li>
            <a href="https://github.com/Skokartong">
              <i className="fa-brands fa-github" style={{ color: "white" }} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/amanda-o-05620b293/">
              <i className="fa-brands fa-linkedin" style={{ color: "white" }} />
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/user/amidec?si=72f112ef659f482f">
              <i className="fa-brands fa-spotify" style={{ color: "white" }} />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
