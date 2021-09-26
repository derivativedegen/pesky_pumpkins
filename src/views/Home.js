import React from "react";
import "./Home.css";
import Mint from "../components/Mint";
import Header from "../components/Header";

export default function Home(props) {
  return (
    <div class="App darken">
      <div className="d-flex flex-column h-100 align-items-center justify-content-center col-12">
        {/* <Mint /> */}
        <Header />
      </div>
    </div>
  );
}
