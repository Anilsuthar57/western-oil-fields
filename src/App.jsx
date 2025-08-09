import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import QHSE from "./components/QHSE";
import Notfound from "./components/Notfound";

// Services Pages
import WorkoverRigs from "./components/services/WorkoverRigs";
import HotOilUnits from "./components/services/HotOilUnits";
import AirCompressors from "./components/services/AirCompressors";
import MobileSteaming from "./components/services/MobileSteaming";
import MobilePumping from "./components/services/MobilePumping";
import Tankers from "./components/services/Tankers";
import Manpower from "./components/services/Manpower";
import Maintenance from "./components/services/Maintenance";
import ChemicalPump from "./components/services/ChemicalPump";
import Winch from "./components/services/Winch";
import Wireline from "./components/services/Wireline";

// Scroll to top on route change
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* 404 page */}
        <Route path="/not-found" element={<Notfound />} />

        {/* Layout wrapper for common header/footer */}
        <Route path="/" element={<Layout />}>
          {/* Main pages */}
          <Route index element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="qhse" element={<QHSE />} />

          {/* Services sub-pages */}
          <Route path="services/workover-rigs" element={<WorkoverRigs />} />
          <Route path="services/hot-oil-units" element={<HotOilUnits />} />
          <Route path="services/air-compressors" element={<AirCompressors />} />
          <Route path="services/mobile-steaming" element={<MobileSteaming />} />
          <Route path="services/mobile-pumping" element={<MobilePumping />} />
          <Route path="services/tankers" element={<Tankers />} />
          <Route path="services/manpower" element={<Manpower />} />
          <Route path="services/maintenance" element={<Maintenance />} />
          <Route path="services/chemical-pump" element={<ChemicalPump />} />
          <Route path="services/winch" element={<Winch />} />
          <Route path="services/wireline" element={<Wireline />} />
        </Route>

        {/* Catch-all (if none matches) */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
