import React from "react";
import "../Home/home.css";
import MyPicture from "../../assets/profilepicture.jpg";
import CV from "../../assets/Olving-CV.pdf";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <main>
      <section id="home">
        <div className="home-container">
          <div className="info-item">
            <div className="introduction">
              <h2>Amanda Olving</h2>
              <h3>
                Fullstack <span class="dotnet">.NET</span> Developer, Stockholm
                SE
              </h3>
            </div>
            <div className="redirection">
              <ul>
                <li>
                  <a href="about">Read more</a>
                </li>
                <li>
                  <a href={CV} download="Amanda-Olving_CV">
                    Download CV
                  </a>
                </li>
                <li>
                  <a href="contact">Contact</a>
                </li>
              </ul>
            </div>
            <Footer></Footer>
          </div>

          <div className="profile-item">
            <img className="profile-picture" src={MyPicture} />
          </div>
          <div className="copyright">
            <h3>© Copyright Amanda Olving 2024</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
