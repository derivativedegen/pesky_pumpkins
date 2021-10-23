import React, { useState } from "react";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { links } from "../../constants/constants";
import logo2 from "../../assets/images/logo2.png";
import twitter from "../../assets/images/twitter.svg";
import discord from "../../assets/images/discord.svg";

const Header = (props) => {
  return (
    <nav className="col-12 d-flex justify-content-center">
      <div className="col-6 navbox d-flex flex-column align-items-center justify-content-center">
        <img src={logo2} className="nav_logo" alt="logo" />

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
    </nav>
  );
};

export default Header;
