import React from "react";
import logo from "./../../../images/coinspacex-logo.png";
import '../homestyle.css'
const Header = () => {
  return (
    <>
      <header className="homepageg">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 logo">
              <a href="/" title="Cp Platinum">
                <img
                  className="light"
                  src={logo}
                  alt="Cp Platinum"
                  style={{ width: "250px" }}
                />
                <img
                  className="dark"
                  src={logo}
                  alt="Cp Platinum"
                  style={{ width: "250px" }}
                />
              </a>
            </div>
            <div className="col-sm-6 col-md-8 main-menu ">
              <nav className="navbar navbar-expand-md">
                <div className="menu-icon">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="top"></span>
                    <span className="middle"></span>
                    <span className="bottom"></span>
                  </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#top" className="nav-link active">Home</a>
                  </li>
                  <li className="nav-item">
                    <a href="#vAbout" className="nav-link">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a href="#vToken" className="nav-link">Tokenization</a>
                  </li>
                  <li className="nav-item">
                    <a href="#vFaq" className="nav-link">FAQ</a>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="nav-link">Login</a>
                  </li>
                </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
