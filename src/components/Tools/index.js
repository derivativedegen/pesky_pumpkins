import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/app";
import "./style.css";

export default function Tools(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("tools"));
  }, []);

  return (
    <div className="tools_container col-12 d-flex justify-content-center align-items-center">
      <div className="page_box col-8">
        <h1 style={{ color: "white", fontSize: "3rem" }}>Tools</h1>
      </div>
    </div>
  );
}
