import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "../Portfolio/portfolio.css";
import Music from "../../assets/music.jpg";
import Bank from "../../assets/bank.jpg";
import School from "../../assets/school.jpg";

export default function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://api.github.com/users/Skokartong/repos";

  const projectNames = ["MusicAPI", "SchoolDBProject", "The_Bank"];

  const repositoryImages = {
    MusicAPI: Music,
    SchoolDBProject: School,
    The_Bank: Bank,
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const filteredRepos = data
          .filter((repo) => projectNames.includes(repo.name))
          .slice(0, 3)
          .map((repo) => ({
            ...repo,
            image: repositoryImages[repo.name] || null,
          }));
        setRepos(filteredRepos);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      });
  }, []);

  return (
    <main>
      {isLoading ? (
        <div className="spinner-container">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="modal-container">
          {repos.map((repo) => (
            <section id="portfolio">
              <div
                className="card"
                style={{
                  backgroundImage: `url(${repositoryImages[repo.name]})`,
                }}
              >
                <div className="content">
                  <h2 className="title">{repo.name}</h2>
                  <p className="copy">{repo.description}</p>
                </div>
                <Button
                  className="btn"
                  href={repo.html_url}
                  variant="primary"
                  style={{
                    fontFamily: "IBM Plex Mono, sans-serif",
                    backgroundColor: "white",
                    padding: "10px",
                    color: "black",
                    border: "1px solid black",
                  }}
                >
                  Visit Repository
                </Button>
              </div>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}
