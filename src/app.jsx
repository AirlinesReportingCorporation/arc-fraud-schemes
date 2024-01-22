import React, { Component } from "react";

import Accordion from "./components/Accordion";

import { Stickynav } from "arccorp-vars";

import alerts from "./alerts.js";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="arc-fraud-schemes">
        <Stickynav
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
          <h2 class="mainTitle">
            <a id="alerts"></a>Alerts
          </h2>
          <p>
            ARC posts the latest information on fraud schemes, scams and
            criminals within the travel industry and tips on how to protect your
            business from fraud.
          </p>
          <hr />
          <div className="row">
            <div className="col-lg-12">
              {alerts.map(function (alert) {
                return (
                  <Accordion
                    name={alert.name}
                    body={alert.body}
                    anchor={alert.anchor}
                    updated={alert.updated}
                  />
                );
              })}
            </div>
          </div>
          <hr />
          <h2 class="mainTitle">
            <a id="schemes"></a>Schemes
          </h2>
          <div className="scheme-info">
            <p>
              Fraudsters are often creative in the schemes they devise to
              manipulate the customer service skills of travel agents who always
              want to help their clients. The information they provide makes
              them appear as legitimate customers with plausible reasons for
              ordering tickets for themselves and others with close-in departure
              dates. The fraudsters create a compelling story as to why an agent
              should help them or create a sense of urgency to get that agent to
              lower their guard and get the tickets issued. Once those tickets
              are issued, the fraudster alerts his own customers that they are
              ready to travel.
            </p>
            <p>
              Below you’ll find schemes that are commonly employed by
              fraudsters.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
