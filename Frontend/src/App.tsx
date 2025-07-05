import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";

import ErrorBoundary from "./components/Global/ErrorBoundary";
import ScrollToTop from "./components/Global/ScrollToTop";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";

import Navbar from "./components/Global/Navbar";
import Loader from "./components/Global/Loader";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state (can be replaced with real logic)
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>ParaBrahman - Unlock Divine Astrology Insights</title>
        <meta
          name="description"
          content="Explore ParaBrahman, a divine astrology platform blending ancient wisdom with AI. Unlock personalized astrology, AI-powered readings, and celestial guidance."
        />
      </Helmet>

      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          {loading ? (
            <Loader />
          ) : (
            <>
              <Navbar />
              <div className="app-container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/signup" element={<LoginPage />} />
                </Routes>
              </div>
            </>
          )}
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
