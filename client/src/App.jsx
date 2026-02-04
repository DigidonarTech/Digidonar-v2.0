import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import About from './pages/About';
import Support from './pages/Support';
import Contact from './pages/Contact';
import Journey from './pages/Journey';
import ServiceDetail from './pages/ServiceDetail';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminDocs from './pages/AdminDocs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/services/bulk-sms" element={<ServiceDetail serviceType="bulk-sms" />} />
          <Route path="/services/whatsapp-api" element={<ServiceDetail serviceType="whatsapp-api" />} />
          <Route path="/services/voice-ivr" element={<ServiceDetail serviceType="voice-ivr" />} />
          <Route path="/services/otp-service" element={<ServiceDetail serviceType="otp-service" />} />
          <Route path="/services/sms-gateway" element={<ServiceDetail serviceType="sms-gateway" />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin/documents" element={<AdminDocs />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;