import { offeringPages } from "@/lib/offering-pages";
import { basketballManagement } from "@/lib/industries/basketball-management";
import { clinicalDecisionSupport } from "@/lib/industries/clinical-decision-support";
import { threePlManagement } from "@/lib/industries/3pl-management";
import { flagFootballAppDevelopment } from "@/lib/industries/flag-football-app-development";
import { fleetManagement } from "@/lib/industries/fleet-management";
import { footballManagement } from "@/lib/industries/football-management";
import { freightBrokerage } from "@/lib/industries/freight-brokerage";
import { golfAppDevelopment } from "@/lib/industries/golf-app-development";
import { healthcareDataAnalytics } from "@/lib/industries/healthcare-data-analytics";
import { healthcareInteroperability } from "@/lib/industries/healthcare-interoperability";
import { laboratoryManagement } from "@/lib/industries/laboratory-management";
import { lacrosseSoftwareDevelopment } from "@/lib/industries/lacrosse-software-development";
import { lastMileDelivery } from "@/lib/industries/last-mile-delivery";
import { logisticsSoftware } from "@/lib/industries/logistics-software";
import { medicalBillingSoftwareDevelopment } from "@/lib/industries/medical-billing-software-development";
import { mentalHealthApp } from "@/lib/industries/mental-health-app";
import { patientEngagement } from "@/lib/industries/patient-engagement";
import { pharmacyManagement } from "@/lib/industries/pharmacy-management";
import { pickleballAppDevelopment } from "@/lib/industries/pickleball-app-development";
import { routeOptimization } from "@/lib/industries/route-optimization";
import { soccerAppDevelopment } from "@/lib/industries/soccer-app-development";
import { supplyChainVisibility } from "@/lib/industries/supply-chain-visibility";
import { tennisAppDevelopment } from "@/lib/industries/tennis-app-development";
import { transportationManagement } from "@/lib/industries/transportation-management";
import type { IndustryPageData } from "@/lib/industries/types";

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqPage = {
  path: string;
  label: string;
  items: FaqItem[];
};

const serviceFaqs = {
  "/product-development": [
    {
      question: "Who owns the code?",
      answer: "You do. 100% of the code and IP.",
    },
    {
      question: "How long does an MVP take?",
      answer: "A focused MVP is usually a few months. The scope sets the timeline.",
    },
    {
      question: "What do you build with?",
      answer: "The stack that fits the product. We agree it before the build starts.",
    },
    {
      question: "What happens after launch?",
      answer: "We stay on, and keep shipping feature releases in a steady rhythm.",
    },
  ],
  "/product-management": [
    {
      question: "How is this different from hiring a product manager?",
      answer: "You get product leadership from day one, without a full-time salary or a long search.",
    },
    {
      question: "Do you work with our existing engineers?",
      answer: "Yes. I work with the engineers you already have, next to your founders.",
    },
    {
      question: "Can we start small?",
      answer: "Yes. We can start with the roadmap and the next few releases, then grow from there.",
    },
    {
      question: "Do you take equity?",
      answer: "For the right early-stage startups, yes. A mix of cash and equity, agreed case by case.",
    },
  ],
  "/product-marketing": [
    {
      question: "What is AEO and GEO?",
      answer:
        "Answer engine and generative engine optimisation. In plain words: making sure AI assistants can find, understand and recommend your product when buyers ask.",
    },
    {
      question: "Do you work with consumer products?",
      answer: "Not yet. We work with B2B products for now.",
    },
    {
      question: "How long before we see results?",
      answer: "The first inbound leads can show up within a month. It depends on where you start.",
    },
    {
      question: "Do you write the content?",
      answer: "Yes. We write the pages and articles, then review them with you every month.",
    },
  ],
} satisfies Record<string, FaqItem[]>;

export const sportsTechFaqs: FaqItem[] = [
  {
    question: "What types of sports software can Product Partner develop?",
    answer:
      "We can scope custom league management platforms, tournament software, sports mobile applications, team management systems, scoring applications, athlete platforms, and fan engagement products.",
  },
  {
    question: "Can you build a separate application for my sport?",
    answer:
      "Yes. We can develop a dedicated application or platform around your sport’s rules, workflows, users, and business requirements.",
  },
  {
    question: "Can one platform support multiple sports?",
    answer:
      "Yes. A multi-sport platform can share common capabilities while using sport-specific modules for different competition formats and operational requirements.",
  },
  {
    question: "Can you build both web and mobile sports applications?",
    answer: "Yes. Depending on the project, a solution can include a website, mobile apps, and an administration portal.",
  },
  {
    question: "Can you integrate existing sports APIs?",
    answer:
      "We can assess and scope integrations based on API availability, documentation, access permissions, and licensing requirements.",
  },
];

export const healthcareTechFaqs: FaqItem[] = [
  {
    question: "What is healthcare software development?",
    answer:
      "Healthcare software development is the process of planning, designing, building, and maintaining digital products for healthcare operations and services. Examples include medical billing systems, patient portals, EHR integrations, pharmacy systems, laboratory software, and healthcare analytics platforms.",
  },
  {
    question: "Can you build custom healthcare software for hospitals and clinics?",
    answer:
      "Yes. Custom software can be scoped around the workflows of hospitals, clinics, specialty practices, and other healthcare organisations. The scope depends on users, operational requirements, integrations, and applicable privacy and security obligations.",
  },
  {
    question: "Can healthcare software integrate with existing EHR and EMR systems?",
    answer:
      "Yes. Integration options depend on the systems involved and the interfaces they support. Projects may use APIs, HL7 messaging, FHIR resources, or vendor-specific integration methods.",
  },
  {
    question: "How do you approach healthcare data security?",
    answer:
      "Security requirements should be considered during discovery, architecture, development, testing, and deployment. For projects involving electronic protected health information, the applicable HIPAA obligations and safeguards must be assessed with the organisation’s compliance and security stakeholders.",
  },
  {
    question: "Can you develop a healthcare MVP?",
    answer:
      "Yes. A healthcare MVP can focus on a carefully selected set of workflows and user needs. The scope should also account for data sensitivity, integrations, safety considerations, and any regulatory requirements relevant to the intended use.",
  },
  {
    question: "How much does custom healthcare software development cost?",
    answer:
      "The cost depends on product complexity, integrations, user roles, data requirements, security controls, and the delivery scope. A discovery discussion helps establish the requirements before preparing a realistic estimate.",
  },
  {
    question: "Do you work with healthcare startups and established providers?",
    answer:
      "The product development approach can support early-stage digital health businesses as well as established organisations looking to develop or improve software. The project fit and scope are assessed during the initial discussion.",
  },
];

export const logisticsTechFaqs: FaqItem[] = [
  {
    question: "What is logistics software development?",
    answer:
      "Logistics software development is the process of building digital systems that support the planning, movement, tracking, storage, and delivery of goods. Examples include TMS platforms, 3PL management systems, fleet applications, freight brokerage software, and delivery management tools.",
  },
  {
    question: "What types of logistics software can you develop?",
    answer:
      "Solutions can include custom logistics platforms, transportation management systems, 3PL software, last-mile delivery applications, supply chain visibility platforms, freight brokerage systems, fleet management software, and route optimization tools.",
  },
  {
    question: "Can custom logistics software integrate with existing systems?",
    answer:
      "Yes. Depending on the systems involved, integrations may use APIs, EDI, webhooks, or vendor-supported interfaces. Common integration targets include ERP, WMS, carrier systems, GPS, telematics, and payment platforms.",
  },
  {
    question: "Can you build software for freight brokers and 3PL companies?",
    answer:
      "Yes. The product scope can be designed around broker or 3PL workflows, including load management, carrier coordination, client accounts, order processing, shipment tracking, and billing.",
  },
  {
    question: "Can logistics software support multiple clients and locations?",
    answer:
      "Yes. Multi-client and multi-location capabilities can be included where required, with appropriate account separation, role-based permissions, and administrative controls.",
  },
  {
    question: "How much does custom logistics software development cost?",
    answer:
      "Cost depends on product complexity, user roles, integrations, workflow requirements, data needs, and deployment scope. A discovery discussion helps define the right solution and estimate.",
  },
  {
    question: "Can you build a logistics software MVP?",
    answer:
      "Yes. An MVP can focus on a specific operational problem and a prioritised set of workflows. The scope can expand as the product is tested and business requirements develop.",
  },
];

function industryFaq(path: string, label: string, page: IndustryPageData): FaqPage {
  return {
    path,
    label,
    items: page.faqs.items.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
  };
}

export const faqPages: FaqPage[] = [
  { path: "/product-development", label: "Services / Product development", items: serviceFaqs["/product-development"] },
  { path: "/product-management", label: "Services / Product management", items: serviceFaqs["/product-management"] },
  { path: "/product-marketing", label: "Services / Product marketing", items: serviceFaqs["/product-marketing"] },
  ...offeringPages.map((page) => ({
    path: `/${page.slug}`,
    label: `Services / ${page.name}`,
    items: page.faqs.map((item) => ({ question: item.question, answer: item.answer })),
  })),
  { path: "/sports-tech", label: "Sports / Sports Tech", items: sportsTechFaqs },
  industryFaq("/industries/football-management", "Sports / Football management", footballManagement),
  industryFaq("/soccer-app-development", "Sports / Soccer app", soccerAppDevelopment),
  industryFaq("/basketball-management-software-development", "Sports / Basketball management", basketballManagement),
  industryFaq("/custom-golf-app-development", "Sports / Golf app", golfAppDevelopment),
  industryFaq("/custom-pickleball-app-development", "Sports / Pickleball app", pickleballAppDevelopment),
  industryFaq("/custom-lacrosse-software-development", "Sports / Lacrosse software", lacrosseSoftwareDevelopment),
  industryFaq("/custom-tennis-app-development", "Sports / Tennis app", tennisAppDevelopment),
  industryFaq("/custom-flag-football-app-development", "Sports / Flag football app", flagFootballAppDevelopment),
  { path: "/healthcare-technology", label: "Healthcare / Healthcare Technology", items: healthcareTechFaqs },
  industryFaq("/custom-medical-billing-software-development", "Healthcare / Medical billing", medicalBillingSoftwareDevelopment),
  industryFaq("/custom-healthcare-interoperability-software-development", "Healthcare / Interoperability", healthcareInteroperability),
  industryFaq("/clinical-decision-support-software-development", "Healthcare / Clinical decision support", clinicalDecisionSupport),
  industryFaq("/patient-engagement-software-development", "Healthcare / Patient engagement", patientEngagement),
  industryFaq("/healthcare-data-analytics-software-development", "Healthcare / Data analytics", healthcareDataAnalytics),
  industryFaq("/mental-health-app-development", "Healthcare / Mental health app", mentalHealthApp),
  industryFaq("/pharmacy-management-software-development", "Healthcare / Pharmacy management", pharmacyManagement),
  industryFaq("/laboratory-management-software-development", "Healthcare / Laboratory management", laboratoryManagement),
  { path: "/logistics-transportation-technology", label: "Logistics / Logistics & Transportation", items: logisticsTechFaqs },
  industryFaq("/custom-logistics-software-development", "Logistics / Custom logistics software", logisticsSoftware),
  industryFaq("/transportation-management-system-development", "Logistics / Transportation management", transportationManagement),
  industryFaq("/3pl-management-software-development", "Logistics / 3PL management", threePlManagement),
  industryFaq("/last-mile-delivery-software-development", "Logistics / Last-mile delivery", lastMileDelivery),
  industryFaq("/supply-chain-visibility-software-development", "Logistics / Supply chain visibility", supplyChainVisibility),
  industryFaq("/freight-brokerage-software-development", "Logistics / Freight brokerage", freightBrokerage),
  industryFaq("/custom-fleet-management-software-development", "Logistics / Fleet management", fleetManagement),
  industryFaq("/custom-route-optimization-software-development", "Logistics / Route optimization", routeOptimization),
];

export function faqPageByPath(path: string) {
  return faqPages.find((page) => page.path === path);
}
