import React, { useState, useEffect } from "react";
import "./Header.css";
import { motion } from "framer-motion";

function Header() {

   const [navBar,setNavbar] = useState(false)

   const changeBackground = () => {
   
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {

    window.addEventListener("scroll", changeBackground)
  })

  return (
    <>
   
      {/* <nav className="navbar navbar-expand-lg">  */}
   
      <nav className={navBar ? 'navbar navbar-expand-lg active': 'navbar navbar-expand-lg p-3 shadow'}> 
      <div className="container-fluid">
        <a className="navbar-brand" href="#section-1">
           <b className="text-info">Portfolio</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item ">
              <a className="nav-link" href="#section-1">
                Home 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section-2">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section-3">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#section-4">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
      
    </>
  );
}

export default Header;
