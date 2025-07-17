import Navbar from "./comps/Navbar";
import Header from "./header/page";
import About from "./about/page";
import Proje from "./proje/page";
import Blog from "./blog/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Proje />
      <Blog />
      <Contact />
    </>
  );
}
