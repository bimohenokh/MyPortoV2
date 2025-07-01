import {Header} from "@/components/Header/Header";
import {GlobalStyle} from "@/styles/global";
import {Main} from "@/components/Main/Main";
import {Footer} from "@/components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import {ToastContainer} from "react-toastify";

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
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}