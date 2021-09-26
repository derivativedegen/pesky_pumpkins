import React from "react";
import logo from "../../assets/images/logo.png";
import Social from "../Social";
import Mint from "../Mint";
import "../Buttons.css";
import "./style.css";
import { useSelector } from "react-redux";
import {
  selectAddress,
  selectCurrentPage,
  selectLoading,
} from "../../redux/app";
import { shortenAddress } from "../../candy-machine";
import { links } from "../../constants/constants";
import twitter from "../../assets/images/twitter.svg";
import discord from "../../assets/images/discord.svg";
import { Link } from "react-router-dom";

export default function Navigation(props) {
  const addressFull = useSelector(selectAddress);
  const addressShort = shortenAddress(addressFull);
  const currentPage = useSelector(selectCurrentPage);
  const loading = useSelector(selectLoading);
  const nav = ["mint", "about", "roadmap", "team", "tools", "terms"];

  const activePage = (page) => {
    if (currentPage === page) {
      return "nav_button_active";
    }
  };

  return (
    <div className="nav_box d-flex flex-column col-12">
      <img src={logo} className="img-fluid nav_logo" alt="logo" />

      <div className="nav_links d-flex flex-column">
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

      <div className="nav_social d-flex flex-row h-100 pb-5 align-items-end justify-content-around">
        <a href={links.twitter.url} target="_blank">
          <img className="social_icon" src={twitter} alt="twitter" />
        </a>
        <a href={links.discord.url} target="_blank">
          <img className="social_icon" src={discord} alt="discord" />
        </a>
      </div>
    </div>
  );
}
