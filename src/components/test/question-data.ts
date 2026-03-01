// REVIEWED
import type {
  CategoryDefinition,
  CategoryId,
  QuestionDefinition,
  QuestionId,
} from "@/lib/types";

export const CATEGORIES: CategoryDefinition[] = [
  {
    id: "clarity",
    title: "Clarity",
    description: "Can a new visitor understand what you do and who it's for?",
    order: 1,
  },
  {
    id: "conversion",
    title: "Conversion",
    description: "Is it easy to take the next step (contact, book, buy)?",
    order: 2,
  },
  {
    id: "offers",
    title: "Offers",
    description: "Is the offer clear, scoped, and positioned to be chosen?",
    order: 3,
  },
  {
    id: "proofs",
    title: "Proofs",
    description: "Do you show evidence that you can deliver the outcome?",
    order: 4,
  },
  {
    id: "technical",
    title: "Basic technical quality",
    description: "Accessibility, SEO, performance, and baseline site hygiene.",
    order: 5,
  },
];

const r = function r(title: string, url: string) {
  return { title, url };
};

export const QUESTIONS: QuestionDefinition[] = [
  // Clarity (8)
  {
    id: "clarity.audience",
    category: "clarity",
    label: "Do you clearly state who you help (audience / niche)?",
    helper:
      'Example: "Websites for boutique hotels" or "Arabic↔English legal translation."',
    whyItMatters:
      "Specificity builds trust and helps the right visitors self-qualify, which improves conversion quality.",
    references: [
      // 404 not found
      r(
        "Intercom: Write like you talk (clear language)",
        "https://www.intercom.com/blog/write-like-you-talk/",
      ),
      // 404 not found
      r(
        "NN/g: The Power of Clarity",
        "https://www.nngroup.com/articles/clarity/",
      ),
    ],
  },
  {
    id: "clarity.benefits",
    category: "clarity",
    label: "Do you describe benefits (outcomes) more than features (tasks)?",
    helper:
      'Outcomes: "More qualified leads." Features: "Landing page redesign."',
    whyItMatters:
      "Visitors buy outcomes. Benefits help them justify the decision and connect your work to their goals.",
    references: [
      // 404 not found
      r(
        "NN/g: Persuasive Design",
        "https://www.nngroup.com/articles/persuasive-design/",
      ),
      // 404 not found
      r(
        "Stripe: Writing style (clear + specific)",
        "https://stripe.com/docs/stripe-apps/writing",
      ),
    ],
  },
  {
    id: "clarity.contact-easy",
    category: "clarity",
    label: "Is it easy to find a way to contact you (in header/footer too)?",
    helper: "Contact methods should be obvious and accessible from every page.",
    whyItMatters:
      "If the intent is high but contact is hard, you lose leads. Reducing friction boosts conversions.",
    references: [
      r(
        "NN/g: Website Forms Usability: Top 10 Recommendations",
        "https://www.nngroup.com/articles/web-form-design/",
      ),
      r(
        "NN/g: Interaction Cost",
        "https://www.nngroup.com/articles/interaction-cost-definition/",
      ),
    ],
  },
  {
    id: "clarity.nav-labels",
    category: "clarity",
    label: "Are navigation labels familiar and obvious?",
    helper:
      "Use standard terms (Work, Services, About, Contact). Avoid 'cute' labels that hide meaning.",
    whyItMatters:
      "Users rely on conventions. Clear labels reduce confusion and help people find the information they need.",
    references: [
      r(
        "NN/g: Information Scent: How Users Decide Where to Go Next",
        "https://www.nngroup.com/articles/information-scent/",
      ),
      // 404 not found
      r(
        "NN/g: UI Components Consistency",
        "https://www.nngroup.com/articles/ui-components-consistency/",
      ),
    ],
  },
  {
    id: "clarity.next-step",
    category: "clarity",
    label: "Do you explain what happens after someone contacts you?",
    helper:
      "A short 'Next steps' section: response time, first call, process, and typical timeline.",
    whyItMatters:
      "Uncertainty kills conversion. Clear expectations reduce perceived risk and increase responses.",
    references: [
      r(
        "GOV.UK: User needs",
        "https://www.gov.uk/guidance/content-design/user-needs",
      ),
      // 404 not found
      r(
        "NN/g: Reduce Users' Anxiety",
        "https://www.nngroup.com/articles/reduce-users-anxiety/",
      ),
    ],
  },
  {
    id: "clarity.primary-cta",
    category: "clarity",
    label: "Is there one obvious primary call-to-action (CTA)?",
    helper:
      "One main action (Book / Contact / Start) should be visually dominant and repeated.",
    whyItMatters:
      "Competing CTAs split attention. A single next step reduces cognitive load and increases follow-through.",
    references: [
      r(
        "GOV.UK Design System: Buttons",
        "https://design-system.service.gov.uk/components/button/",
      ),
      // 404 not found
      r(
        "NN/g: Call-to-Action Buttons",
        "https://www.nngroup.com/articles/call-to-action-buttons/",
      ),
    ],
  },
  {
    id: "clarity.scannable-layout",
    category: "clarity",
    label: "Is your homepage scannable (headings, short sections, whitespace)?",
    helper:
      "Clear section headings, short paragraphs, and an easy-to-follow page structure.",
    whyItMatters:
      "Scannable layouts help visitors form a fast mental model of your offer and reduce drop-off.",
    references: [
      // 404 not found
      r(
        "NN/g: Scannable Text for Online Reading",
        "https://www.nngroup.com/articles/scannable-text/",
      ),
      r("web.dev: Typography", "https://web.dev/learn/design/typography/"),
    ],
  },
  {
    id: "clarity.value-prop",
    category: "clarity",
    label: "Is your value proposition clear within 5 seconds?",
    helper:
      "Above the fold, a new visitor should instantly understand what you do and the outcome.",
    whyItMatters:
      "People don't read—they scan. If they can't quickly place you in their mental 'category', they bounce.",
    references: [
      r(
        "GOV.UK: Writing for GOV.UK",
        "https://www.gov.uk/guidance/content-design/writing-for-gov-uk",
      ),
      r(
        "NN/g: How Users Read on the Web",
        "https://www.nngroup.com/articles/how-users-read-on-the-web/",
      ),
    ],
  },

  // Conversion (8)
  {
    id: "conversion.analytics",
    category: "conversion",
    label: "Do you track key conversion events (clicks, submits, bookings)?",
    helper:
      "At minimum: CTA clicks and form submissions. Ideally: source + page that drove the action.",
    whyItMatters:
      "Without measurement you can't improve. Even basic analytics helps validate what's working.",
    references: [
      // 404 not found
      r(
        "Google Analytics: Event measurement",
        "https://support.google.com/analytics/answer/9322688",
      ),
      r("web.dev: Learn Performance", "https://web.dev/learn/performance/"),
    ],
  },
  {
    id: "conversion.cta-placement",
    category: "conversion",
    label: "Are CTAs placed at key decision points (not just the hero)?",
    helper:
      "After benefits, after proof, and at the end of pages—where a visitor is ready to act.",
    whyItMatters:
      "Visitors decide at different moments. Timely CTAs convert more people than a single top-of-page button.",
    references: [
      // 404 not found
      r(
        "NN/g: Call-to-Action Buttons",
        "https://www.nngroup.com/articles/call-to-action-buttons/",
      ),
      // 404 not found
      r(
        "NN/g: Serial Position Effect",
        "https://www.nngroup.com/articles/serial-position-effect/",
      ),
    ],
  },
  {
    id: "conversion.error-states",
    category: "conversion",
    label: "Do forms have clear validation and helpful error messages?",
    helper:
      "Errors should explain what to fix, keep user input, and be accessible to screen readers.",
    whyItMatters:
      "Poor errors create abandonment and frustration. Clear feedback improves completion and trust.",
    references: [
      r(
        "NN/g: Error-Message Guidelines",
        "https://www.nngroup.com/articles/error-message-guidelines/",
      ),
      r(
        "W3C: Error Identification (Level A)",
        "https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html",
      ),
    ],
  },
  {
    id: "conversion.lead-capture",
    category: "conversion",
    label:
      "Is there a secondary conversion option for 'not ready yet' visitors?",
    helper:
      "Examples: email capture, pricing PDF, newsletter, or a short 'get a quote' form.",
    whyItMatters:
      "Not everyone will book immediately. A second path captures future intent instead of losing the visitor.",
    references: [
      // 404 not found
      r(
        "Mailchimp: Landing page basics",
        "https://mailchimp.com/resources/landing-page/",
      ),
      r(
        "NN/g: Progressive Disclosure",
        "https://www.nngroup.com/articles/progressive-disclosure/",
      ),
    ],
  },
  {
    id: "conversion.low-friction",
    category: "conversion",
    label: "Is your primary conversion flow low-friction?",
    helper:
      "Short forms, clear fields, fast load, no unnecessary steps or account creation.",
    whyItMatters:
      "Each extra field and step reduces completion. Low friction increases qualified submissions.",
    references: [
      r(
        "Baymard: Cart & Checkout Usability Research",
        "https://baymard.com/research/checkout-usability",
      ),
      r(
        "NN/g: Website Forms Usability: Top 10 Recommendations",
        "https://www.nngroup.com/articles/web-form-design/",
      ),
    ],
  },
  {
    id: "conversion.mobile-usability",
    category: "conversion",
    label: "Does the site feel great on mobile (navigation + tap targets)?",
    helper:
      "No tiny buttons, no horizontal scroll, and key actions are easy to tap with one hand.",
    whyItMatters:
      "Mobile users abandon quickly when the experience is fiddly. Usability is a conversion lever.",
    references: [
      // 404 not found
      r(
        "NN/g: Mobile Usability",
        "https://www.nngroup.com/articles/mobile-usability/",
      ),
      r(
        "W3C: Target Size (Minimum) (Level AA)",
        "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html",
      ),
    ],
  },
  {
    id: "conversion.performance",
    category: "conversion",
    label: "Is performance good (fast load, minimal layout shift)?",
    helper:
      "Images optimized, limited heavy scripts, and the page doesn't jump around while loading.",
    whyItMatters:
      "Speed affects both SEO and conversion. Slow or unstable pages feel untrustworthy and lose leads.",
    references: [
      r(
        "Google: Understanding page experience in Google Search results",
        "https://developers.google.com/search/docs/appearance/page-experience",
      ),
      r("web.dev: Web Vitals", "https://web.dev/articles/vitals"),
    ],
  },
  {
    id: "conversion.trust-near-cta",
    category: "conversion",
    label: "Do you show trust signals near the CTA?",
    helper:
      "Examples: testimonial, client count, guarantee, process steps, or security reassurance.",
    whyItMatters:
      "People hesitate at the moment of action. Trust close to the CTA reduces risk and increases conversions.",
    references: [
      r(
        "CXL: Welcome to the Ivy League of conversion rate optimization.",
        "https://cxl.com/blog/conversion-rate-optimization/",
      ),
      // 404 not found
      r("NN/g: Trust in UX", "https://www.nngroup.com/articles/trust-ux/"),
    ],
  },

  // Offers (8)
  {
    id: "offers.booking",
    category: "offers",
    label:
      "Is the next step integrated into offer pages (book/contact at the end)?",
    helper: "After describing your offer, make the next step obvious and easy.",
    whyItMatters:
      "A good offer without an immediate next step leaks intent. Strong endings improve follow-through.",
    references: [
      r(
        "NN/g: Interaction Cost",
        "https://www.nngroup.com/articles/interaction-cost-definition/",
      ),
      // 404 not found
      r(
        "NN/g: Serial Position Effect",
        "https://www.nngroup.com/articles/serial-position-effect/",
      ),
    ],
  },
  {
    id: "offers.differentiator",
    category: "offers",
    label: "Do you explain what makes your approach different?",
    helper:
      "Examples: deep niche expertise, speed, strategy-first, accessibility focus, or measurable results.",
    whyItMatters:
      "Differentiation prevents price-only comparisons and makes the decision feel safer.",
    references: [
      // 404 not found
      r(
        "Intercom: Great product copy is specific",
        "https://www.intercom.com/blog/product-copy/",
      ),
      // 404 not found
      r("NN/g: Credibility", "https://www.nngroup.com/articles/credibility/"),
    ],
  },
  {
    id: "offers.faq",
    category: "offers",
    label: "Do you answer common objections (FAQ)?",
    helper:
      "Availability, revisions, communication, handoff, cancellation, pricing, and what you need from clients.",
    whyItMatters:
      "FAQs remove uncertainty and reduce back-and-forth, improving conversion and customer fit.",
    references: [
      r(
        "GOV.UK: User needs",
        "https://www.gov.uk/guidance/content-design/user-needs",
      ),
      // 404 not found
      r("NN/g: FAQ Pages", "https://www.nngroup.com/articles/faq-pages/"),
    ],
  },
  {
    id: "offers.packages",
    category: "offers",
    label:
      "Is the offer structured (packages, tiers, or clear 'what you get')?",
    helper:
      "Even custom work benefits from clear scope examples and inclusions.",
    whyItMatters:
      "Structure reduces ambiguity and makes it easier to compare options—helping visitors decide faster.",
    references: [
      r(
        "GOV.UK: Accessibility and assisted digital",
        "https://www.gov.uk/service-manual/helping-people-to-use-your-service",
      ),
      // 404 not found
      r(
        "NN/g: Choice Overload",
        "https://www.nngroup.com/articles/choice-overload/",
      ),
    ],
  },
  {
    id: "offers.process",
    category: "offers",
    label: "Do you explain your process and typical timeline?",
    helper:
      "A short step-by-step: discovery → delivery → review → launch, with typical time ranges.",
    whyItMatters:
      "A transparent process reduces perceived risk and helps visitors picture the engagement.",
    references: [
      // 404 not found
      r(
        "Atlassian: Project planning basics",
        "https://www.atlassian.com/agile/project-management/project-planning",
      ),
      r(
        "NN/g: Mental Models",
        "https://www.nngroup.com/articles/mental-models/",
      ),
    ],
  },
  {
    id: "offers.risk-reversal",
    category: "offers",
    label:
      "Do you reduce perceived risk (clear terms, milestones, reassurance)?",
    helper:
      "Examples: clear scope control, milestone payments, refund policy, or a 'first call is free' step.",
    whyItMatters:
      "Services are intangible. Reassurance helps visitors commit when outcomes are uncertain.",
    references: [
      // 404 not found
      r(
        "NN/g: Reduce Users' Anxiety",
        "https://www.nngroup.com/articles/reduce-users-anxiety/",
      ),
      // 404 not found
      r("NN/g: Trust in UX", "https://www.nngroup.com/articles/trust-ux/"),
    ],
  },
  {
    id: "offers.scope",
    category: "offers",
    label: "Is the scope clear (what's included, excluded, and boundaries)?",
    helper:
      "Say what you do and don't do. Add 'best fit' and 'not a fit' guidance if helpful.",
    whyItMatters:
      "Clear boundaries improve lead quality and reduce misalignment that causes churn and refunds.",
    references: [
      r(
        "GOV.UK: Writing for GOV.UK",
        "https://www.gov.uk/guidance/content-design/writing-for-gov-uk",
      ),
      // 404 not found
      r(
        "NN/g: Reduce Users' Anxiety",
        "https://www.nngroup.com/articles/reduce-users-anxiety/",
      ),
    ],
  },
  {
    id: "offers.starting-price",
    category: "offers",
    label: "Do you include a starting price or budget qualifier?",
    helper:
      "'Starting at' pricing or a budget range can filter leads and reduce awkward conversations.",
    whyItMatters:
      "Price transparency increases trust and reduces wasted time for both you and the visitor.",
    references: [
      r(
        "GOV.UK: Writing for GOV.UK",
        "https://www.gov.uk/guidance/content-design/writing-for-gov-uk",
      ),
      // 404 not found
      r("NN/g: Trust in UX", "https://www.nngroup.com/articles/trust-ux/"),
    ],
  },

  // Proofs (8)
  {
    id: "proofs.about",
    category: "proofs",
    label:
      "Does your About section build confidence (photo, story, credentials)?",
    helper:
      "A real photo and credible background can matter a lot for services and portfolios.",
    whyItMatters:
      "For services, people are part of the product. A strong About section increases trust and relatability.",
    references: [
      // 404 not found
      r(
        "NN/g: About Us Pages",
        "https://www.nngroup.com/articles/about-us-pages/",
      ),
      // 404 not found
      r("NN/g: Trust in UX", "https://www.nngroup.com/articles/trust-ux/"),
    ],
  },
  {
    id: "proofs.contact-details",
    category: "proofs",
    label:
      "Do you include real contact details (and location/time zone if relevant)?",
    helper:
      "Even a simple time zone and business email can increase legitimacy.",
    whyItMatters:
      "Legitimacy signals reduce the fear of scams or ghosting, which can block conversions.",
    references: [
      // 404 not found
      r(
        "GOV.UK: Build trust",
        "https://www.gov.uk/service-manual/service-assessments/assessment-criteria#criterion-8-make-a-service-secure",
      ),
      // 404 not found
      r("NN/g: Credibility", "https://www.nngroup.com/articles/credibility/"),
    ],
  },
  {
    id: "proofs.case-studies",
    category: "proofs",
    label:
      "Do you have case studies or project breakdowns (problem → solution → result)?",
    helper:
      "Even short breakdowns work: context, decisions, and measurable outcomes where possible.",
    whyItMatters:
      "Case studies demonstrate thinking and credibility—especially for high-consideration services.",
    references: [
      r(
        "CXL: Landing Page Case Study: How We Improved Conversions by 79.3%",
        "https://cxl.com/blog/case-study/",
      ),
      // 404 not found
      r(
        "NN/g: Storytelling in UX",
        "https://www.nngroup.com/articles/storytelling/",
      ),
    ],
  },
  {
    id: "proofs.logos",
    category: "proofs",
    label:
      "Do you show recognizable trust signals (logos, certifications, partnerships)?",
    helper:
      "Use only what you can substantiate: real client logos, certifications, or program badges.",
    whyItMatters:
      "Recognizable signals reduce perceived risk instantly, especially for first-time visitors.",
    references: [
      // 404 not found
      r("NN/g: Social Proof", "https://www.nngroup.com/articles/social-proof/"),
      // 404 not found
      r("NN/g: Trust in UX", "https://www.nngroup.com/articles/trust-ux/"),
    ],
  },
  {
    id: "proofs.press",
    category: "proofs",
    label:
      "Do you show community/press signals (talks, posts, open-source, mentions)?",
    helper:
      "Only include what's real: guest posts, podcasts, talks, awards, or contributions.",
    whyItMatters:
      "External validation increases credibility and can differentiate you without needing more sales copy.",
    references: [
      // 404 not found
      r("NN/g: Credibility", "https://www.nngroup.com/articles/credibility/"),
      // 404 not found
      r("NN/g: Social Proof", "https://www.nngroup.com/articles/social-proof/"),
    ],
  },
  {
    id: "proofs.reviews",
    category: "proofs",
    label: "Do you link to third-party reviews or profiles (if you have them)?",
    helper:
      "Clutch, Google, marketplaces, communities—anywhere people can verify you independently.",
    whyItMatters:
      "Third-party proof is harder to fake, so it often carries more weight than self-published testimonials.",
    references: [
      // 404 not found
      r(
        "CXL: Trust and persuasion",
        "https://cxl.com/blog/psychology-of-trust/",
      ),
      // 404 not found
      r("NN/g: Social Proof", "https://www.nngroup.com/articles/social-proof/"),
    ],
  },
  {
    id: "proofs.testimonials",
    category: "proofs",
    label: "Are testimonials specific and believable (not generic praise)?",
    helper:
      "The best testimonials include context, outcomes, and what it was like to work with you.",
    whyItMatters:
      "Specific proof feels real. Generic testimonials can backfire and reduce trust.",
    references: [
      // 404 not found
      r("NN/g: Credibility", "https://www.nngroup.com/articles/credibility/"),
      // 404 not found
      r("NN/g: Social Proof", "https://www.nngroup.com/articles/social-proof/"),
    ],
  },
  {
    id: "proofs.work-samples",
    category: "proofs",
    label: "Do you show strong work samples (portfolio/projects) quickly?",
    helper:
      "Your best work should be easy to find without hunting through navigation.",
    whyItMatters:
      "Proof reduces risk. Visitors want evidence early before they invest time reading details.",
    references: [
      // 404 not found
      r("NN/g: Trust in UX", "https://www.nngroup.com/articles/trust-ux/"),
      // 404 not found
      r(
        "NN/g: Visual Design Principles: Top 10 Recommendations",
        "https://www.nngroup.com/articles/visual-design-principles/",
      ),
    ],
  },

  // Technical (8)
  {
    id: "technical.accessibility",
    category: "technical",
    label: "Do you meet basic accessibility (labels, contrast, keyboard)?",
    helper:
      "Forms have labels, images have alt text, focus states are visible, and contrast is readable.",
    whyItMatters:
      "Accessibility improves usability for everyone and reduces legal and reputational risk.",
    references: [
      r("web.dev: Learn Accessibility", "https://web.dev/learn/accessibility/"),
      r(
        "W3C: WCAG 2 Overview",
        "https://www.w3.org/WAI/standards-guidelines/wcag/",
      ),
    ],
  },
  {
    id: "technical.errors",
    category: "technical",
    label: "Do you handle 404s and redirects cleanly?",
    helper:
      "A helpful 404 page, no broken nav links, and old URLs redirect properly.",
    whyItMatters:
      "Broken links lose trust and conversions. Good error handling helps visitors recover and keep moving.",
    references: [
      r(
        "How HTTP status codes affect Google's crawlers",
        "https://developers.google.com/search/docs/crawling-indexing/http-network-errors",
      ),
      // 404 not found
      r(
        "web.dev: HTTP status codes",
        "https://web.dev/articles/http-status-codes",
      ),
    ],
  },
  {
    id: "technical.https",
    category: "technical",
    label: "Is the site served over HTTPS with no mixed content warnings?",
    helper:
      "Visitors should not see 'Not secure'. HTTP should redirect to HTTPS.",
    whyItMatters:
      "HTTPS is table stakes for trust and security. Browser warnings can kill conversions immediately.",
    references: [
      // 404 not found
      r(
        "Google Search Central: HTTPS",
        "https://developers.google.com/search/docs/appearance/site-names#https",
      ),
      r(
        "MDN: HTTPS",
        "https://developer.mozilla.org/en-US/docs/Glossary/HTTPS",
      ),
    ],
  },
  {
    id: "technical.indexable",
    category: "technical",
    label:
      "Are important pages indexable (no accidental noindex/robots blocks)?",
    helper:
      "Ensure you didn't block the site during development and forget to remove it.",
    whyItMatters:
      "If your pages can't be indexed, your SEO work won't matter—and people won't find you organically.",
    references: [
      r(
        "Google Search Central: Introduction to robots.txt",
        "https://developers.google.com/search/docs/crawling-indexing/robots/intro",
      ),
      r(
        "Google Search Central: Robots meta tag, data-nosnippet, and X-Robots-Tag specifications",
        "https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag",
      ),
    ],
  },
  {
    id: "technical.meta",
    category: "technical",
    label: "Do key pages have unique title tags and meta descriptions?",
    helper:
      "Homepage, services, work, and contact should not share the same title/description.",
    whyItMatters:
      "Unique metadata improves search visibility and click-through, and it helps social sharing previews.",
    references: [
      r(
        "Google Search Central: Control your snippets in search results",
        "https://developers.google.com/search/docs/appearance/snippet",
      ),
      r(
        "Google Search Central: Influencing your title links in search results",
        "https://developers.google.com/search/docs/appearance/title-link",
      ),
    ],
  },
  {
    id: "technical.open-graph",
    category: "technical",
    label: "Do sharing previews look good (Open Graph / Twitter cards)?",
    helper:
      "Sharing your homepage should show a clean title, description, and image—without weird cropping.",
    whyItMatters:
      "Good previews increase click-through when people share your site, and they signal professionalism.",
    references: [
      r("The Open Graph protocol", "https://ogp.me/"),
      // 404 not found
      r(
        "Twitter/X: Cards markup",
        "https://developer.x.com/en/docs/x-for-websites/cards/overview/markup",
      ),
    ],
  },
  {
    id: "technical.performance",
    category: "technical",
    label: "Do you hit baseline Core Web Vitals targets?",
    helper:
      "Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift are acceptable.",
    whyItMatters:
      "Good Core Web Vitals improve perceived quality, conversion, and can support better search performance.",
    references: [
      r(
        "Google Search Central: Understanding page experience in Google Search results",
        "https://developers.google.com/search/docs/appearance/page-experience",
      ),
      r("web.dev: Web Vitals", "https://web.dev/articles/vitals"),
    ],
  },
  {
    id: "technical.responsive",
    category: "technical",
    label: "Is the layout responsive across common breakpoints?",
    helper:
      "Check small phones, tablets, and desktop. Ensure nothing overflows or becomes unreadable.",
    whyItMatters:
      "A responsive baseline is essential: broken layouts and tiny text create immediate abandonment.",
    references: [
      // 404 not found
      r(
        "NN/g: Mobile Usability",
        "https://www.nngroup.com/articles/mobile-usability/",
      ),
      // 404 not found
      r(
        "web.dev: Responsive design",
        "https://web.dev/learn/design/responsive-web-design/",
      ),
    ],
  },
];

export const QUESTIONS_BY_CATEGORY = QUESTIONS.reduce(
  (accumulator, q) => {
    accumulator[q.category].push(q);
    return accumulator;
  },
  {
    clarity: [] as QuestionDefinition[],
    conversion: [] as QuestionDefinition[],
    offers: [] as QuestionDefinition[],
    proofs: [] as QuestionDefinition[],
    technical: [] as QuestionDefinition[],
  },
);

export const getCategoryTitle = function getCategoryTitle(
  categoryId: CategoryId,
) {
  return CATEGORIES.find((c) => c.id === categoryId)?.title ?? categoryId;
};

export const getQuestionById = function getQuestionById(
  id: QuestionId,
): QuestionDefinition | undefined {
  return QUESTIONS.find((q) => q.id === id);
};
