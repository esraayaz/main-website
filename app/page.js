import Navbar from "./comps/Navbar";
import Header from "./header/page";
import About from "./about/page";
import Proje from "./proje/page";
import Contact from "./contact/page";
import Footer from "./footer/page";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Header />
      <About />
      <Proje />
      <Contact />
      <Footer />
    </>
  );
}
