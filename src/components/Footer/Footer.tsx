import {Container} from '@/components/Footer/styles'
import reactIcon from '@/assets/react-icon.svg'
import linkedin from '@/assets/linkedin.svg'
import githubIcon from '@/assets/github.svg'
import whatsapp from '@/assets/whatsapp.svg'
// import telegram from '@/assets/telegram.svg'
// import instagramIcon from '@/assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      {/*TODO nanti tambah*/}
      {/*<a href="https://bimohenokh.in" className="logo" >*/}
      {/*  <span>www.bimo</span>*/}
      {/*  <span>henokh.in</span>*/}
      {/*</a>*/}
      <a href="" className="logo">
        <span>Bimo Henokh Barata</span>
      </a>

      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React"/>
        </p>
      </div>

      <div className="social-media">
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
        {/*TODO nanti tambahin*/}
        {/*<a*/}
        {/*  href=""*/}
        {/*  target="_blank"*/}
        {/*  rel="noreferrer"*/}
        {/*>*/}
        {/*  <img src={telegram} alt="telegram"/>*/}
        {/*</a>*/}
        {/*<a*/}
        {/*  href=""*/}
        {/*  target="_blank"*/}
        {/*  rel="noreferrer"*/}
        {/*>*/}
        {/*  <img src={instagramIcon} alt="Instagram"/>*/}
        {/*</a>*/}
      </div>
    </Container>
  )
}
