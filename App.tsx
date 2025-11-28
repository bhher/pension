import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Amenities from "./pages/Amenities";
import Reservation from "./pages/Reservation";
import Concierge from "./components/Concierge";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Footer: React.FC = () => (
  <footer className="bg-primary text-white py-12 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h4 className="text-xl font-serif font-bold tracking-widest mb-4">
            THE JOEUN
          </h4>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            산과 바다가 만나는 가장 사적인 순간.
            <br />
            당신의 온전한 휴식을 위해 존재합니다.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-serif mb-4">Contact</h4>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            강원도 고성군 어딘가 123-45
            <br />
            010-1234-5678
            <br />
            info@thejoeun.com
          </p>
        </div>
        <div>
          <h4 className="text-lg font-serif mb-4">Social</h4>
          <div className="flex justify-center md:justify-start space-x-4 text-gray-400">
            <a href="#" className="hover:text-accent transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Youtube
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Blog
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-gray-500 font-light">
        © 2024 THE JOEUN PENSION. All rights reserved.
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/reservation" element={<Reservation />} />
          </Routes>
        </main>
        <Footer />
        <Concierge />
      </div>
    </Router>
  );
};

export default App;
