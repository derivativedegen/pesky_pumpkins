import React from "react";
import logo from "../../assets/images/logo.png";
import Social from "../Social";
import Mint from "../Mint";
import "../Buttons.css";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAddress,
  selectColorMode,
  selectCurrentPage,
  selectLoading,
  setColorMode,
} from "../../redux/app";
import { shortenAddress } from "../../candy-machine";
import { links } from "../../constants/constants";
import twitter from "../../assets/images/twitter.svg";
import discord from "../../assets/images/discord.svg";
import { Link } from "react-router-dom";

export default function Navigation(props) {
  const dispatch = useDispatch();
  const addressFull = useSelector(selectAddress);
  const addressShort = shortenAddress(addressFull);
  const currentPage = useSelector(selectCurrentPage);
  const loading = useSelector(selectLoading);
  const colorMode = useSelector(selectColorMode);
  const nav = ["mint", "about", "roadmap", "team", "tools", "terms"];

  const activePage = (page) => {
    if (currentPage === page) {
      return "nav_button_active";
    }
  };

  const toggleColorMode = () => {
    if (colorMode === "light_mode") {
      dispatch(setColorMode("dark_mode"));
    } else if (colorMode === "dark_mode") {
      dispatch(setColorMode("light_mode"));
    }
  };

  return (
    <div className="nav_box d-flex flex-row col-12 justify-content-between">
      <img src={logo} className="img-fluid nav_logo" alt="logo" />

      <div className="nav_links d-flex flex-row">
        {nav.map((page, i) => {
          return (
            <Link
              to={`/${page}`}
              key={i}
              className={`nav_button ${
                i === nav.length - 1 && "nav_button_last"
              } ${activePage(page)}`}
            >
              {page}
            </Link>
          );
        })}
      </div>

      <div className="nav_social d-flex flex-row flex-wrap h-100 pb-4 align-items-end justify-content-center">
        <a href={links.twitter.url} target="_blank">
          <img className="social_icon" src={twitter} alt="twitter" />
        </a>
        <a href={links.discord.url} target="_blank">
          <img className="social_icon" src={discord} alt="discord" />
        </a>
      </div>
      <button onClick={() => toggleColorMode()} className="color_mode">
        {colorMode === "light_mode" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}
