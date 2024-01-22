import React from "react";

const alerts = [
  {
    name: "Urgent Updates: Phishing Email Impersonating Sabre",
    id: 1,
    body: (
      <>
        <p>
          There is an increase in phishing emails impersonating or pretending to
          be from Sabre. These emails are not from Sabre.
        </p>
        <p>Sabre will never:</p>
        <ul>
          <li>Send an email with an embedded link to a login page.</li>
          <li>Send an email ‘threatening’ loss of access to your account.</li>
          <li>
            Send an ‘unsolicited’ email notifying you to click on a link to
            validate or update your account.
          </li>
        </ul>
        <p>
          If you receive a suspicious email from Sabre, 
          <strong> report it immediately by emailing Sabre </strong>
          <a href="mailto:customer.care@sabre.com">(customer.care@sabre.com)</a>
          <strong> first and then ARC </strong>
          <a href="mailto:stopfraud@arccorp.com">(stopfraud@arccorp.com)</a>.
        </p>
        <p>
          <strong>October 25, 2023 Alert</strong>: Below is a screenshot of a fraudulent
          email with the subject line “Sabre Technology Upgrade Notification.”
        </p>
        {/* Test Image, replace with actual fraud image */}
        <img src="https://www2.arccorp.com/globalassets/support--training/fraud-prevention/arc-reputation-check/matrix_231x170_arcreputationcheck_3.png" />
        <p>
          If you receive a suspicious email from Sabre,
          <strong> report it immediately by emailing Sabre </strong>
          <a href="mailto:customer.care@sabre.com">(customer.care@sabre.com)</a>
          <strong> first and then ARC </strong>
          <a href="mailto:stopfraud@arccorp.com">(stopfraud@arccorp.com)</a>.
        </p>
        <hr/>
        <p>
          <strong>October 19, 2023 Alert</strong>: The new fraudulent email format may
          have a different call to action than previous messages, along with the
          naming convention of the notice from Sabre to RED CENTRAL. The subject
          line contains a nonstandard letter "a.”
        </p>
        <p>
          Below is a screenshot of a phishing email with the subject line
          "Account Update Request," urgently requesting agents to click a link
          for profile updates. Notably, the upgrade timeframe is 10/19/23, with
          a finish date of 9/5/23, raising an urgent red flag.
        </p>
        <p>
          If you receive a suspicious email from Sabre,
          <strong> report it immediately by emailing Sabre </strong>
          <a href="mailto:customer.care@sabre.com">(customer.care@sabre.com)</a>
          <strong> first and then ARC </strong>
          <a href="mailto:stopfraud@arccorp.com">(stopfraud@arccorp.com)</a>.
        </p>
        {/* Test Image, replace with actual fraud image */}
        <img src="https://www2.arccorp.com/globalassets/support--training/fraud-prevention/arc-reputation-check/matrix_231x170_arcreputationcheck_3.png" />
        <p>To address this issue, you should take the following steps:</p>
        <ul>
          <li><strong>Verify the Authenticity</strong>: Make sure that communication claiming to be from Sabre is legitimate. Double-check the sender's email address, domain and other identifying information.</li>
          <li><strong>Do Not Click on Suspicious Links</strong>: If you receive emails or messages with unfamiliar links or attachments, refrain from clicking on them. These could potentially contain malware or lead to phishing sites.</li>
          <li><strong>Contact Sabre</strong>: Please reach out to Sabre's official contact channels to inform them of the impersonation issue. They may have resources and recommendations to address the situation.</li>
          <li><strong>Educate Your Team</strong>: Ensure your team knows about the impersonation threat and how to recognize suspicious messages. Provide training on email security and best practices for identifying phishing attempts.</li>
          <li><strong>Monitor for Similar Incidents</strong>: Keep an eye out for further instances of impersonation and document them. This will help in tracking the scope and pattern of the attacks.</li>
          <li><strong>Report to Authorities</strong>: If the impersonation attempts involve fraudulent activities, consider reporting them to relevant authorities or cybersecurity agencies.</li>
          <li><strong>Update Security Protocols</strong>: Review and strengthen your organization's email security protocols. This may include implementing email filtering, authentication measures and two-factor authentication (2FA).</li>
          <li><strong>Internal Communication</strong>: Communicate the threat within your organization, especially those who handle sensitive information or access critical systems.</li>
          <li><strong>Document and Preserve Evidence</strong>: If you suspect criminal activity, document evidence related to the impersonation attempts, such as email headers, message content and related information.</li>
          <li><strong>Stay Informed</strong>: Keep yourself updated on the latest security threats and best practices for protecting your organization from email impersonation and phishing attacks.</li>
        </ul>
        <p>
          Please email ARC at 
          <a href="mailto:StopFraud@arccorp.com">StopFraud@arccorp.com</a> if
          you need assistance, and visit our 
          <a href="https://www2.arccorp.com/articles-trends/on-demand-webinars/">
            on-demand webinar page
          </a>
          to view the latest fraud awareness videos.
        </p>
      </>
    ),
  },
];

export default alerts;