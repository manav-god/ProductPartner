import type { Metadata } from "next";
import { LegalContent } from "@/components/legal/LegalContent";

const title = "Privacy Policy | Product Partner";
const description =
  "How Product Partner collects, uses, and protects personal information when you use our website and services.";
const url = "https://productpartner.net/privacy/";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Product Partner" }],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: "website",
    siteName: "Product Partner",
    title,
    description,
    url,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function PrivacyPage() {
  return (
    <LegalContent
      eyebrow="Legal"
      title="Privacy Policy"
      updated="September 20, 2026"
      intro="This Privacy Policy explains how Product Partner collects, uses, and protects information when you visit productpartner.net or contact us about our services."
      sections={[
        {
          title: "1. Who we are",
          paragraphs: [
            "Product Partner is a product partnership firm based in Ahmedabad, India. For privacy-related questions, contact manav@productpartner.net.",
          ],
        },
        {
          title: "2. Information we collect",
          paragraphs: [
            "We may collect information you choose to provide and technical data generated when you use the site.",
          ],
          bullets: [
            "Contact details you submit through forms, such as name, email, phone number, and message content",
            "Business context you share about your product, company, or project needs",
            "Basic technical data such as IP address, browser type, device type, and pages visited",
            "Cookies or similar technologies used for site performance, security, and analytics where enabled",
          ],
        },
        {
          title: "3. How we use information",
          paragraphs: ["We use collected information to:"],
          bullets: [
            "Respond to inquiries and schedule conversations",
            "Provide, improve, and secure our website and services",
            "Understand how visitors use the site so we can improve content and performance",
            "Comply with legal obligations and protect our rights",
          ],
        },
        {
          title: "4. Sharing of information",
          paragraphs: [
            "We do not sell personal information. We may share information with trusted service providers who help us operate the site or deliver communications (for example hosting, email delivery, or analytics), only as needed to perform those services. We may also disclose information if required by law or to protect Product Partner, our users, or the public.",
          ],
        },
        {
          title: "5. Data retention",
          paragraphs: [
            "We keep personal information only as long as needed for the purposes described in this policy, including responding to inquiries, maintaining business records, and meeting legal requirements. When information is no longer needed, we delete or anonymize it where practical.",
          ],
        },
        {
          title: "6. Security",
          paragraphs: [
            "We take reasonable technical and organizational measures to protect personal information. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
          ],
        },
        {
          title: "7. International visitors",
          paragraphs: [
            "Our team and service providers may process information in India and other countries. By using the site, you understand that your information may be transferred to and processed in jurisdictions that may have different data-protection laws than your own.",
          ],
        },
        {
          title: "8. Your choices",
          paragraphs: [
            "Depending on applicable law, you may request access to, correction of, or deletion of personal information we hold about you. You can also ask us to stop contacting you for marketing. To make a request, email manav@productpartner.net.",
          ],
        },
        {
          title: "9. Third-party links",
          paragraphs: [
            "Our website may link to third-party sites or services. Their privacy practices are governed by their own policies, and we are not responsible for their content or handling of information.",
          ],
        },
        {
          title: "10. Children's privacy",
          paragraphs: [
            "Our services are directed to businesses and professionals. We do not knowingly collect personal information from children under 16. If you believe a child has provided information to us, contact us and we will take appropriate steps to delete it.",
          ],
        },
        {
          title: "11. Changes to this policy",
          paragraphs: [
            "We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page will change when we do. Continued use of the site after an update means you accept the revised policy.",
          ],
        },
      ]}
    />
  );
}
