import {BrowserRouter} from "react-router-dom"
import Illustration from "@/assets/illustration.svg"
import {NavHashLink} from "react-router-hash-link"
import linkedin from '@/assets/linkedin.svg'
import githubIcon from '@/assets/github.svg'
import whatsapp from '@/assets/whatsapp.svg'
import Hello from '@/assets/Hello.gif'
import telegram from '@/assets/telegram.svg'
import {Container} from "@/components/Hero/styles";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <p data-aos="fade-up">Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        <h1 data-aos="fade-up" data-aos-delay="200">Bimo Henokh Barata</h1>
        <h3 data-aos="fade-up" data-aos-delay="400">Software Engineer</h3>
        {/*TODO kalau udh senior masukkin lama experience*/}
        <p className="small-resume" data-aos="fade-up" data-aos-delay="600"></p>

        <div data-aos="fade-up" data-aos-delay="800">
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </div>

        <div className="social-media" data-aos="fade-up" data-aos-delay="1000">
          <a
            href="https://www.linkedin.com/in/bimo-henokh-barata-311333235/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin"/>
          </a>
          <a
            href="https://github.com/bimohenokh/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub"/>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B6285217073494&text=Hello+Bimo+I+found+your+contact+through+portfolio+site.%0A%0A"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="Whatsapp"/>
          </a>
          {/*TODO telegram ntar aja*/}
          {/*<a*/}
          {/*  href=""*/}
          {/*  target="_blank"*/}
          {/*  rel="noreferrer"*/}
          {/*>*/}
          {/*  <img src={telegram} alt="telegram"/>*/}
          {/*</a>*/}
        </div>

      </div>
      {/*TODO ganti ilustrasi*/}
      <div className="hero-image">
        <img src={Illustration} alt="Ilustração" data-aos="fade-right" data-aos-delay="1000"/>
      </div>
    </Container>
  )
}