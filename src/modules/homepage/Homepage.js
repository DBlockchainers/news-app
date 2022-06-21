import React from "react";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";

const Homepage = () => {
  return (
    <>
      <div className="wrapper" id="top">
        <Header />

        <Main />
        <div className="clear"></div>

        <Footer />
        
      </div>
    </>
  );
};

export default Homepage;

