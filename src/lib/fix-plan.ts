// REVIEWED

import type { Answers, CategoryId, FixItem, Priority } from "@/lib/types";

type Rule = (_answers: Answers) => boolean;

type FixTemplate = Omit<FixItem, "checked"> & { rule: Rule };

const isYes = function isYes(answers: Answers, id: string) {
  return answers[id] === "yes";
};

const must = function must(priority: Priority) {
  return priority === "Must";
};

type FixMeta = {
  area: string;
  impact: 1 | 2 | 3 | 4 | 5;
  confidence: 1 | 2 | 3 | 4 | 5;
  effort: 1 | 2 | 3 | 4 | 5;
};

// Fix item weighting model:
// - impact: how much this tends to move outcomes if done well (1 – 5)
// - confidence: how likely this fix helps across typical sites (1 – 5)
// - effort: how hard it is to do properly (1 – 5)
// Priority score (higher is better): impact × confidence / effort

export const computeFixPriorityScore = function computeFixPriorityScore(
  meta: FixMeta,
) {
  const raw = (meta.impact * meta.confidence) / meta.effort;
  return Math.round(raw * 100) / 100;
};

// Per-fix-item meta data used for Biggest Wins ranking + interactive filtering/diversity.
export const FIX_META_BY_ID: Record<string, FixMeta> = {
  "clarity.audience": {
    area: "positioning",
    impact: 4,
    confidence: 5,
    effort: 2,
  },
  "clarity.benefits": {
    area: "copy",
    impact: 4,
    confidence: 4,
    effort: 3,
  },
  "clarity.contact-easy": {
    area: "cta",
    impact: 5,
    confidence: 5,
    effort: 2,
  },
  "clarity.nav-labels": {
    area: "navigation",
    impact: 2,
    confidence: 4,
    effort: 2,
  },
  "clarity.next-step": {
    area: "process",
    impact: 3,
    confidence: 4,
    effort: 2,
  },
  "clarity.primary-cta": {
    area: "cta",
    impact: 5,
    confidence: 5,
    effort: 2,
  },
  "clarity.scannable-layout": {
    area: "layout",
    impact: 4,
    confidence: 4,
    effort: 3,
  },
  "clarity.value-prop": {
    area: "messaging",
    impact: 5,
    confidence: 5,
    effort: 2,
  },

  "conversion.analytics": {
    area: "measurement",
    impact: 3,
    confidence: 3,
    effort: 2,
  },
  "conversion.cta-placement": {
    area: "cta",
    impact: 4,
    confidence: 4,
    effort: 2,
  },
  "conversion.error-states": {
    area: "forms",
    impact: 3,
    confidence: 4,
    effort: 3,
  },
  "conversion.lead-capture": {
    area: "cta",
    impact: 3,
    confidence: 3,
    effort: 2,
  },
  "conversion.low-friction": {
    area: "forms",
    impact: 5,
    confidence: 5,
    effort: 3,
  },
  "conversion.mobile-usability": {
    area: "mobile",
    impact: 4,
    confidence: 4,
    effort: 3,
  },
  "conversion.performance": {
    area: "performance",
    impact: 4,
    confidence: 4,
    effort: 4,
  },
  "conversion.trust-near-cta": {
    area: "trust",
    impact: 4,
    confidence: 4,
    effort: 2,
  },

  "offers.booking": {
    area: "cta",
    impact: 4,
    confidence: 4,
    effort: 2,
  },
  "offers.differentiator": {
    area: "positioning",
    impact: 4,
    confidence: 4,
    effort: 3,
  },
  "offers.faq": {
    area: "objections",
    impact: 3,
    confidence: 4,
    effort: 3,
  },
  "offers.packages": {
    area: "pricing",
    impact: 4,
    confidence: 4,
    effort: 3,
  },
  "offers.process": {
    area: "process",
    impact: 4,
    confidence: 4,
    effort: 2,
  },
  "offers.risk-reversal": {
    area: "trust",
    impact: 3,
    confidence: 3,
    effort: 2,
  },
  "offers.scope": {
    area: "scope",
    impact: 3,
    confidence: 4,
    effort: 2,
  },
  "offers.starting-price": {
    area: "pricing",
    impact: 3,
    confidence: 3,
    effort: 2,
  },

  "proofs.about": {
    area: "trust",
    impact: 3,
    confidence: 4,
    effort: 2,
  },
  "proofs.case-studies": {
    area: "proof",
    impact: 4,
    confidence: 4,
    effort: 4,
  },
  "proofs.contact-details": {
    area: "trust",
    impact: 2,
    confidence: 3,
    effort: 1,
  },
  "proofs.logos": {
    area: "trust",
    impact: 2,
    confidence: 2,
    effort: 1,
  },
  "proofs.press": {
    area: "trust",
    impact: 2,
    confidence: 2,
    effort: 2,
  },
  "proofs.reviews": {
    area: "trust",
    impact: 2,
    confidence: 2,
    effort: 2,
  },
  "proofs.testimonials": {
    area: "trust",
    impact: 4,
    confidence: 4,
    effort: 3,
  },
  "proofs.work-samples": {
    area: "proof",
    impact: 5,
    confidence: 5,
    effort: 3,
  },

  "technical.accessibility": {
    area: "accessibility",
    impact: 4,
    confidence: 4,
    effort: 4,
  },
  "technical.errors": {
    area: "reliability",
    impact: 3,
    confidence: 3,
    effort: 3,
  },
  "technical.https": {
    area: "security",
    impact: 4,
    confidence: 5,
    effort: 2,
  },
  "technical.indexable": {
    area: "seo",
    impact: 4,
    confidence: 4,
    effort: 2,
  },
  "technical.meta": {
    area: "seo",
    impact: 3,
    confidence: 4,
    effort: 2,
  },
  "technical.open-graph": {
    area: "sharing",
    impact: 2,
    confidence: 3,
    effort: 2,
  },
  "technical.performance": {
    area: "performance",
    impact: 4,
    confidence: 4,
    effort: 4,
  },
  "technical.responsive": {
    area: "mobile",
    impact: 4,
    confidence: 4,
    effort: 3,
  },
};

export const FIX_PLAN_RULE_QUESTION_IDS: string[] = [
  // Clarity
  "clarity.audience",
  "clarity.benefits",
  "clarity.contact-easy",
  "clarity.nav-labels",
  "clarity.next-step",
  "clarity.primary-cta",
  "clarity.scannable-layout",
  "clarity.value-prop",
  // Conversion
  "conversion.analytics",
  "conversion.cta-placement",
  "conversion.error-states",
  "conversion.lead-capture",
  "conversion.low-friction",
  "conversion.mobile-usability",
  "conversion.performance",
  "conversion.trust-near-cta",
  // Offers
  "offers.booking",
  "offers.differentiator",
  "offers.faq",
  "offers.packages",
  "offers.process",
  "offers.risk-reversal",
  "offers.scope",
  "offers.starting-price",
  // Proofs
  "proofs.about",
  "proofs.case-studies",
  "proofs.contact-details",
  "proofs.logos",
  "proofs.press",
  "proofs.reviews",
  "proofs.testimonials",
  "proofs.work-samples",
  // Technical
  "technical.accessibility",
  "technical.errors",
  "technical.https",
  "technical.indexable",
  "technical.meta",
  "technical.open-graph",
  "technical.performance",
  "technical.responsive",
];

export const buildingFixPlan = function buildingFixPlan(args: {
  answers: Answers;
}): Record<CategoryId, FixItem[]> {
  const { answers } = args;

  const make = function make(items: FixTemplate[]): FixItem[] {
    return items.map((i) => {
      const meta = FIX_META_BY_ID[i.id];

      const metaFB = function metaFB(): FixMeta {
        if (i.priority === "Must")
          return { area: i.category, impact: 5, confidence: 4, effort: 3 };

        if (i.priority === "Should")
          return { area: i.category, impact: 3, confidence: 3, effort: 3 };

        return { area: i.category, impact: 2, confidence: 2, effort: 2 };
      };

      const metaScored: FixMeta = meta ?? metaFB();

      return {
        id: i.id,
        category: i.category,
        priority: i.priority,
        area: i.area ?? metaScored.area,
        title: i.title,
        description: i.description,
        checked: i.rule(answers),
        impact: metaScored.impact,
        confidence: metaScored.confidence,
        effort: metaScored.effort,
        priorityScore: computeFixPriorityScore(metaScored),
      };
    });
  };

  const clarity = make([
    {
      id: "clarity.audience",
      category: "clarity",
      priority: "Should",
      title: "State your audience + niche clearly",
      description:
        "Help visitors self-qualify quickly by naming the niche, industry, or project type you specialize in.",
      rule: (a) => isYes(a, "clarity.audience"),
    },
    {
      id: "clarity.benefits",
      category: "clarity",
      priority: "Should",
      title: "Translate features into benefits",
      description:
        "Say what changes for the customer (speed, bookings, clarity, revenue) rather than only listing deliverables.",
      rule: (a) => isYes(a, "clarity.benefits"),
    },
    {
      id: "clarity.contact-easy",
      category: "clarity",
      priority: "Must",
      title: "Make contact options easy to find",
      description:
        "Offer at least one low-friction contact method (email, form, calendar). Put it in the header/footer too.",
      rule: (a) => isYes(a, "clarity.contact-easy"),
    },
    {
      id: "clarity.nav-labels",
      category: "clarity",
      priority: "Nice",
      title: "Use familiar navigation labels",
      description:
        "Keep information architecture (IA) simple: Work, Services, About, Contact. Avoid clever labels that hide meaning.",
      rule: (a) => isYes(a, "clarity.nav-labels"),
    },
    {
      id: "clarity.next-step",
      category: "clarity",
      priority: "Nice",
      title: "Make the next step and expectations explicit",
      description:
        "Explain what happens after someone contacts you (timeline, questions, deliverables) to reduce uncertainty.",
      rule: (a) => isYes(a, "clarity.next-step"),
    },
    {
      id: "clarity.primary-cta",
      category: "clarity",
      priority: "Must",
      title: "Make one primary CTA obvious",
      description:
        "Pick a single main action (Book a call / Start a project / Contact). Repeat it consistently across key pages.",
      rule: (a) => isYes(a, "clarity.primary-cta"),
    },
    {
      id: "clarity.scannable-layout",
      category: "clarity",
      priority: "Should",
      title: "Improve scannability (headings, spacing, sections)",
      description:
        "Use clear section headers, short paragraphs, and visual hierarchy so people can understand you in 15 seconds.",
      rule: (a) => isYes(a, "clarity.scannable-layout"),
    },
    {
      id: "clarity.value-prop",
      category: "clarity",
      priority: "Must",
      title: "Clarify the value proposition above the fold",
      description:
        "In 1-2 lines, say who it's for and what outcome you deliver. Avoid slogans that don't explain the offer.",
      rule: (a) => isYes(a, "clarity.value-prop"),
    },
  ]);

  const conversion = make([
    {
      id: "conversion.analytics",
      category: "conversion",
      priority: "Nice",
      title: "Track key conversion events",
      description:
        "At minimum: CTA clicks, form submits, and contact intent. You can't improve what you don't measure.",
      rule: (a) => isYes(a, "conversion.analytics"),
    },
    {
      id: "conversion.cta-placement",
      category: "conversion",
      priority: "Must",
      title: "Place CTAs where intent peaks",
      description:
        "Add CTAs after benefits, in case studies, and at the end of pages—not only in the hero.",
      rule: (a) => isYes(a, "conversion.cta-placement"),
    },
    {
      id: "conversion.error-states",
      category: "conversion",
      priority: "Should",
      title: "Handle error states clearly",
      description:
        "Forms and booking flows should show validation and helpful messages—not generic errors or silent failures.",
      rule: (a) => isYes(a, "conversion.error-states"),
    },
    {
      id: "conversion.lead-capture",
      category: "conversion",
      priority: "Nice",
      title: "Offer a secondary low-commitment option",
      description:
        "For visitors not ready to book, provide a second path (email capture, pricing PDF, or a short qualifier).",
      rule: (a) => isYes(a, "conversion.lead-capture"),
    },
    {
      id: "conversion.low-friction",
      category: "conversion",
      priority: "Must",
      title: "Reduce form friction",
      description:
        "Ask only what you need. Save long questionnaires for after initial contact.",
      rule: (a) => isYes(a, "conversion.low-friction"),
    },
    {
      id: "conversion.mobile-usability",
      category: "conversion",
      priority: "Must",
      title: "Fix mobile UX issues",
      description:
        "Ensure tap targets, spacing, and nav work smoothly on small screens—the majority of traffic for many sites.",
      rule: (a) => isYes(a, "conversion.mobile-usability"),
    },
    {
      id: "conversion.performance",
      category: "conversion",
      priority: "Should",
      title: "Improve page speed and stability",
      description:
        "Large images and layout shifts kill conversion. Optimize images, fonts, and reduce heavy scripts.",
      rule: (a) => isYes(a, "conversion.performance"),
    },
    {
      id: "conversion.trust-near-cta",
      category: "conversion",
      priority: "Should",
      title: "Add trust near CTAs",
      description:
        "Add proof next to the decision point: testimonials, client counts, guarantees, or clear process steps.",
      rule: (a) => isYes(a, "conversion.trust-near-cta"),
    },
  ]);

  const offers = make([
    {
      id: "offers.booking",
      category: "offers",
      priority: "Must",
      title: "Make booking/contact the obvious end of the offer",
      description:
        "Add a strong CTA at the end of offer pages and after pricing. Remove uncertainty with a clear next step.",
      rule: (a) => isYes(a, "offers.booking"),
    },
    {
      id: "offers.differentiator",
      category: "offers",
      priority: "Should",
      title: "Explain your differentiator",
      description:
        "Name what you do differently: your process, specialty, speed, quality bar, or results focus.",
      rule: (a) => isYes(a, "offers.differentiator"),
    },
    {
      id: "offers.faq",
      category: "offers",
      priority: "Nice",
      title: "Answer common objections (FAQ)",
      description:
        "Handle pricing, revisions, handoff, availability, and communication upfront to reduce back-and-forth.",
      rule: (a) => isYes(a, "offers.faq"),
    },
    {
      id: "offers.packages",
      category: "offers",
      priority: "Must",
      title: "Present clear packages or engagement options",
      description:
        "Even if pricing is custom, show typical project ranges, packages, or what's included so people can decide.",
      rule: (a) => isYes(a, "offers.packages"),
    },
    {
      id: "offers.process",
      category: "offers",
      priority: "Must",
      title: "Outline the process and timeline",
      description:
        "A simple 3-6 step process makes the purchase feel safer. Include typical timelines and what you need.",
      rule: (a) => isYes(a, "offers.process"),
    },
    {
      id: "offers.risk-reversal",
      category: "offers",
      priority: "Should",
      title: "Add risk-reversal or reassurance",
      description:
        "Examples: clear cancellation terms, milestone-based payments, or a 'first call is free' policy.",
      rule: (a) => isYes(a, "offers.risk-reversal"),
    },
    {
      id: "offers.scope",
      category: "offers",
      priority: "Should",
      title: "Clarify scope and boundaries",
      description:
        "List what you do (and don't) take on. This reduces mismatched leads and improves close rates.",
      rule: (a) => isYes(a, "offers.scope"),
    },
    {
      id: "offers.starting-price",
      category: "offers",
      priority: "Nice",
      title: "Add a starting price or clear qualification",
      description:
        "A 'starting at' price or budget qualifiers filter leads and build trust through transparency.",
      rule: (a) => isYes(a, "offers.starting-price"),
    },
  ]);

  const proofs = make([
    {
      id: "proofs.about",
      category: "proofs",
      priority: "Should",
      title: "Strengthen the About section",
      description:
        "Add a real photo, background, values, and your approach. People buy from people—especially for services.",
      rule: (a) => isYes(a, "proofs.about"),
    },
    {
      id: "proofs.case-studies",
      category: "proofs",
      priority: "Should",
      title: "Publish 2-4 case studies or project breakdowns",
      description:
        "Show the problem, approach, and result. Even a short teardown builds trust and demonstrates thinking.",
      rule: (a) => isYes(a, "proofs.case-studies"),
    },
    {
      id: "proofs.contact-details",
      category: "proofs",
      priority: "Nice",
      title: "Include real contact details and location cues",
      description:
        "An address, time zone, company registration, or clear contact info helps legitimize the business.",
      rule: (a) => isYes(a, "proofs.contact-details"),
    },
    {
      id: "proofs.logos",
      category: "proofs",
      priority: "Nice",
      title: "Add recognizable trust signals",
      description:
        "Client logos, certifications, partnerships, or notable platforms can reduce perceived risk instantly.",
      rule: (a) => isYes(a, "proofs.logos"),
    },
    {
      id: "proofs.press",
      category: "proofs",
      priority: "Nice",
      title: "Show community/press signals (if you have them)",
      description:
        "Talks, guest posts, podcasts, open-source, or press mentions create extra credibility with minimal copy.",
      rule: (a) => isYes(a, "proofs.press"),
    },
    {
      id: "proofs.reviews",
      category: "proofs",
      priority: "Nice",
      title: "Add external reviews or third-party proof",
      description:
        "If available, link to reviews on platforms people trust (e.g., Clutch, Google Business, app marketplaces).",
      rule: (a) => isYes(a, "proofs.reviews"),
    },
    {
      id: "proofs.testimonials",
      category: "proofs",
      priority: "Must",
      title: "Add specific testimonials",
      description:
        "Aim for outcomes and context: 'What changed?' and 'For whom?'. Specificity beats generic praise.",
      rule: (a) => isYes(a, "proofs.testimonials"),
    },
    {
      id: "proofs.work-samples",
      category: "proofs",
      priority: "Must",
      title: "Show representative work samples",
      description:
        "Visitors need evidence quickly. Show your best work above the fold and make it easy to browse.",
      rule: (a) => isYes(a, "proofs.work-samples"),
    },
  ]);

  const technical = make([
    {
      id: "technical.accessibility",
      category: "technical",
      priority: "Must",
      title: "Fix basic accessibility issues",
      description:
        "Alt text, label associations, contrast, and keyboard navigation improve UX and reduce legal risk.",
      rule: (a) => isYes(a, "technical.accessibility"),
    },
    {
      id: "technical.errors",
      category: "technical",
      priority: "Should",
      title: "Handle 404s and redirects cleanly",
      description:
        "Provide a helpful 404, redirect old links, and avoid broken navigation so visitors don't churn.",
      rule: (a) => isYes(a, "technical.errors"),
    },
    {
      id: "technical.https",
      category: "technical",
      priority: "Must",
      title: "Ensure HTTPS is enabled everywhere",
      description:
        "Use HTTPS, fix mixed content warnings, and redirect HTTP to HTTPS. It affects trust and SEO.",
      rule: (a) => isYes(a, "technical.https"),
    },
    {
      id: "technical.indexable",
      category: "technical",
      priority: "Should",
      title: "Make sure pages are indexable",
      description:
        "Avoid accidental no-index, broken canonical tags, or robots.txt blocking important pages.",
      rule: (a) => isYes(a, "technical.indexable"),
    },
    {
      id: "technical.meta",
      category: "technical",
      priority: "Should",
      title: "Add unique titles and meta descriptions",
      description:
        "Unique titles help SEO and social sharing. Meta descriptions increase click-through from search results.",
      rule: (a) => isYes(a, "technical.meta"),
    },
    {
      id: "technical.open-graph",
      category: "technical",
      priority: "Nice",
      title: "Add social sharing meta (Open Graph / Twitter)",
      description:
        "Sharing should show a strong title, description, and image. It's a small change with outsized reach.",
      rule: (a) => isYes(a, "technical.open-graph"),
    },
    {
      id: "technical.performance",
      category: "technical",
      priority: "Should",
      title: "Pass baseline Core Web Vitals",
      description:
        "Optimize images, reduce JS, and avoid layout shifts. Speed affects conversion and search visibility.",
      rule: (a) => isYes(a, "technical.performance"),
    },
    {
      id: "technical.responsive",
      category: "technical",
      priority: "Must",
      title: "Confirm responsive layout across break-points",
      description:
        "Check small phones, tablets, and large screens. Break-points and font scaling should feel intentional.",
      rule: (a) => isYes(a, "technical.responsive"),
    },
  ]);

  const all = { clarity, conversion, offers, proofs, technical };

  // Small sanity: if there are zero must items (shouldn't happen), promote first item.
  (Object.keys(all) as CategoryId[]).forEach((category) => {
    const list = all[category];

    if (!list.some((i) => must(i.priority))) {
      list[0] = { ...list[0], priority: "Must" };
    }
  });

  return all;
};

export const pickingBiggestWins = function pickingBiggestWins(args: {
  items: FixItem[];
  count?: number;
}): FixItem[] {
  const { items, count = 3 } = args;

  const candidates = items
    .filter((i) => !i.checked)
    .slice()
    .sort((a, b) => {
      if (a.priority !== b.priority) {
        if (a.priority === "Must") return -1;
        if (b.priority === "Must") return 1;
      }

      const as = a.priorityScore ?? 0;
      const bs = b.priorityScore ?? 0;

      if (as !== bs) return bs - as;

      return a.title.localeCompare(b.title);
    });

  const picked: FixItem[] = [];
  const seenCategories = new Set<CategoryId>();
  const seenAreas = new Set<string>();

  // Prefer diversity: try not to pick 3 from same category/area if good alternatives exist.
  candidates.forEach((c) => {
    if (picked.length >= count) return;

    const area = c.area ?? c.category;
    const doRepeatCategory = seenCategories.has(c.category);
    const doRepeatArea = seenAreas.has(area);

    // First pass: avoid duplicates.
    if (picked.length < count - 1 && (doRepeatCategory || doRepeatArea)) return;

    picked.push(c);
    seenCategories.add(c.category);
    seenAreas.add(area);
  });

  // fall-back if we were too strict.
  if (picked.length < count) {
    candidates.forEach((c) => {
      if (picked.length >= count) return;

      if (picked.some((p) => p.id === c.id)) return;

      picked.push(c);
    });
  }

  return picked;
};
