import React from "react";
import "./Home.css";
import Mint from "../components/Mint";
import Navigation from "../components/Navigation";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "../components/About";
import { selectColorMode } from "../redux/app";
import { useSelector } from "react-redux";
import Terms from "../components/Terms";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import Tools from "../components/Tools";

export default function Home(props) {
  const colorMode = useSelector(selectColorMode);

  return (
    <Router>
      <div class={`App d-flex flex-row col-12 h-100 ${colorMode}`}>
        <div className="navigation col-2">
          <Navigation />
        </div>
        <div className="page_content col-10">
          <Switch>
            <Redirect exact from="/" to="/mint" />
            <Route exact path="/mint" component={Mint} />
            <Route path="/about" component={About} />
            <Route path="/roadmap" component={Roadmap} />
            <Route path="/team" component={Team} />
            <Route path="/tools" component={Tools} />
            <Route path="/terms" component={Terms} />
            {/* <Route path="/raid" component={Raid} /> */}
            {/* <Route path="/collection" component={Collection} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
