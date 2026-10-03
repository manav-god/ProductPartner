export type FaqItem = {
  question: string;
  answer: string;
};

export const pageFaqs: Record<string, FaqItem[]> = {
  "/product-development": [
    {
      question: "What is product development?",
      answer:
        "Product development is the process of turning a product opportunity or idea into a usable, tested, launched, and continuously improved product. It can include discovery, validation, UX/UI design, prototyping, MVP development, engineering, testing, deployment, analytics, and post-launch iteration.",
    },
    {
      question:
        "What is the difference between product development and software development?",
      answer:
        "Software development primarily focuses on designing, coding, testing, and maintaining software. Product development is broader: it connects customer problems, product strategy, user experience, technology, engineering, launch, and ongoing product improvement. Software development can therefore be one important part of the larger product development process.",
    },
    {
      question: "What is included in product development services?",
      answer:
        "Product development services can include product discovery, validation, MVP strategy, UX/UI design, prototyping, software engineering, API integrations, quality assurance, deployment, analytics, product launch, and post-launch improvements. The exact scope depends on the product stage and business objectives.",
    },
    {
      question: "How long does product development take?",
      answer:
        "Product development timelines vary based on product complexity, scope, platform requirements, integrations, design needs, technical dependencies, and validation requirements. A focused MVP generally requires less time than a full-scale product with multiple workflows, integrations, and user groups.",
    },
    {
      question: "Can you develop an MVP before building the full product?",
      answer:
        "Yes. An MVP can help teams test the core product experience and important assumptions before investing in a larger product. The goal is to identify the smallest useful version that can provide meaningful feedback from real users while creating a foundation for future development.",
    },
  ],
  "/product-management": [
    {
      question: "What does a product management consultant do?",
      answer:
        "A product management consultant helps organizations make better product decisions across areas such as product strategy, discovery, roadmapping, prioritization, requirements, and product growth. Depending on the need, the engagement can support a specific product challenge or a broader product management function.",
    },
    {
      question: "What are product management services?",
      answer:
        "Product management services can include product strategy, customer discovery, user research, product roadmapping, prioritization, MVP definition, product requirements, analytics, and product growth. The exact scope depends on the product's stage, goals, customers, and internal team capabilities.",
    },
    {
      question:
        "What is the difference between product management and project management?",
      answer:
        "Product management primarily focuses on what should be built, why it matters, who it serves, and what outcome the product should create. Project management focuses more on how and when work is planned, coordinated, delivered, and managed. The two functions can work closely together during product development.",
    },
    {
      question: "Why is product discovery important?",
      answer:
        "Product discovery helps teams understand customer problems, validate assumptions, identify opportunities, and reduce uncertainty before committing significant development resources. It can help teams avoid building features that solve problems customers do not consider important.",
    },
    {
      question: "When should a startup invest in product management?",
      answer:
        "Startups can benefit from product management before an MVP, during MVP development, while searching for product-market fit, and as the product scales. The focus changes with each stage, from validating the problem and defining the MVP to prioritizing growth opportunities and managing a larger product portfolio.",
    },
  ],
  "/product-marketing": [
    {
      question: "What does a product marketing agency do?",
      answer:
        "A product marketing agency helps a business research its market, define product positioning, develop messaging, plan go-to-market activity, support demand generation, and improve how the product is discovered and understood.",
    },
    {
      question:
        "What's the difference between product marketing and digital marketing?",
      answer:
        "Digital marketing primarily describes channels and tactics such as search, social, email, and paid media. Product marketing starts with the product, customer, market, and competitive landscape, then connects that understanding to messaging and channels.",
    },
    {
      question: "Why do B2B companies need product marketing?",
      answer:
        "B2B products often involve longer buying cycles, multiple stakeholders, technical requirements, and higher consideration. Product marketing helps translate product capabilities into business value and gives sales and marketing teams consistent positioning.",
    },
    {
      question: "Can product marketing improve SEO and AI search visibility?",
      answer:
        "Yes. Product marketing supplies the customer language, product context, questions, positioning, and evidence that can make content more useful for traditional search, answer engines, and generative AI search experiences.",
    },
    {
      question: "When should a startup invest in product marketing?",
      answer:
        "Startups can use product marketing before launch, during go-to-market, and after launch. The scope can begin with positioning and buyer research, then expand into messaging, content, sales enablement, search, and product growth.",
    },
  ],
};
