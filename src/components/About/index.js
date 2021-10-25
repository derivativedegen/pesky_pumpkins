import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/app";
import logo from "../../assets/images/logo.png";
import teepee_gif from "../../assets/images/teepee_gif.gif";
import "./style.css";
import example from "../../assets/images/logo.png";
import { links } from "../../constants/constants";

export default function About(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("about"));
  }, []);

  return (
    <div className="about_container col-12 d-flex justify-content-center">
      <div className="page_box col-12 col-md-10 col-lg-8">
        {/* <div className="col-12 col-md-8 offset-md-2">
          <img className="img-fluid p-3" src={logo} alt="" />
        </div> */}
        <h1 className="about_heading">Happy Halloween, Friends!</h1>
        <hr
          style={{
            color: "white",
            width: "100%",
            justifySelf: "center",
          }}
        />
        <p className="about_text text_padding">
          Carving pumpkins is a tedious, trying task that usually just ends up
          in disappointment. Instead of mangling a perfectly good pumpkin and
          embarrassing yourself by displaying it on your porch, mint one of our
          6666 unique Jack-o-Lanterns!
        </p>

        {/* <img className="img-fluid teepee_gif" src={teepee_gif} alt="" /> */}

        <div className="d-flex flex-row flex-wrap col-12 justify-content-center mt-5">
          <p className="about_text col-12 col-lg-5">
            Pesky Pumpkins will be 1SOL per mint and each pumpkin will have its
            own unique background, head, minion, clothes, magic stick, scarf,
            satchel, and rock to stand on.
          </p>
          <div className="col-12 col-lg-5">
            <img src={example} alt="nft_example" className="nft_example" />
          </div>
        </div>

        {/* <p className="about_text">
          When your favorite warehouse store is out of toilet paper...
        </p> */}
        <h2
          style={{
            color: "rgb(64, 250, 120)",
            fontSize: "2rem",
            marginTop: "4rem",
            letterSpacing: "3px",
          }}
        >
          ENTER IF YOU DARE!
        </h2>
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
