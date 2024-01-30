import React, { Component } from "react";

import Accordion from "./components/Accordion";

import { Stickynav } from "arccorp-vars";

import alerts from "./alerts.js";
import schemes from "./schemes.js";

const highlightedIds = 1;

class App extends Component {
  constructor() {
    super();
    this.state = {
      alertToggle: false,
      schemeToggle: false,
    };
  }

  render() {
    // Set the order of the Array
    let alertOrder = [6, 1, 2, 3, 4, 5];
    let newAlerts = alertOrder.map(function (alertOrder) {
      return alerts[alertOrder - 1];
    });
    // set a local variable equal to the state
    let alertShow = this.state.alertToggle;
    let schemeShow = this.state.schemeToggle;

    return (
      <div className="arc-fraud-schemes">
        <Stickynav
          style={{ zIndex: "8" }}
          title="Fraud Schemes"
          stickyCTA="Report Fraud"
          stickyCTALink="https://www2.arccorp.com/support-training/fraud-prevention/report-fraud/"
          links={[
            { title: "Alerts", url: "#alerts" },
            { title: "Schemes", url: "#schemes" },
          ]}
        />
        <div className="container">
          <div className="arc-fraud-top">
            <a
              style={{ textTransform: "uppercase" }}
              href="/support-training/fraud-prevention/"
              title="Fraud Prevention"
              className="btn--link parentLink"
            >
              Fraud Prevention
            </a>
            <h1>Fraud Schemes</h1>
            <p className="byline">
              Fraudsters are often creative in the schemes they devise to
              manipulate the customer service skills of travel agents.
            </p>
            <a
              href="https://www2.arccorp.com/support-training/fraud-prevention/report-fraud/"
              title="Report Fraud"
              className="ctaBtn ctaBtn--main"
            >
              Report Fraud
            </a>
          </div>
          <br />
          <br />
          <div className="fraud-alerts" id="alerts">
            <h2 className="mainTitle">Alerts</h2>
            <p>
              ARC posts the latest information on fraud schemes, scams and
              criminals within the travel industry and tips on how to protect
              your business from fraud.
            </p>
            <hr />
            <div
              className="show-button"
              onClick={() =>
                this.setState({ alertToggle: !this.state.alertToggle })
              }
            >
              { this.state.alertToggle ? <span className="alerts-open">Collapse All Alerts</span> : <span className="alerts-close">Expand All Alerts</span> }
            </div>
            <div className="row">
              {newAlerts.map(function (alert, i) {
                return (
                  <Accordion
                    highlighted={i < highlightedIds ? true : false}
                    showing={alertShow}
                    key={alert.id}
                    name={alert.name}
                    body={alert.body}
                    anchor={alert.anchor}
                    updated={alert.updated}
                  />
                );
              })}
            </div>
          </div>
          <div className="fraud-schemes" id="schemes">
            <h2 className="mainTitle">Schemes</h2>
            <div className="scheme-info">
              <p>
                Fraudsters are often creative in the schemes they devise to
                manipulate the customer service skills of travel agents who
                always want to help their clients. The information they provide
                makes them appear as legitimate customers with plausible reasons
                for ordering tickets for themselves and others with close-in
                departure dates. The fraudsters create a compelling story as to
                why an agent should help them or create a sense of urgency to
                get that agent to lower their guard and get the tickets issued.
                Once those tickets are issued, the fraudster alerts his own
                customers that they are ready to travel.
              </p>
              <p>
                Below you’ll find schemes that are commonly employed by
                fraudsters.
              </p>
              <hr />
              <div
              className="show-button"
              onClick={() =>
                this.setState({ schemeToggle: !this.state.schemeToggle })
              }
            >
              { this.state.schemeToggle ? <span className="alerts-open">Collapse All Schemes</span> : <span className="alerts-close">Expand All Schemes</span> }
            </div>
            </div>
            <div className="row">
              {schemes.map(function (scheme) {
                return (
                  <Accordion
                    showing={schemeShow}
                    className="fraud-box"
                    key={scheme.id}
                    id={scheme.id}
                    name={scheme.name}
                    body={scheme.body}
                    anchor={scheme.anchor}
                    updated={scheme.updated}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
