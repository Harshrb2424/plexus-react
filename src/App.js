import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Clubs from "./components/Clubs";
import Soon from "./components/Soon";
// import Events from "./components/Events"
// import Gallery from "./components/Gallery"
import Footer from "./components/Footer";
import Loading from "./components/Loading"; // Import the Loading component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MemberPage from "./components/MemberPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust this delay as needed

    // Cleanup the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; // Show the loading spinner until the components are ready
  }

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/events" element={<Soon />} />
          <Route path="/gallery" element={<Soon />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/member/:username" element={<MemberPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
