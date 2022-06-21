import React from "react";
import bg1 from "./../../../images/CSX-Image-01.svg";
import bg2 from "./../../../images/CSX-Image-02.svg";
import bg3 from "./../../../images/CSX-Image-03.svg";
import about1 from "./../../../images/about-pic1.png";
import about2 from "./../../../images/about-pic2.png";
import feature1 from "./../../../images/feature-1.png";
import bIcon1 from "./../../../images/benefit-icon-1.png";
import bIcon2 from "./../../../images/benefit-icon-2.png";
import bIcon3 from "./../../../images/benefit-icon-3.png";
import bIcon4 from "./../../../images/benefit-icon-4.png";
import bIcon5 from "./../../../images/benefit-icon-5.png";
import bIcon6 from "./../../../images/benefit-icon-6.png";
import bnb_logo from "./../../../images/BNB.png";
import dsf_logo from "./../../../images/DSF-logo.png";
import '../homestyle.css'

const Main = () => {
  return (
    <>
    <div className="homepageg">
      <div className="midd-container">
        <div className="hero-main platinum-layout white-sec">
          <div className="hero-bg-01">
            <img src={bg1} alt="..." />
          </div>
          <div className="hero-bg-02">
            <img src={bg2} alt="..." />
          </div>
          <div className="container">
            <div className="row row-reverse align-items-center mt-md-5 pt-md-5">
              <div
                className="col-sm-12 col-md-6 mb-5"
                data-wow-delay="0.5s"
              ></div>
              <div className="col-sm-12 col-md-6 mobile-center">
                <h1>
                  A Simplified way to create{" "}
                  <span id="hero-h1-inner">Digital Assets!!!</span>
                </h1>
                <p className="lead">
                  Harnessing the power of Blockchain providing Community Elected
                  Value adding tools and smart contracts to unlock the full
                  value of Defi and NFT Assets.
                </p>
                <div className="hero-btns">
                  <a href="/login" className="btn">
                    Login Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>

        <div className="vAboutBlock" id="vAbout">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div style={{ padding: "50px" }}>
                  <img src={about1} alt="About Pic" />
                </div>
                <div className="video-block" style={{ marginTop: "5rem" }}>
                  <video
                    src="https://coinspacex.co/public/web/videos/CSX.mp4"
                    className="w-100 p-2"
                    type="video/mp4"
                    preload="auto"
                    muted={true}
                    autoPlay={true}
                  ></video>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="vAboutContent1">
                  <h2 className="sa-homelogo">
                    CoinSpace<span>X</span>
                  </h2>
                  <h4 className="sa-homelogotext">A New Revolution in the Smart Contract Space</h4>
                  <p>
                    Coinspacex comes with a collective vision of revolutionizing
                    the present Opportunities and Implementation of Smart
                    Contract landscape. The CoinSpaceX platform is a unique
                    blend between Ambition, Stability, and Power Of Smart
                    contracts in 1 Huge System.
                  </p>
                  <p>
                    Running on the BSC Blockchain, your crypto is astonishingly
                    secure and Has Dramatically Great Potential.
                  </p>
                  <p>
                    A bunch of ways of earning crypto and a simplified way to
                    invest faster makes Coin SpaceX the most advanced thing in
                    the Network Marketing Ecosystem.
                  </p>
                  <p>
                    So BSC Blockchain is the solution to the challenges of
                    Ethereum Blockchain High Gas Fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="vAboutBlock2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="vAboutSection2">
                  <h2>
                    Income Booster Decentralized BEP20 Affiliate Programmed
                  </h2>
                  <h4>
                    Earn with Never Before True Decentralized Platform Built on
                    BSC Network
                  </h4>
                  <p>
                    System Built for LEADERS CoinSpaceX - A System Built for
                    LEADERS With High Earning Potential and Automated Global
                    Autopool with a Different Consensus Model and Unique
                    Approach.
                  </p>
                  <p>
                    There is no ADMIN and It’s a Verified Smart Contract on
                    BSCScan. Being Ethical, Immutable and Decentralized,
                    CoinSpaceX is build on same Consensus Algorithm of BSC
                    Blockchain. CoinSpaceX is an entirely new business model
                    which will transform the way we live, work, and entertain
                    ourselves.
                  </p>
                  <p>
                    The goal is Financial Freedom. So, let's make each-other's
                    life beautiful.
                  </p>
                  <p>
                    It’s not a Plan, It’s a System That’s Built for Long term
                    Execution. Much BIGGER Surprises to Come In Future.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div style={{ padding: "50px" }}>
                  <img src={about2} alt="About Pic" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="featured-product-sec p-tb white-sec dark-gray-bg-tone-2"
          id="featured-product"
        >
          <div id="gold-tech-bg"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 ipad-center">
                <img src={feature1} alt="Featured Product" />
              </div>
              <div className="col-lg-6 mobile-center ipad-center">
                <h2 className="section-heading vSecHead">
                  Blockchain Ready for Business
                </h2>
                <div className="sub-txt vSubText">
                  <h4>Business-friendly smart contract platform</h4>
                  <p>
                    CoinSpaceX provides a standardized, stable and safe
                    development environment for smart contracts, enabling
                    business-friendly smart contract coding, deploying and
                    executing
                  </p>
                  <h4>Credible decentralized application platform</h4>
                  <p>
                    CoinSpaceX is also a decentralized application platform,
                    compatible with existing blockchain infrastructure, and is
                    modularized so new technology can always be added.
                  </p>
                  <h4>Enterprise blockchain services</h4>
                  <p>
                    CoinSpaceX also provides customized solutions for enterprise
                    clients
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="clearfix"></div>
              <div className="col-lg-4">
                <div className="vFeturedInner">
                  <i className="fas fa-globe"></i>
                  <h5>Global Network</h5>
                  <p>
                    CoinSpaceX boasts the biggest PoS peer to peer network, with
                    full-nodes only exceeded by the Ethereum and Binance
                    networks
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="vFeturedInner">
                  <i className="fas fa-wallet"></i>
                  <h5>Wallet Ecosystem</h5>
                  <p>
                    There are a full spectrum of crypto wallets supporting
                    CoinSpaceX, that meet the needs of different users
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="vFeturedInner">
                  <i className="fas fa-laptop-code"></i>
                  <h5>Development resources</h5>
                  <p>
                    CoinSpaceX also provides mature development resources for
                    blockchain and app development
                  </p>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>

        <div
          className="benefit-section platinum-layout black-bg p-t"
          style={{ backgroundColor: "#000 !important" }}
        >
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading" style={{ color: "#FFF" }}>
                Our Solutions
              </h2>
            </div>
            <div
              className="sub-txt mw-850 text-center"
              style={{ color: "#FFF" }}
            >
              <p>
                We offer the world's first comprehensive right-set solution for
                investing
              </p>
            </div>
            <div className="banafits-list-items">
              <div className="banafits-item">
                <div className="benefit-box text-center">
                  <div className="benefit-icon">
                    <img src={bIcon1} alt="Safe and Secure" />
                  </div>
                  <div className="text" style={{ color: "#FFF" }}>
                    <h4 style={{ color: "#FFF" }}>D-Launch</h4>
                    <p>
                      The smart platform for top-tier projects reach to the
                      world.
                    </p>
                  </div>
                </div>
              </div>
              <div className="banafits-item">
                <div className="benefit-box text-center">
                  <div className="benefit-icon">
                    <img src={bIcon2} alt="Instant Exchange" />
                  </div>
                  <div className="text" style={{ color: "#FFF" }}>
                    <h4 style={{ color: "#FFF" }}>D-Insure</h4>
                    <p>
                      A strict custodial mechanism for the safety of your
                      investment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="banafits-item">
                <div className="benefit-box text-center">
                  <div className="benefit-icon">
                    <img src={bIcon3} alt="Strong Network" />
                  </div>
                  <div className="text" style={{ color: "#FFF" }}>
                    <h4 style={{ color: "#FFF" }}>D-Farms</h4>
                    <p>
                      Yield farmers earn rewards and have higher chance to be
                      whitelisted in the upcoming projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="banafits-item">
                <div className="benefit-box text-center">
                  <div className="benefit-icon">
                    <img src={bIcon4} alt="Mobile Apps" />
                  </div>
                  <div className="text" style={{ color: "#FFF" }}>
                    <h4 style={{ color: "#FFF" }}>D-Tools</h4>
                    <p>
                      The most powerful predictive evaluation toolkit, for a
                      pure defi world.
                    </p>
                  </div>
                </div>
              </div>
              <div className="banafits-item">
                <div className="benefit-box text-center">
                  <div className="benefit-icon">
                    <img src={bIcon5} alt="Margin Trading" />
                  </div>
                  <div className="text" style={{ color: "#FFF" }}>
                    <h4 style={{ color: "#FFF" }}>D-Swap</h4>
                    <p>
                      Swapping crypto across blockchains has never been easier.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="banafits-circle">
              <div className="icon">
                <img src={dsf_logo} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>

        <div className="vJoinBlock">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="vJoinHead">
                  <h2>
                    CoinSpaceX Potential is immense when You Start With US
                  </h2>
                  <p>
                    Just Start with 100 USD (or equivalent DSF) and Be a Part of
                    Career Making Opportunity BIGGER THE TEAM BIGGER THE
                    EARNING. More Referrals Earnings Multiplied but the Packages
                    are same to be upgraded.
                  </p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-4">
                <div className="vJoinInner">
                  <div className="vJoinCircle">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <h4>
                    J<span>O</span>in
                  </h4>
                  <p>
                    CoinSpaceX is the first of it's kind in BSC blockchain to
                    have multiple Smart Contracts in single platform & is the
                    first to run a Multi Blockchain System in a Smart Contract
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="vJoinInner">
                  <div className="vJoinCircle">
                    <i className="fas fa-user-friends"></i>
                  </div>
                  <h4>
                    R<span>E</span>FER
                  </h4>
                  <p>
                    It’s a Unique Opportunity to Earn Max. Referral income and
                    Earn Huge BUSD/DSF BEP20 is waiting for you with just 1
                    referral in CoinSpaceX System.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="vJoinInner">
                  <div className="vJoinCircle">
                    <i className="fab fa-bitcoin"></i>
                  </div>
                  <h4>
                    E<span>A</span>RN
                  </h4>
                  <p>
                    CoinSpaceX offers you to Earn 800 Million with the world's
                    best Affiliated Reward Program using a Multi Blockchain
                    System.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>

        <div className="faq-section p-tb position-relative bg-black" id="faq">
          <div className="bg-plan">
            <img src={bg3} alt="..." />
          </div>
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading">
                The Smartest way to <span>EARN</span> CRYPT
                <i className="fab fa-bitcoin"></i>
              </h2>
            </div>
            <div className="sub-txt text-center sub-txtV">
              <p>Earn huge BUSD/DSF (BEP20) in a smart way with CoinSpaceX</p>
              <p>
                Decentralized smart contract on Big Data Cluster, Artificial
                Intelligence
              </p>
            </div>
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                <div className="tab-section plan-tab">
                  <div className="row">
                    <div className="col-4">
                      <div
                        className="nav flex-column nav-pills"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <a
                          className="nav-link active"
                          id="v-referral-income-tab"
                          data-bs-toggle="pill"
                          href="#v-referral-income"
                          role="tab"
                          aria-controls="v-referral-income"
                          aria-selected="true"
                        >
                          Referral Income
                        </a>
                        <a
                          className="nav-link"
                          id="v-level-income-tab"
                          data-bs-toggle="pill"
                          href="#v-level-income"
                          role="tab"
                          aria-controls="v-level-income"
                          aria-selected="false"
                        >
                          Level Income
                        </a>
                        <a
                          className="nav-link"
                          id="v-staking-reward-tab"
                          data-bs-toggle="pill"
                          href="#v-staking-reward"
                          role="tab"
                          aria-controls="v-staking-reward"
                          aria-selected="false"
                        >
                          Staking Reward
                        </a>
                        <a
                          className="nav-link"
                          id="v-dlb-bonus-tab"
                          data-bs-toggle="pill"
                          href="#v-dlb-bonus"
                          role="tab"
                          aria-controls="v-dlb-bonus"
                          aria-selected="false"
                        >
                          DLB Bonus
                        </a>
                      </div>
                    </div>
                    <div className="col-8 pl-0">
                      <div className="tab-content" id="v-pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="v-referral-income"
                          role="tabpanel"
                          aria-labelledby="v-referral-income-tab"
                        >
                          <div className="tab-plan-main">
                            <h3>Referral Incomes</h3>
                            <p>
                              Coinspacex comes with a collective vision of
                              revolutionizing the present Opportunities and
                              Implementation of Smart Contract landscape. The
                              CoinSpaceX platform is a unique blend between
                              Ambition, Stability, and Power Of Smart contracts
                              in 1 Huge System.
                            </p>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-level-income"
                          role="tabpanel"
                          aria-labelledby="v-level-income-tab"
                        >
                          <div className="tab-plan-main">
                            <h3>Level Incomes</h3>
                            <p>
                              Coinspacex comes with a collective vision of
                              revolutionizing the present Opportunities and
                              Implementation of Smart Contract landscape. The
                              CoinSpaceX platform is a unique blend between
                              Ambition, Stability, and Power Of Smart contracts
                              in 1 Huge System.
                            </p>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-staking-reward"
                          role="tabpanel"
                          aria-labelledby="v-staking-reward-tab"
                        >
                          <div className="tab-plan-main">
                            <h3>Staking Reward</h3>
                            <p>
                              Coinspacex comes with a collective vision of
                              revolutionizing the present Opportunities and
                              Implementation of Smart Contract landscape. The
                              CoinSpaceX platform is a unique blend between
                              Ambition, Stability, and Power Of Smart contracts
                              in 1 Huge System.
                            </p>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-dlb-bonus"
                          role="tabpanel"
                          aria-labelledby="v-dlb-bonus-tab"
                        >
                          <div className="tab-plan-main">
                            <h3>DLB Bonus</h3>
                            <p>
                              Coinspacex comes with a collective vision of
                              revolutionizing the present Opportunities and
                              Implementation of Smart Contract landscape. The
                              CoinSpaceX platform is a unique blend between
                              Ambition, Stability, and Power Of Smart contracts
                              in 1 Huge System.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>

        <div className="vAcceptBlock">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="vAcceptHead">
                  <i className="fas fa-bolt"></i>
                  <h3>Accepted Crypto Currencies</h3>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-md-4 col-xl-4 mx-auto">
                <div className="vAcceptInnerBlock">
                  <div>
                    <div className="vAcceptCurreny">
                      <img src={bnb_logo} alt="BNB" />
                      BNB
                    </div>
                    <div className="vStatusCrrencyLive">Live</div>
                  </div>
                  <div>
                    <div className="vAcceptCurreny">
                      <img src={dsf_logo} alt="DSF" />
                      DSF
                    </div>
                    <div className="vStatusCrrencyLive">Live</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>

        <div
          className="benefits p-tb light-gray-bg mercury-layout"
          style={{ backgroundColor: "#FFF" }}
        >
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading">Road Map</h2>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="benefit-box text-center">
                  <div className="benefit-icon">
                    <img src={bIcon1} alt="Safe and Secure" />
                  </div>
                  <div className="text">
                    <h4>Concept R&D Phase</h4>
                    <p>
                      Unpacking The Disruptive Potential Of Blockchain
                      Technology For Human Development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="benefit-box text-center">
                  <div className="benefit-icon">
                    <img src={bIcon2} alt="Instant Exchange" />
                  </div>
                  <div className="text">
                    <h4>Project initation</h4>
                    <p>
                      A Unique Hack Proof Project Based On Blockchain Technology
                      With Peer To Peer Transaction. 100% Transparent.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="benefit-box text-center">
                  <div className="benefit-icon">
                    <img src={bIcon3} alt="World Coverage" />
                  </div>
                  <div className="text">
                    <h4>Native token launch</h4>
                    <p>
                      We Are ln Multi Crypto Platform. DeFi - Gaming & NFT
                      Platforms. Launching Of DSF COIN
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="benefit-box text-center">
                  <div className="benefit-icon">
                    <img src={bIcon4} alt="Mobile Apps" />
                  </div>
                  <div className="text">
                    <h4>Exchange Listing</h4>
                    <p>
                      Everything Will Be Tockenized And Connected By Blockchain
                      One Day. We Are ON !!!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="benefit-box text-center">
                  <div className="benefit-icon">
                    <img src={bIcon5} alt="Strong Network" />
                  </div>
                  <div className="text">
                    <h4>Launch on DeFi platform</h4>
                    <p>
                      End -to-End Decentralized Finance (DeFi) Services &
                      Solutions
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="benefit-box text-center">
                  <div className="benefit-icon">
                    <img src={bIcon6} alt="Margin Trading" />
                  </div>
                  <div className="text">
                    <h4>Gaming platform</h4>
                    <p>
                      Gaming Platform Reinforced By Blockchain & Smart Contract.
                      We Ensure IT.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="benefits p-tb black-bg white-sec diamond-layout">
          <div id="gold-tech-bg">
            <canvas
              className="particles-js-canvas-el"
              width="1440"
              height="1231"
              style={{ width: "100%", height: "100%;" }}
            ></canvas>
          </div>
          <div className="container">
            <div className="text-center">
              <img
                src={dsf_logo}
                alt="DSF Coin"
                style={{ width: "130px", marginBottom: "20px" }}
              />
              <h2 className="section-heading">
                <span>DSF Coin</span>
              </h2>
            </div>
            <div className="sub-txt mw-850 text-center">
              <p>
                DSF Coin is a multi platform that creates a closed eco system, a
                comprehensive transaction platform that helps the community
                develop strongly about finance and promises to become a leading
                technology brand in the world.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="benefit-box text-center"
                  style={{ height: "385px" }}
                >
                  <div className="benefit-icon">
                    <img src={bIcon1} alt="Safe and Secure" />
                  </div>
                  <div className="text">
                    <h4>Gaming</h4>
                    <p>
                      Gaming problems for the gaming industry can get resolved
                      through blockchain Technology making payment processing
                      price effective.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="benefit-box text-center"
                  style={{ height: "385px" }}
                >
                  <div className="benefit-icon">
                    <img src={bIcon2} alt="Instant Exchange" />
                  </div>
                  <div className="text">
                    <h4>NFT</h4>
                    <p>
                      NFTs are tokens that we can use to represent ownership of
                      unique items they letters tokenize things like art
                      collectibles even real estate they can only have one
                      official owner at a time and they are secured by the
                      blockchain.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="benefit-box text-center"
                  style={{ height: "385px" }}
                >
                  <div className="benefit-icon">
                    <img src={bIcon3} alt="World Coverage" />
                  </div>
                  <div className="text">
                    <h4>DeFi</h4>
                    <p>
                      Decentralized Finance is a Blockchain based form of
                      finance that doesn't rely on central financial
                      intermediaries such as brokerages exchanges or banks to
                      offer traditioanl financial instruments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="clearfix"></div>

        <div className="vContactBlock">
          <div
            className="container"
            style={{ position: "relative", zIndex: "1" }}
          >
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-6">
                <h3>Contact Us</h3>
                <div className="vContactForm">
                  <h5>Fill the form and get in touch</h5>
                  <form>
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message"></textarea>
                    <button>Submit</button>
                  </form>
                </div>
                <div className="vStayBlock">
                  <h5>Stay with us</h5>
                  <div>
                    <a href="">
                      <i className="fab fa-telegram"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-medium"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-reddit"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-bitcoin"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-altcoinstalks"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3"></div>
            </div>
          </div>
          <div className="vContactTilt"></div>
        </div>

        <div className="clearfix"></div>
      </div>
      </div>
    </>
  );
};

export default Main;
