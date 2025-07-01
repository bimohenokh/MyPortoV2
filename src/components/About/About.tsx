import {Container} from "@/components/About/styles";
import MyImage from "@/assets/images/BimoHenokhBarata.jpg";
import python from "@/assets/python.svg"
import java from "@/assets/java.svg"
import htmlIcon from "@/assets/html-icon.svg";
import cssIcon from "@/assets/css-icon.svg";
import jsIcon from "@/assets/js-icon.svg";
import reactIcon from "@/assets/react-icon.svg";
import typescriptIcon from "@/assets/typescript-icon.svg";
import boostrapIcon from "@/assets/bootstrap-icon.svg";
import golangIcon from "@/assets/golang-icon.svg";
import djangoIcon from "@/assets/django-icon.svg";
import springIcon from "@/assets/spring-icon.svg";
import fastApiIcon from "@/assets/fastapi-icon.svg";
import nextJsIcon from "@/assets/nextjs-icon.svg";
import tailwindIcon from "@/assets/tailwind-icon.svg";
import nginxIcon from "@/assets/nginx-icon.svg";
import dockerIcon from "@/assets/docker-icon.svg";
import podmanIcon from "@/assets/podman-icon.svg";
import googleCloudIcon from "@/assets/googlecloud-icon.svg";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        {/*TODO about me textnya ntar aja*/}
        <div data-aos="fade-right">
          <h2>About me</h2>
        </div>
        {/*TODO paragraf about me masih jelek*/}
        <div data-aos="fade-right" data-aos-delay="100">
          <p>
            Hi there! I'm Bimo, an enthusiastic Software Engineer skilled in web development, dev ops development, and
            scalable software solutions
          </p>
        </div>
        <div data-aos="fade-right" data-aos-delay="200" style={{marginTop: "2rem", marginBottom: "2rem"}}>
          <p>
            Experienced in building web applications and cloud solutions through my internship at PT. Inti Utama Solusindo and Bangkit Academy. I specialize in creating scalable backend services and efficient deployment pipelines while continuously learning new technologies.
          </p>
        </div>
        {/*TODO nanti coba pake*/}
        {/*<div data-aos="fade-right" data-aos-delay="300">*/}
        {/*  <p>*/}
        {/*    Experienced in building web applications and cloud solutions through my internship at PT. Inti Utama Solusindo and Bangkit Academy. I specialize in creating scalable backend services and efficient deployment pipelines while continuously learning new technologies.*/}
        {/*  </p>*/}
        {/*</div>*/}

        <div data-aos="fade-right" data-aos-delay="400">
          <div className="education">
            <h3>Education:</h3>
            <h4>Bachelor of Computer Science</h4>
            <p>Universitas Indonesia, Depok | August 2021 - September 2025</p>
          </div>
        </div>

        <div data-aos="fade-right" data-aos-delay="550">
          <div className="experience">
            <h3>Experience:</h3>
            <div style={{marginBottom: "2rem"}}>
              <h4>Backend Developer | Internship</h4>
              <p>PT. Inti Utama Solusindo (Pharos Group) | August 2024 - March 2025</p>
              <p>Jakarta, Indonesia</p>
            </div>
            <div style={{marginBottom: "2rem"}}>
              <h4>Cloud Computing Cohort | Apprenticeship</h4>
              <p>Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka | February 2024 - July 2024</p>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-right" data-aos-delay="400">
          <h3>Here are my main skills:</h3>
        </div>
        <div className="hard-skills">
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="100">
              <img src={python} alt="python"/>
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="110">
              <img src={java} alt="java"/>
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="120">
              <img src={jsIcon} alt="JavaScript"/>
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="140">
              <img src={typescriptIcon} alt="Typescript"/>
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="140">
              <img src={golangIcon} alt="Golang"/>
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="180">
              <img src={htmlIcon} alt="Html"/>
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="190">
              <img src={cssIcon} alt="Css"/>
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="130">
              <img src={djangoIcon} alt="Django"/>
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="130">
              <img src={springIcon} alt="Spring"/>
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="130">
              <img src={fastApiIcon} alt="FastApi"/>
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="130">
              <img src={reactIcon} alt="React"/>
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="130">
              <img src={nextJsIcon} alt="NextJs"/>
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="130">
              <img src={tailwindIcon} alt="Tailwind"/>
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="200">
              <img src={boostrapIcon} alt="bootstrap"/>
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="130">
              <img src={nginxIcon} alt="Nginx"/>
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="130">
              <img src={dockerIcon} alt="Docker"/>
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="130">
              <img src={podmanIcon} alt="Podman"/>
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="130">
              <img src={googleCloudIcon} alt="Google Cloud"/>
            </div>
          </div>
        </div>
      </div>
      <div className="about-image">
        <div data-aos="fade-left" data-aos-delay="210">
          <img src={MyImage} alt="Bimo Henokh Barata"/>
        </div>
      </div>
    </Container>
  )
}
