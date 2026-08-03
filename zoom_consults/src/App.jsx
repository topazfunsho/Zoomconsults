import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

import Home from "../pages/Home"
import About from "../pages/About";




import Contact from "../pages/Contact";
import Footer from "../components/Footer";
function App() {

  return (
     <>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/zica" element={<Contact />} />
        <Route path="/zoom-glass" element={<Contact />} />
        <Route path="/zoom-partners-hub" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
     </>
  )
}

export default App
