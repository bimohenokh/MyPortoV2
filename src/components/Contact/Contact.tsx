import {Container} from "@/components/Contact/styles";
import emailIcon from "@/assets/email-icon.svg";
import phoneIcon from "@/assets/phone-icon.svg"
import {Form} from "@/components/Form/Form";


export function Contact() {

  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:bimo.barata2@gmail.com"><img src={emailIcon} alt="Email"/></a>
          <a href="mailto:bimo.barata2@gmail.com">bimo.barata2@gmail.com</a>
        </div>
        <div>
          <a href="tel:+6285217073494"><img src={phoneIcon} alt="Phone No"/></a>
          <a href="tel:+6285217073494">(+62) 852 1707 3494</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}