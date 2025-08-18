import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideIcons from "./components/SideIcons";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Testimonial from "./pages/TestimonialPage";
import BlogsPage from "./pages/BlogsPage";
import BlogPage from "./pages/BlogPage";
import ScrollToTop from './components/ScrollToTop';
import SocialMedia from './components/SocialMedia';
function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="relative overflow-hidden">
        <Navbar />
        <SideIcons />
        <div className=" pt-24 md:mx-23">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/media" element={<Media />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonial />} />
            <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
          </Routes>
        </div>
        <div className="block md:hidden">
            <SocialMedia />
           
          </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
