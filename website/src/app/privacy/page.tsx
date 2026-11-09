import { LegalPage } from "@/components/marketing/LegalPage";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Privacy policy",
  "How the NAHTREEK website handles enquiry information, technical data, service providers and privacy requests.",
  "/privacy",
);
const sections = [
  {
    title: "Scope and contact",
    text: "This notice describes information handled through the NAHTREEK website and enquiry channel. The NAHTREEK team can be contacted at nahtreek2@gmail.com for privacy questions. Separate services or future applications may require additional notices before collecting information.",
  },
  {
    title: "Enquiry and contact information",
    text: "When you contact us, you may provide your name, email address, phone number, enquiry type, subject and message. Your message may include a property location, project requirements or professional background. Provide only information relevant to your enquiry and that you are entitled to share.",
  },
  {
    title: "Accounts, professional data and documents",
    text: "This website does not currently provide account registration, document uploads or live professional profiles. Product screens use illustrative sample data. Do not include passwords, government identity numbers, payment details or confidential property documents in the enquiry form. If additional professional documents are needed later, the team should explain the purpose and appropriate channel first.",
  },
  {
    title: "Location and technical information",
    text: "The website does not request device geolocation. You may choose to describe your property’s general location in an enquiry. Hosting infrastructure may process technical information such as IP address, request time, browser information and error records to serve and protect the website.",
  },
  {
    title: "How information is used",
    text: "Enquiry information is used to understand and respond to your request, discuss services or professional interest, maintain relevant correspondence and address misuse or technical issues. It is not a request to subscribe to marketing. Contact us if you no longer want follow-up about your enquiry.",
  },
  {
    title: "Service providers and sharing",
    text: "Vercel provides website hosting. When email delivery is configured, the delivery provider and the business email service process messages so they can reach the team. Relevant details may need to be discussed with a professional to address your request; ask the team to clarify this before sharing confidential information. Providers may process information in locations outside your country under their own service arrangements.",
  },
  {
    title: "Cookies and analytics",
    text: "The website code does not currently add advertising trackers or optional analytics cookies. Infrastructure providers may process requests for delivery and security. If optional tracking or new data uses are introduced, this notice and any necessary choice controls should be updated before they are enabled.",
  },
  {
    title: "Retention",
    text: "Enquiry correspondence may remain in the business mailbox while the request and any resulting engagement are being handled. Retention depends on the purpose, unresolved issues and applicable record-keeping obligations; this website does not provide an automatic deletion schedule. Contact the team to ask about records relating to you or to request deletion.",
  },
  {
    title: "Security",
    text: "The production site uses HTTPS and server-side form validation. Email credentials are kept out of browser code. No website or email channel can guarantee absolute security, so avoid sending sensitive documents or credentials through this form. If you believe information has been exposed, contact the team promptly.",
  },
  {
    title: "Your requests and choices",
    text: "You may contact nahtreek2@gmail.com to request access, correction or deletion of information you provided, withdraw an enquiry, or raise a privacy concern. The team may need proportionate information to verify the request. Applicable law may require some records to be retained. These processes do not limit rights or complaint routes available under applicable law.",
  },
  {
    title: "Children and third-party links",
    text: "This enquiry channel is intended for adults arranging property services or professional work. Do not knowingly submit a child’s personal information. External services have their own privacy practices; review their notices before sharing information with them.",
  },
  {
    title: "Updates to this notice",
    text: "Changes will be reflected on this page with an updated date. Material changes to the purposes for which information is handled may require additional notice or consent, as applicable.",
  },
];
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      intro="Clear information about this website’s current enquiry experience and how to contact us about your data."
      sections={sections}
    />
  );
}
