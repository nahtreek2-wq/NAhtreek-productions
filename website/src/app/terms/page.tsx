import { LegalPage } from "@/components/marketing/LegalPage";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Terms of service",
  "Understand NAHTREEK’s platform role, website use, enquiry process and independent professional responsibilities.",
  "/terms",
);
const sections = [
  {
    title: "Website purpose and platform role",
    text: "NAHTREEK provides property-service information and an enquiry channel intended to facilitate connections between users and relevant professionals. NAHTREEK is not, by virtue of this website, your engineer, contractor, certifier or professional adviser.",
  },
  {
    title: "Current website features",
    text: "You can browse service information and contact the team. Account registration, live app bookings, online payments and escrow are not offered on this website. Product screens and any demo profiles are illustrative only and do not represent actual credentials, ratings, prices or availability.",
  },
  {
    title: "Your responsibilities",
    text: "Provide accurate information, use the website lawfully and share only information you are authorised to disclose. Evaluate whether a service and professional are suitable for your needs. Obtain specific qualified advice before making engineering, safety or property decisions.",
  },
  {
    title: "Professional responsibilities",
    text: "Professionals remain responsible for their stated experience, applicable qualifications, permissions, insurance where required, technical decisions and work. Designs, inspections, valuations, reports and certifications are the responsibility of the relevant qualified professional, not automatically endorsed or issued by NAHTREEK.",
  },
  {
    title: "Enquiries and service agreements",
    text: "Submitting an enquiry is not a confirmed booking, quotation or contract for work. Availability, scope, fees, taxes, site access, timing and deliverables must be agreed with the relevant party before an engagement. Ask for a written agreement and clarify who is responsible for each deliverable.",
  },
  {
    title: "Changes, cancellations and concerns",
    text: "Change requests, cancellations, refunds and rescheduling depend on the agreement with the professional or service provider. Discuss those terms before work begins. Contact the team if you need help raising a concern, but submitting a concern does not itself guarantee a refund or resolution.",
  },
  {
    title: "Permitted and prohibited use",
    text: "You may use the site to explore services and make genuine enquiries. Do not submit spam, impersonate another person, misrepresent credentials, upload malicious material, attempt unauthorised access, disrupt the service or collect other people’s information unlawfully.",
  },
  {
    title: "Accounts and future features",
    text: "There are no user accounts on this website at present. If account-based features are introduced, applicable account responsibilities and additional terms should be provided before registration. Never send account passwords through the enquiry form.",
  },
  {
    title: "Feedback and reviews",
    text: "Feedback should reflect genuine experience and must not contain false claims, unlawful content or another person’s confidential information. This website does not currently publish a live user-review system. Illustrative content should not be treated as a customer endorsement.",
  },
  {
    title: "Third-party services",
    text: "External websites, hosting, email and independent professionals are operated by their respective providers. Their terms may apply to your use of their services. An external link or introduction is not a guarantee of that provider’s work.",
  },
  {
    title: "Intellectual property",
    text: "The NAHTREEK brand and original website materials are protected by applicable intellectual-property law. You may view and share links for ordinary informational use. Do not misrepresent ownership or reuse protected materials commercially without the relevant permission. Third-party materials retain their respective ownership.",
  },
  {
    title: "Information and liability",
    text: "Website information is general and may not address your property’s particular circumstances. No structural, regulatory, financial or service outcome is guaranteed. Responsibility for an engagement follows the applicable agreement and law. Nothing in these terms excludes liability or consumer rights that cannot lawfully be excluded.",
  },
  {
    title: "Access restrictions and service changes",
    text: "Access may be limited to address misuse, security incidents, maintenance or legal requirements. Content and features may change. Any existing professional engagement remains subject to its own agreement; changes to the website do not automatically cancel it.",
  },
  {
    title: "Applicable law and disputes",
    text: "Mandatory laws and consumer protections applicable to your use and engagement continue to apply. Any choice of governing law or jurisdiction for a specific professional engagement should be stated in its agreement. Contact nahtreek2@gmail.com first to raise a website-related concern; this does not restrict any legal remedies available to you.",
  },
  {
    title: "Updates and contact",
    text: "This page may be updated as the website develops, with the revision date shown above. Questions about these terms or the current service can be sent to nahtreek2@gmail.com.",
  },
];
export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of service"
      intro="The role of this website, what an enquiry means, and the responsibilities of users and independent professionals."
      sections={sections}
    />
  );
}
