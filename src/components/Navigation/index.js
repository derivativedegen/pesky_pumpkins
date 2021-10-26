import React, { useState } from "react";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { links } from "../../constants/constants";
import logogif from "../../assets/images/logo_gif.gif";
import twitter from "../../assets/images/twitter.svg";
import discord from "../../assets/images/discord.svg";

const Header = (props) => {
  return (
    <nav className="col-12 d-flex justify-content-center">
      <div className="col-12 col-md-8 col-lg-6 d-flex flex-column align-items-center justify-content-center">
        <img src={logogif} className="nav_logo" alt="logo" />

        <div className="navbox d-flex flex-column col-12">
          <h1 className="app_title">PESKY PUMPKINS</h1>

          <div className="social-links">
            <a href={links.twitter.url} target="_blank">
              <img className="social_icon" src={twitter} alt="twitter" />
            </a>
            <a href={links.discord.url} target="_blank">
              <img className="social_icon" src={discord} alt="discord" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
