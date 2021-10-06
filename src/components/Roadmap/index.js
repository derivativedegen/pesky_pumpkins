import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/app";
import "./style.css";

export default function Roadmap(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("roadmap"));
  }, []);

  return (
    <div className="roadmap_container col-12 d-flex justify-content-center">
      <div className="page_box col-8">
        <h1 style={{ color: "white", fontSize: "3rem" }}>Roadmap</h1>
      </div>
    </div>
  );
}
