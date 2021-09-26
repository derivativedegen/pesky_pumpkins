import React from "react";
import logo from "../../images/logo.png";
import Social from "../Social";
import Mint from "../Mint";
import "../Buttons.css";
import "./style.css";
import { useSelector } from "react-redux";
import { selectAddress, selectLoading } from "../../redux/app";
import { shortenAddress } from "../../candy-machine";

export default function Header(props) {
  const addressFull = useSelector(selectAddress);
  const addressShort = shortenAddress(addressFull);
  const loading = useSelector(selectLoading);

  return (
    <div className="header-box d-flex flex-column justify-content-around col-12 col-xl-6">
      <img src={logo} className="app-logo" alt="logo" />
      <Social />
      <Mint />
    </div>
  );
}
