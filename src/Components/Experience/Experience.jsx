import MyResume from "./experience.json";
import "./experience.css";

export default function Experience() {
  return (
    <main>
      <section id="experience">
        <div className="experience-container">
          <div className="skills-title">
            <h2>
              <span>Fullstack</span> Development
            </h2>
          </div>

          <div className="skills">
            <div className="backend">
              <h3>
                <i className="fa-solid fa-gears"></i> Backend
              </h3>
              <ul>
                {MyResume.backendSkills.map((bac, index) => {
                  return (
                    <li key={index}>
                      <i className="fa-solid fa-square-check"></i> {bac.skill}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="frontend">
              <h3>
                <i className="fa-solid fa-code"></i> Frontend
              </h3>
              <ul>
                {MyResume.frontendSkills.map((fro, index) => {
                  return (
                    <li key={index}>
                      <i className="fa-solid fa-square-check"></i> {fro.skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="experience">
            <div className="education">
              <h3>
                Education <i className="fa-solid fa-school"></i>
              </h3>
              <ul>
                {MyResume.education.map((edu, index) => {
                  console.log(edu);
                  return (
                    <li key={index}>
                      <span>{edu.institution}</span> - {edu.major} <br /> (
                      {edu.date})
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="work">
              <h3>
                Work Experience <i className="fa-solid fa-briefcase"></i>
              </h3>
              <ul>
                {MyResume.experience.map((exp, index) => {
                  console.log(exp);
                  return (
                    <li key={index}>
                      <span>{exp.company}</span> - {exp.role} <br /> ({exp.date}
                      )
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
