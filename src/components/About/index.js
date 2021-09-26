import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/app";
import "./style.css";

export default function About(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("about"));
  }, []);

  return (
    <>
      <h1 style={{ color: "black", fontSize: "3rem" }}>hello</h1>
    </>
  );
}
