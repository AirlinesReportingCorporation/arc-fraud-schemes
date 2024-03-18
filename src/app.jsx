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
    let alertOrder = [7, 1, 2, 3, 4, 5, 6,];
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
            {title: "Resources", url: "https://www2.arccorp.com/support-training/fraud-prevention/"}
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
            <h1>Fraud Alerts & Schemes</h1>
            <p className="byline">
              Defend against fraud with ARC's alerts and gain insights into
              fraudsters' scheme tactics.
            </p>
            <a
              href="https://www2.arccorp.com/support-training/fraud-prevention/report-fraud/"
              title="Report Fraud"
              className="ctaBtn ctaBtn--main"
            >
              Report Fraud
            </a>
            <div class="twoButtons__spacer"></div>
            <a
              href="https://www2.arccorp.com/support-training/fraud-prevention/"
              title="Report Fraud"
              className="ctaBtn ctaBtn--secondary"
            >
              Resources
            </a>
          </div>
          <div className="fraud-alerts" id="alerts">
            <div className="row">
              <div className="col-lg-12">
                <div className="alert-header">
                  <h2 className="mainTitle">Alerts</h2>
                  <p>
                    Stay informed on the latest travel industry fraud with ARC's
                    updates, <br/> providing essential tips to safeguard your
                    business.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="show-button"
              onClick={() =>
                this.setState({ alertToggle: !this.state.alertToggle })
              }
            >
              {this.state.alertToggle ? (
                <span className="alerts-open">Collapse All Alerts</span>
              ) : (
                <span className="alerts-close">Expand All Alerts</span>
              )}
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
            <div className="row">
              <div className="col-lg-12">
                <div className="scheme-header">
                  <h2 className="mainTitle">Schemes</h2>
                  <p>
                    Learn how fraudsters deceive travel agents, gaining insights
                    to protect your <br/> business. Below, you'll find a list of
                    tactics frequently employed by fraudsters.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="show-button"
              onClick={() =>
                this.setState({ schemeToggle: !this.state.schemeToggle })
              }
            >
              {this.state.schemeToggle ? (
                <span className="alerts-open">Collapse All Schemes</span>
              ) : (
                <span className="alerts-close">Expand All Schemes</span>
              )}
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
