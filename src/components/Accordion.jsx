import React, { useEffect, useState } from "react";

export default function Accordion(props) {
  const [isShowing, setShowing] = useState(false);

  useEffect(() => {
    let showing = props.showing;
    if (showing) {
      setShowing(true);
    }
    else {
      setShowing (false)
    }
  }, [props.showing])




  const toggleShow = () => {
    setShowing(!isShowing);
    console.log(isShowing);
  };
  
  return (
    <div className="col-lg-12 show">
      <div className={(isShowing ? "airlinePartRow active alert-box" : "airlinePartRow alert-box") + (props.highlighted ? " fraud-highlight" : "")}>
        <div className="airlinePartRowTop">
           <div
            className={
              isShowing
                ? "airlinePartRowStart container-fluid active"
                : "airlinePartRowStart container-fluid"
            }
            onClick={toggleShow}
          >
            <div className="row align-items-center">
              <div className="col-11">
                <div className="d-flex flex-column flex-lg-row">
                  <div className="">
                    <div className="airlinePartName" id={props.anchor}>
                      {props.name}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <div>
                  <div className="apExpand">
                    <div className={isShowing ? "fs-close" : "fs-open" }></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              isShowing
                ? "airlinePartRowInfo show animated slideInDown"
                : "airlinePartRowInfo"
            }
          >
            <div className="row no-gutters">
              <div className="col">
                <div className="apSection apSectionMargin">
                  {props.updated != "" ? (
                    <div className="apSectionTop">
                      <div className="d-flex align-items-center">
                        <div className="mr-1">
                          <div className="apUpdated">
                            <span>Updated:</span> {props.updated}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="apSectionBottom">{props.body}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
