import React, { useState } from "react";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { selectAddress, selectConnected } from "../../redux/network";
import { links } from "../../constants/constants";
import logo from "../../assets/images/logo.png";
import { selectCurrentPage } from "../../redux/app";
import twitter from "../../assets/images/twitter.svg";
import discord from "../../assets/images/discord.svg";

const Header = (props) => {
  //   const connected = useSelector(selectConnected);
  //   const address = useSelector(selectAddress);
  //   const address_short = "0x..." + address.slice(-4);
  const currentPage = useSelector(selectCurrentPage);

  const activePage = (page) => {
    if (currentPage === page) {
      return "nav-link-active";
    }
  };

  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="navbar">
      <div className="col-2 logo_container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={logo} className="nav_logo" alt="logo" />
        </Link>
      </div>

      <div className="col-3 social-links">
        <a href={links.twitter.url} target="_blank">
          <img className="social_icon" src={twitter} alt="twitter" />
        </a>
        <a href={links.discord.url} target="_blank">
          <img className="social_icon" src={discord} alt="discord" />
        </a>
      </div>

      <div className="col-7 nav-links">
        <Link to="/" className={`nav-link ${activePage("mint")}`}>
          MINT
        </Link>
        <Link to="/about" className={`nav-link ${activePage("about")}`}>
          ABOUT
        </Link>
        <Link to="/roadmap" className={`nav-link ${activePage("roadmap")}`}>
          ROADMAP
        </Link>
        <Link to="/tools" className={`nav-link ${activePage("tools")}`}>
          TOOLS
        </Link>
        <Link to="/team" className={`nav-link ${activePage("team")}`}>
          TEAM
        </Link>
      </div>

      <div onClick={showMenu} className="menu-icon">
        <Menu />
      </div>

      <div
        className={`${
          menu ? "slide-menu active" : "slide-menu"
        } d-flex justify-content-between`}
      >
        <Close onClick={() => setMenu(false)} className="close-icon" />
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenu(false)}>
            MINT
          </Link>
          <Link to="/about" onClick={() => setMenu(false)}>
            ABOUT
          </Link>
          <Link to="/roadmap" onClick={() => setMenu(false)}>
            ROADMAP
          </Link>
          <Link to="/tools" onClick={() => setMenu(false)}>
            TOOLS
          </Link>
          <Link to="/team" onClick={() => setMenu(false)}>
            TEAM
          </Link>
          {/* <a href={links.contract.url} target="_blank">
            Contract
          </a> */}
          {/* <Link to="/terms" onClick={() => setMenu(false)}>
            TERMS
          </Link> */}
        </div>
        <div className="col-12 d-flex justify-content-center align-items-center pb-5">
          <a href={links.twitter.url} target="_blank">
            <img className="social_icon" src={twitter} alt="twitter" />
          </a>
          <a href={links.discord.url} target="_blank">
            <img className="social_icon" src={discord} alt="discord" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
