import React from "react";
import "./App.css";
import ErrorBoundary from "./components/Global/ErrorBoundary";
import ScrollToTop from "./components/Global/ScrollToTop";

function App() {
  return (
    <>
<HelmetProvider>
      <Helmet>

        </Helmet>
      <ErrorBoundary>
        <ScrollToTop/>
        <Router>
           {loading ? (
            <Loader />
          ) : (
            <>
              <Header />
              <div className="app-container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/service" element={<Services />} />
                  <Route path="/books" element={<Books />} />
                </Routes>
        </Router>
    </>
  );
}

export default App;
