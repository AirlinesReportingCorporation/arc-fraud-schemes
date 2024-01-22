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
            <ul>
              <li>
                <em>
                  NOTE: VOIP telephone numbers are not necessarily bad or
                  fraudulent; it merely means you cannot be sure where the
                  person is really calling from.
                </em>
              </li>
            </ul>
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
  {
    name: "Corporate Booking Schemes",
    id: 2,
    anchor: "corporate-booking",
    updated: "",
    body: (
      <>
        <p>
          Corporate booking schemes contain many of the same characteristics of
          a social engineering scheme but the fraudster targets agents with
          existing corporate clients or requests that the agency sign them up as
          a new client.
        </p>
        <ul>
          <li>
            <strong>Internet research</strong>: Fraudster conducts online research to find an executive’s name and title that he will use when communicating with their corporate travel agency.
          </li>
          <li>
            <strong>Similar email address</strong>: Fraudster creates an email address similar to the real corporate email address though with extra letters or numbers. Use the website <a href="WhoIs.com">WhoIs.com</a> and refer to our <a href="https://www2.arccorp.com/support-training/fraud-prevention/free-internet-tools/">Free Internet Tools</a> page to find out when an email address was created.
            <ul>
              <li>True email address: john.doe@uofmcorp.com</li>
              <li>Fraudster email address: john.doe@uofmcorp-uk.com</li>
            </ul>
          </li>
          <li>
            <strong>Fake referral</strong>: Fraudster may attempt to socially engineer a corporate employee to unwittingly “refer” him by phone or email to someone at their corporate travel agency.
          </li>
          <li>
            <strong>Immediate departure</strong>: Often for the same day out to three days from today
          </li>
          <li>
            <strong>VOIP telephone</strong>: The customer’s telephone number may
            mimic a local area code, though{" "}
            <a href="https://www2.arccorp.com/support-training/fraud-prevention/best-practices/">
              research on the internet
            </a>{" "}
            can quickly reveal it to be a VOIP (Voice-Over-Internet-Protocol)
            telephone number.
            <ul>
              <li>
                <em>
                  NOTE: VOIP telephone numbers are not necessarily bad or
                  fraudulent; it merely means you cannot be sure where the
                  person is really calling from.
                </em>
              </li>
            </ul>
          </li>
          <li>
            <strong>After-Hours Services</strong>: Fraudsters may wait until the evening hours to contact a corporate travel agency so that an After-Hours travel agent will handle them. This travel agent may not have the ability to <a href="https://www2.arccorp.com/support-training/fraud-prevention/best-practices/">verify caller information</a> with a corporate client.
          </li>
          <li>
            <strong>Fake website</strong>: Fraudsters may also try to dupe an agency into signing them up as a new corporate client by going so far as to create a fake website to showcase their company. The example below is a basic site and the links do not take you further into the website.
          </li>
        </ul>
        <p>Fake website created by a fraudster:</p>
        <img src="https://www2.arccorp.com/globalassets/support--training/fraud-prevention/schemes/fraud-schemes-pic1.jpg" />
      </>
    ),
  },
  {
    name: "Corporate Booking Tools",
    id: 3,
    anchor: "corporate-booking-tools",
    updated: "",
    body: (
      <>
      <p>Many large corporations have corporate booking tools sitting on their corporate websites that employees can access to book travel. Unfortunately, fraudsters are quite aware of this and target these bookings tools to issue tickets for their own customers. The fraudsters target employees of the corporation with phishing emails or malware to obtain their corporate login credentials. Once the fraudster has this information he/she can access the corporation website and then go to the link for the booking tool. Refer to the Best Practices page for suggestions of how to limit exposure to fraud via these tools.</p>
      </>
    ),
  },
  {
    name: "EDU Scheme",
    id: 4,
    anchor: "edu-scheme",
    updated: "",
    body: (
      <>
      <p>This scheme is similar to the corporate booking scheme and usually orchestrated by the same fraudsters. The targets in this scheme are the agencies that fulfill ticketing for universities and colleges.</p>
      <p>Below is an example of a real EDU scheme email sent to an agency claiming to be from their university client. The fraudster used the free email service Outlook to communicate with the agency, but the agency had a policy to only communicate using the <strong>.edu</strong> address. In addition, the telephone number is a <a href="https://www2.arccorp.com/support-training/fraud-prevention/free-internet-tools/">VOIP</a> number so you do not really know where in the world they are calling from.</p>
      <img src="https://www2.arccorp.com/globalassets/support--training/fraud-prevention/schemes/fraud-schemes-pic2.jpg"/>
      <p><em>NOTE: Certain information removed by ARC</em></p>
      </>
    ),
  },
  {
    name: "Ownership Change Scheme",
    id: 5,
    anchor: "",
    updated: "",
    body: (
      <>
      <p>Agents in the United States have been the victims of fraudulent ownership change schemes. These unauthorized ownership changes have usually involved situations where the ARC owner of record surrendered control of their agency to the prospective buyer or manager. The buyer promised to send the appropriate ownership change papers to ARC, but most times did not. The buyer or manager then conducted transactions that resulted in major financial losses to ARC participating airlines.</p>
      <ul>
        <li>Remember - Do not turn over the operation or control of your agency location, blank ticket stock, or access to driving electronic tickets to any third party (including the purchaser) until you have received written notification from ARC that your change of ownership is approved. Until that approval, the ARC agent/owner is responsible for all financial losses on ARC traffic documents and electronic tickets supplied to the location.</li>
        <li>Prior to executing any contract, meet with the prospective buyer face-to-face and obtain the following:
        <ul>
        <li>Original color photographs of purchaser and any representatives</li>
        <li>Color replicas of passport and/or driver's license</li>
        <li>Personal data of purchaser and any representatives, including home addresses, phone numbers, current and past employment</li>
      </ul>
        </li>
        <li>Once you have obtained personal data of the buyer and personnel, confirm the data through internet searches or other types of records that can verify the data provided. If purchaser objects, you should think twice about going forward with the sale.</li>
        <li>Observe and record the make, model and license plate numbers of all automobiles driven by the purchaser and representatives.</li>
        <li>The owner of record should periodically check with ARC's Accreditation Department to ensure a Change of Ownership Application has been submitted and that it is complete to allow timely processing.</li>
        <li>Do not provide the prospective buyer with access to sensitive data or systems (i.e., credit card numbers, personal information of clients, bank accounts, combination to safe, access to safe deposit boxes, GDS ticketing ability, etc.).</li>
        <li>Owners of record who believe they have been solicited by insincere purchasers are requested to notify ARC Fraud Prevention at 855.358.0393 or <a href="mailto:StopFraud@arccorp.com">StopFraud@arccorp.com</a>.</li>
      </ul>
      </>
    ),
  },
];

export default schemes;
