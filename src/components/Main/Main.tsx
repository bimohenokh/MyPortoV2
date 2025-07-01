import {Container} from "@/components/Main/styles";
import {Hero} from "@/components/Hero/Hero";
import {About} from "@/components/About/About";
import {Project} from "@/components/Project/Project";
import {Contact} from "@/components/Contact/Contact";

export function Main() {
  return (
    <Container>
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
}