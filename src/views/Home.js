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

export default function Home(props) {
  return (
    <Router>
      <div class="App darken">
        <div className="full_app d-flex flex-row col-12 h-100">
          <div className="navigation col-2">
            <Navigation />
          </div>
          <div className="page_content col-10">
            <Switch>
              <Redirect exact from="/" to="/mint" />
              <Route exact path="/mint" component={Mint} />
              <Route path="/about" component={About} />
              {/* <Route path="/raid" component={Raid} /> */}
              {/* <Route path="/collection" component={Collection} /> */}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
