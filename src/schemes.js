import React from "react";

const schemes = [
  {
    name: "Social Engineering Scheme",
    id: 1,
    anchor: "social-engineering",
    updated: "",
    body: (
      <>
        <p>
          A social engineering scheme involves phone and/or email communication
          between the fraudster and a travel agent that will typically involve
          at least one of the following characteristics:
        </p>
        <ul>
          <li>
            <strong>Immediate departure</strong>: Often for the same day out to
            three days from today
          </li>
          <li>
            <strong>Social standing</strong>: Customer claims to be a doctor or
            minister
          </li>
          <li>
            <strong>Emergency travel</strong>: Someone in the “family” needs to
            travel immediately
          </li>
          <li>
            <strong>Fake referral</strong>: When asked how the customer found
            the agency, he/she claims their spouse used the agency a year ago,
            though no profile exists for that spouse in the system.
          </li>
          <li>
            <strong>“Straw purchase”</strong>: Customer claims to be local and
            requests a ticket for himself/herself with a departure from the
            nearest airport three weeks from today so there are few{" "}
            <a href="https://www2.arccorp.com/support-training/fraud-prevention/best-practices/">
              red flags
            </a>{" "}
            to indicate it’s a risky transaction. This ticket is not meant to be
            flown, it’s meant to establish a working relationship with a
            specific travel agent within the travel agency. The next tickets
            he/she orders are for real passengers who will travel.
          </li>
          <li>
            <strong>VOIP telephone</strong>: The customer’s telephone number may
            mimic a local area code, though{" "}
            <a href="https://www2.arccorp.com/support-training/fraud-prevention/best-practices/">
              research on the internet
            </a>{" "}
            can quickly reveal it to be a VOIP (Voice-Over-Internet-Protocol)
            telephone number.
            <li>
              <em>
                NOTE: VOIP telephone numbers are not necessarily bad or
                fraudulent; it merely means you cannot be sure where the person
                is really calling from.
              </em>
            </li>
          </li>
          <li>
            <strong>Digitally Altered Images</strong>: The customer emails
            images of their driver license or passport and the front and back of
            their credit card to make themselves appear legitimate. A{" "}
            <a href="https://www2.arccorp.com/support-training/fraud-prevention/digitally-altered-images/">
              review of such documentation
            </a>{" "}
            can sometimes reveal mistakes.
          </li>
        </ul>
      </>
    ),
  },
];

export default schemes;
