import React from "react";
import Banner from "../Banner/Banner";
import About from "./About";
import Contact from "./Contact";
import Features from "./Features";
import "./Home.css";
import Services from "./Services";
import Work from "./Work";
const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Work />
      <Services />
      <Features />
      <Contact />
    </div>
  );
};
export default Home;
