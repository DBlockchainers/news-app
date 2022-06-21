import React from "react";
import logo from "./../../../images/coinspacex-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="platinum-footer">
        <div className="footer-widget-area text-center">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-8">
                <div className="widget-area">
                  <div className="widget widget-html">
                    <div className="footer-logo vFootLogo">
                      <a href="/" title="">
                        <img
                          src={logo}
                          alt="Cp Platinum"
                        />
                      </a>
                    </div>
                    <div className="text">
                      <p className="text-white">
                        A simplified way to create digital assets.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="widget-area">
                  <div className="widget">
                    <ul className="footer-menu horizontal-menu onepage">
                      <li>
                        <a href="#vAbout">About Us</a>
                      </li>
                      <li>
                        <a href="#vToken">Tokenization</a>
                      </li>
                      <li>
                        <a href="#vFaq">FAQ</a>
                      </li>
                      <li>
                        <a href="/login">Login</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget-area">
                  <div className="widget widget-html">
                    <h2 className="widget-title">Newsletter</h2>
                    <div className="text">
                      <p>
                        Keep to date with our progress. Subscribe for e-mail
                        updates.
                      </p>
                    </div>
                    <div className="newsletter">
                      <form method="post" action="#">
                        <div className="d-flex">
                        <input
                          type="email"
                          name="Email"
                          placeholder="Your email address"
                        />
                        <button className="btn" type="submit" name="subscribe">
                          subscribe
                        </button>

                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="widget-area">
                  <div className="widget widget-html text-center">
                    <div className="socials">
                      <ul>
                        <li>
                          <a href="https://facebook.com/">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://telegram.org/">
                            <i className="fab fa-telegram-plane"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://bitcoin.com/">
                            <i className="fab fa-btc"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copy-text">
                  © 2022 CoinSpaceX. Design & Developed by{" "}
                  <a href="cp-platinum.html#">CoinSpaceX</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
