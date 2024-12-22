import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import Work from "./components/work";


export default function Home() {
  return (
   <>
    <Navbar></Navbar>
    <About></About>
    <Services></Services>
    <Testimonials></Testimonials>
    <Contact></Contact>
    <Work></Work>
   </>
  );
}
