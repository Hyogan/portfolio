
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Hero from "./components/pages/hero";
import Landscapes from "./components/pages/landscapes";
import Navbar from "./components/pages/navbar";
import Skills from "./components/pages/skills";
import Work from "./components/pages/work";


export default function Home() {
  return (
   <div className="bg-primary h-full w-full min-h-screen">
     <Navbar></Navbar>
     <Hero></Hero>
     <About></About>
     <Skills></Skills>
     <Work></Work>
     <Contact></Contact>
     <Landscapes></Landscapes>
    {/* <About></About>
    <Services></Services>
    <Testimonials></Testimonials>
    <Contact></Contact>
    <Work></Work> */}
   </div>
  );
}
