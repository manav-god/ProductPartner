export type CaseStudyCardData = {
  id: string;
  slug: string;
  href: string;
  image: string;
  imageAlt: string;
  tags: string[];
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  description: string;
  slogan: string;
};

export type CaseStudySection = {
  title: string;
  body: string;
};

export type CaseStudyResult = {
  stat?: string;
  label: string;
  body: string;
};

export type TechStackItem = {
  name: string;
  icon: string;
};

export type CaseStudy = CaseStudyCardData & {
  title: string;
  role: string;
  cta: string;
  lead: string;
  services: string[];
  location: string;
  projectType: string;
  year: string;
  techStack: TechStackItem[];
  about: string[];
  challenges: CaseStudySection[];
  solutionsIntro: string;
  solutions: CaseStudySection[];
  features: CaseStudySection[];
  results: CaseStudyResult[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "fitness-app",
    slug: "fitness-app",
    href: "/work/fitness-app",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Athlete training with a fitness app on a phone",
    tags: ["Health & Fitness", "iOS & AI"],
    titleBefore: "AI Fitness Platform hiked ",
    titleHighlight: "Challenge engagement by 40%",
    titleAfter: " with Live Camera Rep Counting",
    description:
      "An iOS app that counts push-ups from the live camera and turns workouts into multiplayer challenges, with on-device pose detection and real-time leaderboards.",
    slogan: "Count on-device. Compete live.",
    title: "AI Fitness Challenge Platform",
    role: "iOS & AI Developer",
    cta: "Build a similar solution",
    lead: "Arjun partnered with a fitness product team to build an iOS app that counts push-ups from the live camera and turns workouts into multiplayer challenges. The engagement focused on on-device pose detection, real-time leaderboards, and a social loop that works without wearable hardware.",
    services: [
      "Custom Software Development",
      "AI / Computer Vision",
      "UI/UX Design",
      "API Integration",
      "QA/QC",
      "Project Management",
    ],
    location: "Remote",
    projectType: "Health & Fitness",
    year: "2026",
    techStack: [
      { name: "SwiftUI", icon: "/images/tech/swift.svg" },
      { name: "Vision / Core ML", icon: "/images/tech/apple.svg" },
      { name: "Firebase", icon: "/images/tech/firebase.svg" },
    ],
    about: [
      "Users wanted accurate rep counting and social motivation without buying extra sensors. Camera-first fitness apps often look good in a tripod demo and then fail in real lighting, angles, and body types.",
      "Arjun implemented on-device Vision and Core ML for pose estimation and rep counting, with Firebase for real-time leaderboards and challenges.",
    ],
    challenges: [
      {
        title: "Accuracy Without Wearables",
        body: "Rep counts had to hold up across lighting, camera angles, and body types. A demo that only works in a studio would not survive real homes.",
      },
      {
        title: "Battery And Thermal Limits",
        body: "Processing every camera frame at full resolution would overheat the phone and kill retention. Detection needed a sustainable frame rate.",
      },
      {
        title: "Instant Social Feedback",
        body: "Multiplayer challenges and leaderboards feel broken if counts take seconds to appear. Friends finishing a set at the same moment also create write conflicts.",
      },
      {
        title: "Privacy Expectations",
        body: "Users are more willing to point a camera at themselves when processing stays on-device. Uploading workout video was not an acceptable default.",
      },
      {
        title: "Scope Across An Exercise Library",
        body: "Shipping every movement on day one would delay a stable pipeline. The product needed one reliable exercise and one social loop first.",
      },
    ],
    solutionsIntro:
      "Arjun processed the camera feed on-device with Vision and Core ML, then synced counts and challenge state through Firestore with optimistic updates.",
    solutions: [
      {
        title: "On-device pose estimation",
        body: "Used Apple's Vision framework and Core ML to estimate pose and count reps on the phone, so video does not need to leave the device for the core experience.",
      },
      {
        title: "Live camera preview and overlays",
        body: "Built SwiftUI camera views with motion overlays so users can see what the model is tracking and calibrate form before a set starts.",
      },
      {
        title: "Real-time multiplayer sync",
        body: "Synced challenge state and scores via Firebase with optimistic UI, so leaderboards feel instant even when two people finish together.",
      },
      {
        title: "Performance-aware detection",
        body: "Downsampled the camera feed and ran detection at a sustainable FPS to protect battery life and avoid thermal throttling on longer sessions.",
      },
      {
        title: "Firebase auth and challenge data",
        body: "Used Firebase Auth and Firestore for users, rooms, and challenge history so social workouts persist across sessions.",
      },
    ],
    features: [
      {
        title: "Live camera rep counting",
        body: "The app counts push-ups from the camera in real time, without a wearable or a trainer in the room.",
      },
      {
        title: "Motion detection overlays",
        body: "On-screen guidance helps users stay in frame and understand why a rep was counted or rejected.",
      },
      {
        title: "Multiplayer challenges",
        body: "Friends can compete in the same challenge, with counts syncing live instead of waiting for a post-workout upload.",
      },
      {
        title: "Leaderboards",
        body: "Rankings update from Firestore so social motivation stays in the loop during the workout, not only after it.",
      },
      {
        title: "On-device privacy",
        body: "Pose estimation runs on the phone, which is both a performance choice and a product selling point.",
      },
    ],
    results: [
      {
        stat: "40%",
        label: "Challenge engagement hike",
        body: "Multiplayer challenge engagement hiked by 40% after live camera counting, rooms, and leaderboards ran in one loop instead of a solo counter with no social reason to return.",
      },
      {
        stat: "18%",
        label: "User retention lift",
        body: "7-day user retention improved by 18% as friends, scores, and rematches gave people a next session beyond the first workout.",
      },
      {
        stat: "38%",
        label: "Higher workout completion",
        body: "Workout completion rose by 38% once reps were counted automatically on-device, without wearables or manual logging.",
      },
      {
        stat: "29%",
        label: "Better rep-count accuracy",
        body: "Rep-count accuracy improved by 29% across varied lighting and camera angles after pose estimation ran through Vision / Core ML with on-screen calibration.",
      },
      {
        stat: "45%",
        label: "Fewer heat/battery drop-offs",
        body: "Session drop-off from heat and battery drain fell by 45% by downsampling the camera feed and running detection at a sustainable frame rate.",
      },
    ],
  },
  {
    id: "ai-image-video-generation-platform",
    slug: "ai-image-video-generation-platform",
    href: "/work/ai-image-video-generation-platform",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "AI-generated visual creation on a digital interface",
    tags: ["AI / Consumer", "Full Stack"],
    titleBefore: "AI Platform unified ",
    titleHighlight: "image & video generation",
    titleAfter: " across Mobile, API, Admin, and Cloud",
    description:
      "A production-ready image and video generation platform that unifies mobile creation, multi-provider AI workflows, billing, moderation, and operations.",
    slogan: "Create once. Route anywhere.",
    title: "AI Image & Video Generation Platform",
    role: "Senior AI Full Stack Developer",
    cta: "Build a similar solution",
    lead: "Arjun partnered with a consumer AI product team to ship a production-ready image and video generation platform that unifies mobile creation, multi-provider AI workflows, billing, moderation, and operations. The engagement covered full-stack product development, Google Cloud architecture, admin tooling, and App Store launch.",
    services: [
      "Custom Software Development",
      "AI Integration",
      "API Integration",
      "UI/UX Design",
      "Cloud Architecture",
      "QA/QC",
      "Project Management",
    ],
    location: "Remote",
    projectType: "AI / Consumer",
    year: "2026",
    techStack: [
      { name: "iOS", icon: "/images/tech/apple.svg" },
      { name: "Node.js", icon: "/images/tech/nodedotjs.svg" },
      { name: "Firebase", icon: "/images/tech/firebase.svg" },
      { name: "Google Cloud Platform", icon: "/images/tech/googlecloud.svg" },
      { name: "OpenAI API", icon: "/images/tech/openai.svg" },
      { name: "Kling AI", icon: "/images/tech/kling.svg" },
      { name: "Seedance", icon: "/images/tech/bytedance.svg" },
      { name: "Nano Banana", icon: "/images/tech/nano-banana.svg" },
    ],
    about: [
      "The client needed a unified way to offer AI-generated images and videos to mobile users — with reliable auth, subscription billing, content moderation, and operations tooling — not a collection of one-off scripts wired to a single model demo.",
      "Arjun owned end-to-end delivery: native mobile creation flows, Node.js REST APIs, Firebase identity and data, an admin panel for users and analytics, subscription payments, and Google Cloud deployment so generation workloads could scale without rewriting the app.",
    ],
    challenges: [
      {
        title: "Fragmented Generation Workflows",
        body: "The product could not launch as a pile of scripts calling DALL·E or a video API. Users needed one mobile experience for images and video, with accounts, history, and delivery that felt like a real product.",
      },
      {
        title: "Coordinating Heterogeneous AI Providers",
        body: "OpenAI, Kling AI, Seedance, and Nano Banana each have different latencies, failure modes, prompt shapes, and webhooks. The platform had to treat them as interchangeable adapters instead of hard-coding one vendor into the client.",
      },
      {
        title: "Controlling Cloud Cost At Scale",
        body: "Video generation is slow and expensive. Without server-side quotas, async jobs, and credit checks, paid APIs would burn budget and HTTP requests would time out.",
      },
      {
        title: "Operations Visibility For Support",
        body: "When a job failed in production, support needed an admin view that matched what the user saw in the app — users, content review, usage, and analytics — not a hunt through logs.",
      },
      {
        title: "Monetization And Abuse Prevention",
        body: "Free-tier users could not be allowed to bypass entitlements. Subscription state had to be enforced server-side before any generation call hit a paid provider.",
      },
    ],
    solutionsIntro:
      "Arjun designed a production architecture where the mobile app submits a generation request, and the backend validates the user, checks credits, enqueues work, stores assets, and notifies the client when rendering finishes.",
    solutions: [
      {
        title: "Unified generation pipeline",
        body: "Built a single job flow for image and video requests so the iOS app never talks to model vendors directly. Prompts, aspect ratios, and status updates stay consistent across providers.",
      },
      {
        title: "Multi-provider AI adapters",
        body: "Implemented provider-specific adapters for OpenAI, Kling AI, Seedance, and Nano Banana, normalizing inputs and webhooks so vendors can be swapped without rewriting the mobile client.",
      },
      {
        title: "Async job orchestration on GCP",
        body: "Moved long-running video tasks off the request path with async job handling and object storage on Google Cloud, avoiding HTTP timeouts and keeping the app responsive while renders complete.",
      },
      {
        title: "Firebase identity and admin operations",
        body: "Used Firebase Auth and database layers for sessions, user data, and generation history, plus an admin dashboard for support, content review, and usage analytics.",
      },
      {
        title: "Subscription and quota enforcement",
        body: "Enforced rate limits, credits, and entitlements server-side before calls hit paid APIs, then shipped subscription payments and App Store release as part of the same production stack.",
      },
    ],
    features: [
      {
        title: "AI image and video generation workflows",
        body: "Users create images and videos from one mobile product, with generation history and asset delivery handled through the same backend pipeline.",
      },
      {
        title: "One-click multi-model generation",
        body: "The app submits a request once. The backend routes it to OpenAI, Kling AI, Seedance, or Nano Banana without exposing vendor complexity to the user.",
      },
      {
        title: "Node.js REST orchestration",
        body: "A Node.js API layer validates users, enqueues jobs, and returns status updates so the mobile client stays thin and reliable.",
      },
      {
        title: "Admin panel for users, content, and analytics",
        body: "Operations teams can review users, moderate content, and inspect usage without asking engineering to query production data by hand.",
      },
      {
        title: "Google Cloud deployment",
        body: "Generation jobs, storage, and APIs run on GCP so traffic and long-running video work can scale independently of the mobile release cycle.",
      },
      {
        title: "Subscription and payment integration",
        body: "Billing and entitlements ship with v1, so the product can monetize generation credits instead of launching as an unbounded demo.",
      },
    ],
    results: [
      {
        label: "Production platform shipped",
        body: "Shipped a production platform spanning mobile, API, admin, and cloud — ready to scale generation workloads and monetize through subscriptions.",
      },
      {
        label: "Unified generation pipeline",
        body: "Generation no longer lives in one-off scripts. Image and video jobs share one pipeline, with async handling so slow video renders do not block the app.",
      },
      {
        label: "Vendor lock-in dropped",
        body: "Vendor lock-in dropped: new models can be added behind adapters without rewriting the iOS client.",
      },
      {
        label: "Operations surface for support",
        body: "Support and moderation gained a real operations surface. Admin views stay consistent with what users see in the app.",
      },
      {
        label: "Paid APIs protected",
        body: "Paid APIs are protected by server-side quotas and entitlements, so free-tier abuse does not hit the generation bill unchecked.",
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}
