import React, { Component } from "react";

import Accordion from "./components/Accordion";

import alerts from "./alerts.js";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="arc-fraud-schemes">
        <div className="container">
       <div>
       <a href="/support-training/fraud-prevention/" title="Fraud Prevention" className="btn--link parentLink">Fraud Prevention</a>
        <h1>Fraud Schemes</h1>
        <p className="byline">Fraudsters are often creative in the schemes they devise to manipulate the customer service skills of travel agents.</p>
        <a href="https://www2.arccorp.com/support-training/fraud-prevention/report-fraud/" title="Report Fraud" className="ctaBtn ctaBtn--main">Report Fraud</a>
       </div>
       <br/>
       <br/>
        <h2 class="mainTitle"><a id="alerts"></a>Alerts</h2>
        <p>ARC posts the latest information on fraud schemes, scams and criminals within the travel industry and tips on how to protect your business from fraud.</p>
        <hr/>
          <div className="row">
            <div className="col-lg-12">
              <Accordion name={alerts[0].name} body={alerts[0].body}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;