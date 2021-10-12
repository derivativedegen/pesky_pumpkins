import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/app";
import logo from "../../assets/images/logo.png";
import teepee_gif from "../../assets/images/teepee_gif.gif";
import "./style.css";
import example from "../../assets/images/nfteepee4.png";
import { links } from "../../constants/constants";

export default function About(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("about"));
  }, []);

  return (
    <div className="about_container col-12 d-flex justify-content-center">
      <div className="page_box col-12 col-md-8">
        {/* <div className="col-12 col-md-8 offset-md-2">
          <img className="img-fluid p-3" src={logo} alt="" />
        </div> */}
        <h1 style={{ color: "white", fontSize: "3rem" }}>
          WIPE YOUR WAY TO WINNINGS
        </h1>
        <hr
          style={{
            color: "white",
            width: "100%",
            justifySelf: "center",
          }}
        />
        <p className="about_text">
          The NFTeePee Club is a collective of degenerate memesters thats been
          rollin deep with the crypto community for years. We decided to give
          back to the community that paid high prices for toilet paper on the
          black market or on your Amerzon-Prime membership.
        </p>

        {/* <img className="img-fluid teepee_gif" src={teepee_gif} alt="" /> */}
        <img
          src={example}
          alt="nfteepee_example"
          className="nfteepee_example"
        />

        <p className="about_text">
          Owning one of these 7777 TP rolls will have iconic value that relates
          to the shit show of the year 2020. Each teepee roll will have their
          own special characters and an array of special backgrounds. Take our
          word for it, you'll be minting some rare shit. Stocking up and
          hoarding these NFTeePees entitles holders to receive a ticket to wipe
          your Ass-ets for life! You might be able to buy a house or warehouse
          to store us anywhere you'd like...Ledgers are kinda boring tbh.
        </p>

        <p className="about_text">
          When your favorite warehouse store is out of toilet paper...
        </p>
        <h2 style={{ color: "white", fontSize: "2rem" }}>WE GOT YOU!</h2>
        <div className="d-flex col-12 flex-wrap justify-content-center">
          <a href={links.discord.url} target="_blank">
            <button className="btn-button btn-accent btn-large">Discord</button>
          </a>
          <a href={links.twitter.url} target="_blank">
            <button className="btn-button btn-accent btn-large">Twitter</button>
          </a>
        </div>
      </div>
    </div>
  );
}
