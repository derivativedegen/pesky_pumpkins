import React, { useState } from "react";
// import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
// import { ReactComponent as Close } from "../../assets/icons/close.svg";
import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { selectAddress, selectConnected } from "../../redux/network";
import { links } from "../../constants/constants";
import logo from "../../assets/images/logo.png";

const Header = (props) => {
  const { toggleConnect } = props;
  //   const connected = useSelector(selectConnected);
  //   const address = useSelector(selectAddress);
  //   const address_short = "0x..." + address.slice(-4);

  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img src={logo} className="nav_logo" alt="logo" />
      </Link>

      <div className="nav-links">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="nav-link">MINT</button>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <button className="nav-link">ABOUT</button>
        </Link>
        <Link to="/roadmap" style={{ textDecoration: "none" }}>
          <button className="nav-link">ROADMAP</button>
        </Link>
        <Link to="/tools" style={{ textDecoration: "none" }}>
          <button className="nav-link">TOOLS</button>
        </Link>
        <Link to="/team" style={{ textDecoration: "none" }}>
          <button className="nav-link">TEAM</button>
        </Link>
      </div>

      {/* <div onClick={showMenu} className="menu-icon">
        <Menu />
      </div> */}

      <div className={menu ? "slide-menu active" : "slide-menu"}>
        {/* <Close onClick={() => setMenu(false)} className="close-icon" /> */}
        <div className="d-flex flex-column mobile-menu">
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
          <a href={links.twitter.url} target="_blank">
            Twitter
          </a>
          <a href={links.discord.url} target="_blank">
            Discord
          </a>
          {/* <a href={links.contract.url} target="_blank">
            Contract
          </a> */}
          <Link to="/terms" onClick={() => setMenu(false)}>
            TERMS
          </Link>
        </div>
        <div className="col-12 d-flex justify-content-center mt-3">
          {/* <button
            className={`btn_button ${connected ? "btn_connected" : "btn_main"}`}
            onClick={toggleConnect}
          >
            {connected ? address_short : "Connect"}
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
