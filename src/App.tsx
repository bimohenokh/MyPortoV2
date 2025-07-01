import {Header} from "@/components/Header/Header";
import {GlobalStyle} from "@/styles/global";
import {Main} from "@/components/Main/Main";
import {Footer} from "@/components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

export function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}