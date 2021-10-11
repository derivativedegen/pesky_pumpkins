import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/app";
import "./style.css";
import { contributors } from "../../constants/contributors";

export default function Team(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("team"));
  }, []);

  return (
    <div className="team_container col-12 d-flex justify-content-center">
      <div className="page_box col-8">
        <h1 style={{ color: "white", fontSize: "3rem" }}>Team</h1>

        <div className="team-members">
          {contributors.map((member, i) => {
            return (
              <div className="member_card" key={i}>
                <a href={member.link} target="_blank">
                  <img src={member.image} alt="" />
                  <h2 className="">{member.name}</h2>
                  <h4 className="">{member.role}</h4>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
