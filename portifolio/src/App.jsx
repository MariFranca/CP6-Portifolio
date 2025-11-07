
import NavBar from "./components/NavBar/NavBar"
import Home from "./pages/Home/Home"
import About from "./pages/Home/sections/About/About"
import Projects from "./pages/Home/sections/Projects/Projects"
import Contact from "./pages/Home/Contact/Contact"
import Footer from "./pages/Home/Footer/Footer"

const App = () =>  {

  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
