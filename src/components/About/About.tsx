import { Container } from "@/components/About/styles";
import VinayakSingh from "@/assets/VinayakSingh.webp";
import python from "@/assets/python.svg"
import java from "@/assets/java.svg"
import wordpress from "@/assets/wordpress.svg";
import shopify from "@/assets/shopify.svg";
import htmlIcon from "@/assets/html-icon.svg";
import cssIcon from "@/assets/css-icon.svg";
import jsIcon from "@/assets/js-icon.svg";
import reactIcon from "@/assets/react-icon.svg";
import typescriptIcon from "@/assets/typescript-icon.svg";
import vueIcon from "@/assets/vue-icon.svg";
import boostrapIcon from "@/assets/bootstrap-icon.svg";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <div data-aos="fade-right">
          <h2>About me</h2>
        </div>
        <div data-aos="fade-right" data-aos-delay="100">
          <p>
            Hi there! I'm Vinayak, an enthusiastic Software Engineer skilled in web development, machine learning, and scalable software solutions
          </p>
        </div>
        <div data-aos="fade-right" data-aos-delay="200" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I build responsive web applications, fine-tune ML models, and implement robust backend services.
          </p>
        </div>
        <div data-aos="fade-right" data-aos-delay="300">
          <p>
            I also work with CMS platforms like WordPress and Shopify to streamline content management.
          </p>
        </div>
        <div data-aos="fade-right" data-aos-delay="400">
          <div className="education">
            <h3>Education:</h3>
            <h4> Master of Computer Applications (MCA)</h4>
            <p>Vellore Institute of Technology, Chennai | July 2023 - Present</p>
            <p>8.09 CGPA</p>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="550">
          <div className="experience">
            <h3>Experience:</h3><h4>Software Developer</h4>
            <p>KIWIS AND BROWNIES IT SOLUTIONS | October 2024 - Present</p>
            <p>Bangalore, India</p>
          </div>
        </div>

        <div data-aos="fade-right" data-aos-delay="400">
          <h3>Here are my main skills:</h3>
        </div>
        <div className="hard-skills">
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="100">
              <img src={python} alt="python" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="110">
              <img src={java} alt="java" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="120">
              <img src={jsIcon} alt="JavaScript" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="130">
              <img src={reactIcon} alt="React" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="140">
              <img src={typescriptIcon} alt="Typescript" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="150">
              <img src={vueIcon} alt="Vue" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="160">
              <img src={wordpress} alt="Wordpress" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="170">
              <img src={shopify} alt="shopify" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="180">
              <img src={htmlIcon} alt="Html" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="190">
              <img src={cssIcon} alt="Css" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="200">
              <img src={boostrapIcon} alt="bootstrap" />
            </div>
          </div>
        </div>
      </div>
      <div className="about-image">
        <div data-aos="fade-left" data-aos-delay="210">
          <img src={VinayakSingh} alt="Vinayak Singh" />
        </div>
      </div>
    </Container>
  )
}
