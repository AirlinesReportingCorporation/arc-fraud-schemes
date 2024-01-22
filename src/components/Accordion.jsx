import React, { Component } from "react";

export default class Accordion extends Component {
  constructor(props) {
    super(props);
  }

  


  render() {
    return (
        <div className="col-lg-12 show">
        <div>
          <div>
            <div className="airlinePartRow active">
              <div className="airlinePartRowTop">
                <div className="airlinePartRowStart container-fluid">
                  <div className="row align-items-center">
                    <div className="col-11">
                      <div className="d-flex flex-column flex-lg-row">
                        <div className="">
                          <div className="airlinePartName">
                            {this.props.name}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1">
                      <div>
                        <div className="apExpand"><div className="ap-close"></div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="airlinePartRowInfo show animated slideInDown">
                  <div className="row no-gutters">
                    <div className="col">
                      <div className="apSection apSectionMargin">
                        <div className="apSectionTop">
                          <div className="d-flex align-items-center">
                            <div className="mr-1">
                              <div className="apUpdated">
                                <span>Updated:</span> October 25, 2023
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="apSectionBottom">
                          {this.props.body}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
