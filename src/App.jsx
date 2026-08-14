import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import CapabilitiesPage from './pages/CapabilitiesPage';
import MachineryPage from './pages/MachineryPage';
import IndustriesPage from './pages/IndustriesPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer/Footer';
import AnimatedPage from './components/AnimatedSection/AnimatedPage';
import CustomCursor from './components/CustomCursor/CustomCursor';
import './App.css';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
        <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
        <Route path="/capabilities" element={<AnimatedPage><CapabilitiesPage /></AnimatedPage>} />
        <Route path="/machinery" element={<AnimatedPage><MachineryPage /></AnimatedPage>} />
        <Route path="/industries" element={<AnimatedPage><IndustriesPage /></AnimatedPage>} />
        <Route path="/contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <Router>
      <div className="app-container">
        <CustomCursor />
        {/* Scroll Progress Bar */}
        <motion.div
          className="scroll-progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
        
        {/* Mobile Sticky Bar */}
        <div className="mobile-sticky-bar">
          <a href="tel:9689515815" className="sticky-btn">📞 Call</a>
          <a href="https://wa.me/919689515815" className="sticky-btn">💬 WhatsApp</a>
          <a href="https://www.google.com/maps/place/Gagangiri+General+Store/@19.8488615,74.0430111,3a,75y,338.01h,94.62t/data=!3m7!1e1!3m5!1s722zxOAhNMIn3dxEC9N7GA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-4.6153804381143715%26panoid%3D722zxOAhNMIn3dxEC9N7GA%26yaw%3D338.0079366353175!7i16384!8i8192!4m6!3m5!1s0x3bddb08f7e616337:0xc7a52b6f602d617c!8m2!3d19.8478908!4d74.0419966!16s%2Fg%2F12hkg4l7j?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D" className="sticky-btn" target="_blank" rel="noreferrer">📍 Directions</a>
        </div>
      </div>
    </Router>
  );
}

export default App;
