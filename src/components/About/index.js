import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/app";
import logo from "../../assets/images/logo.png";
import "./style.css";

export default function About(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("about"));
  }, []);

  return (
    <div className="about_container col-12 d-flex justify-content-center align-items-center">
      <div className="page_box col-8">
        <div className="col-12 col-md-8 offset-md-2">
          <img className="img-fluid p-3" src={logo} alt="" />
        </div>
        {/* <h1 style={{ color: "white", fontSize: "3rem" }}>NFTeePee.Club</h1> */}
        {/* <hr
          style={{
            color: "white",
            width: "100%",
            justifySelf: "center",
          }}
        /> */}
        <p style={{ color: "white", fontSize: "1.25rem", padding: "0px 40px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
