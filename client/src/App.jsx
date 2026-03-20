import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './sections/Services';
// import PricingPage from './pages/PricingPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import About from './pages/About';
import Support from './pages/Support';
import Contact from './pages/Contact';
import Journey from './pages/Journey';
import ServiceDetailWrapper from './pages/ServiceDetailWrapper';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminDocs from './pages/AdminDocs';
import LP01 from './pages/LandingPage/LP01.jsx';
import WhatsappFloat from './components/WhatsappFloat.jsx'
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/pricing" element={<PricingPage />} /> */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/services/:serviceType" element={<ServiceDetailWrapper />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin/documents" element={<AdminDocs />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/lp01" element={<LP01 />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsappFloat phoneNumber="919984678333" />
      </div>
    </Router> 
  );
}

export default App;