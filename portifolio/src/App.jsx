import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/Home/sections/About/About";
import Projects from "./pages/Home/sections/Projects/Projects";
import Contact from "./pages/Home/Contact/Contact";
import Footer from "./pages/Home/Footer/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default App;