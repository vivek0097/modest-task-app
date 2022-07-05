import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  // const [Mobile, setMobile] = useState(true);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="container-fluid nav-bg">
      <div className="container">
        <header>
          <div className="row mt-2">
            <div className="col-3 col-md-12 col-lg-3 text-white">
              <b>MoDEST.</b>
            </div>
            <div className="col-9 col-md-12 col-lg-9 d-flex justify-content-lg-end justify-content-start">
              <nav className="nav-links" ref={navRef}>
                <ul className="d-flex justify-content-center">
                  <NavLink to="/">
                    <li className="list px-2">HOME</li>
                  </NavLink>
                  <NavLink to="/about">
                    <li className="list px-2">ABOUT</li>
                  </NavLink>
                  <NavLink to="/work">
                    <li className="list px-2">WORK</li>
                  </NavLink>
                  <NavLink to="/services">
                    <li className="list px-2">SERVICES</li>
                  </NavLink>
                  <NavLink to="/features">
                    <li className="list px-2">FEATURES</li>
                  </NavLink>
                  <NavLink to="/contact">
                    <li className="list px-2">CONTACT</li>
                  </NavLink>
                </ul>
                <button onClick={showNavbar} className="nab-btn nav-close-btn">
                  <FaTimes />
                </button>
              </nav>
            </div>
            <button onClick={showNavbar} className="nab-btn ">
              {" "}
              <FaBars />
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};
export default Navbar;
