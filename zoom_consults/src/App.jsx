import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

import Home from "../pages/Home"
import About from "../pages/About";

import Contact from "../pages/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Zica from "../pages/Zica";
import ZoomGlass from "../pages/ZoomGlass";
import ZoomPartnersHub from "../pages/ZoomPartnersHub";
function App() {

  return (
     <>
     <ScrollToTop />
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/zica" element={<Zica />} />
        <Route path="/zoom-glass" element={<ZoomGlass />} />
        <Route path="/zoom-partners-hub" element={<ZoomPartnersHub />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
     </>
  )
}

export default App
