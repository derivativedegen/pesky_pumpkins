import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/app";
import "./style.css";
import wipe1 from "../../assets/images/wipe1.png";
import wipe2 from "../../assets/images/wipe2.png";
import wipe3 from "../../assets/images/wipe3.png";
import wipe4 from "../../assets/images/wipe4.png";

export default function Roadmap(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("roadmap"));
  }, []);

  return (
    <div className="roadmap_container col-12 d-flex justify-content-center align-items-center">
      <div className="page_box col-12 col-md-8 d-flex flex-row flex-wrap justify-content-center">
        {/* <h1 style={{ color: "white", fontSize: "3rem" }}>ROLLMAP</h1> */}
        <div className="col-12 col-md-5">
          <img src={wipe1} alt="wipe1" className="img-fluid" />
        </div>
        <div className="col-12 col-md-5">
          <img src={wipe2} alt="wipe2" className="img-fluid" />
        </div>
        <div className="col-12 col-md-5">
          <img src={wipe3} alt="wipe3" className="img-fluid" />
        </div>
        <div className="col-12 col-md-5">
          <img src={wipe4} alt="wipe4" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
