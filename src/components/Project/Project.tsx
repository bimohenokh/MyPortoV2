import {Container} from "@/components/Project/styles";
import githubIcon from "@/assets/github.svg"
import externalLink from "@/assets/external-link.svg"

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <div className="project" data-aos="flip-left">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                 stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://github.com/bimohenokh/velajar-fe" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub"/>
              </a>
              <a href="https://github.com/bimohenokh/velajar-be" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub"/>
              </a>
              <a href="https://velajar.cs.ui.ac.id" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site"/>
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Velajar: 5E based learning assistance application</h3>
            <p>
              Developed a 5E based learning assistance application using Next.js and Django, deployed on a Dockerized
              environment with Nginx and PostgreSQL, enabling students to engage in interactive learning experiences
              through a user-friendly interface, while leveraging server-side rendering for improved performance and
              SEO optimization.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>NextJs</li>
              <li>Django</li>
              <li>Docker</li>
              <li>Nginx</li>
              <li>PostgreSQL</li>
            </ul>
          </footer>
        </div>

        <div className="project" data-aos="flip-left">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                 stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://github.com/silang-C241-PS520/silang-api" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site"/>
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Silang: Sign language translation mobile app</h3>
            <p>
              Develop an API for Silang Mobile App using FastAPI and PostgreSQL, deployed in Google Cloud Platform,
              enabling easy translation of Indonesian Sign Language (BISINDO) to Indonesian text and vice versa.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>FastAPI</li>
              <li>PostgreSQL</li>
              <li>Docker</li>
              <li>Google Cloud Run</li>
            </ul>
          </footer>
        </div>

        <div className="project" data-aos="flip-left">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                 stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://github.com/bimohenokh/HelloTeach-PrivateChat/" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site"/>
              </a>
              <a href="https://github.com/bimohenokh/HelloTeach-be/" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site"/>
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Helloteach: Real-time consultation chat platform for student and teacher</h3>
            <p>
              Develop a learning consultation platform with real-time chat functionality using ReactJS, Springboot and
              Sendbird, enabling students to connect with teachers for personalized learning support and guidance,
              enhancing the overall educational experience through seamless communication and collaboration.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>ReactJs</li>
              <li>Sendbird</li>
              <li>SpringBoot</li>
              <li>PostgreSQL</li>
            </ul>
          </footer>
        </div>

        <div className="project" data-aos="flip-left">
          <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                 stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://github.com/bimohenokh/RentSpace-auth/" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site"/>
              </a>
            </div>
          </header>
          <div className="body">
            <h3>RentSpace: Space rental microservice app</h3>
            <p>
              Developed an authentication system for RentSpace microservice architecture system using Springboot,
              Spring Security with JWT and PostgreSQL, enabling secure user authentication and authorization for a space
              rental platform.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Springboot</li>
              <li>Spring Security</li>
              <li>JWT</li>
              <li>PostgreSQL</li>
            </ul>
          </footer>
        </div>

      </div>
    </Container>
  );
}