import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Description from "./components/Description";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
