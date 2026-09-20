import type { Metadata } from "next";
import { LegalContent } from "@/components/legal/LegalContent";

const title = "Terms of Use | Product Partner";
const description =
  "Terms governing use of the Product Partner website and engagement with our product partnership services.";
const url = "https://productpartner.net/terms/";

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

export default function TermsPage() {
  return (
    <LegalContent
      eyebrow="Legal"
      title="Terms of Use"
      updated="September 20, 2026"
      intro="These Terms of Use govern your access to productpartner.net and any inquiry or engagement related to Product Partner services. By using the site, you agree to these terms."
      sections={[
        {
          title: "1. Agreement",
          paragraphs: [
            "These Terms form an agreement between you and Product Partner. If you do not agree, do not use the website. Separate written agreements may apply when you engage us for product development, product leadership, marketing, or related services. Those agreements control if they conflict with these Terms.",
          ],
        },
        {
          title: "2. Who we are",
          paragraphs: [
            "Product Partner provides product partnership services including product development, fractional product leadership, and product marketing. Our contact email is manav@productpartner.net. We operate from Ahmedabad, India.",
          ],
        },
        {
          title: "3. Website use",
          paragraphs: [
            "You may use this website for lawful purposes only. You agree not to:",
          ],
          bullets: [
            "Attempt to disrupt, scrape abusively, or gain unauthorized access to the site or related systems",
            "Submit false, misleading, or harmful information through forms or other channels",
            "Use the site to send spam, malware, or unlawful content",
            "Copy, reproduce, or exploit site content for commercial purposes without our prior written consent, except as allowed by applicable law",
          ],
        },
        {
          title: "4. No professional advice on the website alone",
          paragraphs: [
            "Content on this website is for general informational purposes. It is not legal, financial, investment, or other professional advice, and it does not create a client relationship by itself. Project scope, pricing, timelines, and deliverables are defined only in a written engagement agreement.",
          ],
        },
        {
          title: "5. Inquiries and proposals",
          paragraphs: [
            "Submitting a contact form or scheduling a call does not obligate either party to enter into a paid engagement. Any proposal, estimate, or discussion is non-binding until a written agreement is signed by authorized representatives of both parties.",
          ],
        },
        {
          title: "6. Intellectual property",
          paragraphs: [
            "The Product Partner name, logo, website design, text, graphics, and other materials on this site are owned by Product Partner or used with permission. You may not use our marks or materials in a way that suggests endorsement or partnership without prior written approval.",
            "Work product created under a client engagement is governed by the intellectual-property terms in that engagement agreement.",
          ],
        },
        {
          title: "7. Third-party services and links",
          paragraphs: [
            "The site may reference or link to third-party tools, platforms, or websites. We do not control those services and are not responsible for their availability, content, or practices. Use of third-party services is at your own risk and subject to their terms.",
          ],
        },
        {
          title: "8. Disclaimer of warranties",
          paragraphs: [
            "The website and its content are provided “as is” and “as available.” To the fullest extent permitted by law, Product Partner disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components.",
          ],
        },
        {
          title: "9. Limitation of liability",
          paragraphs: [
            "To the fullest extent permitted by law, Product Partner and its founders, employees, and partners will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or business opportunities, arising from your use of the website. Our total liability for claims related to website use is limited to the greater of (a) the amount you paid us specifically for website-related services in the three months before the claim, or (b) USD 100. Liability for paid client engagements is governed by the applicable engagement agreement.",
          ],
        },
        {
          title: "10. Indemnity",
          paragraphs: [
            "You agree to indemnify and hold harmless Product Partner from claims, damages, losses, and expenses (including reasonable legal fees) arising from your misuse of the site, your violation of these Terms, or your violation of any third-party rights.",
          ],
        },
        {
          title: "11. Privacy",
          paragraphs: [
            "Our handling of personal information is described in our Privacy Policy. By using the site, you also acknowledge that policy.",
          ],
        },
        {
          title: "12. Changes",
          paragraphs: [
            "We may update these Terms from time to time. The “Last updated” date will change when we do. Continued use of the site after changes means you accept the updated Terms.",
          ],
        },
        {
          title: "13. Governing law",
          paragraphs: [
            "These Terms are governed by the laws of India, without regard to conflict-of-law principles. Courts in Ahmedabad, Gujarat, India shall have exclusive jurisdiction over disputes arising from these Terms or use of the website, unless a separate engagement agreement specifies otherwise.",
          ],
        },
        {
          title: "14. Contact",
          paragraphs: [
            "For questions about these Terms, email manav@productpartner.net or use the contact page on this website.",
          ],
        },
      ]}
    />
  );
}
