// REVIEWED

/**
 * Website Readiness Kit — Production Copy System
 *
 * Voice attributes
 * - Trust-first: calm, specific, and verifiable. No hype.
 * - Conversion-first: every sentence earns its place and points to a next step.
 * - Founder-friendly: plain language; explain jargon once or avoid it.
 * - Concise: short paragraphs, scannable lists, tight labels.
 * - Respectful: assume smart users; no blaming wording.
 *
 * Do
 * - Use concrete nouns and outcomes ("booked calls", "qualified leads").
 * - Keep buttons action-based ("Start assessment", "Un-lock report").
 * - Prefer sentence case for UI labels and headings.
 * - Use "CTA", "offer", "proof" consistently.
 * - Be explicit about what happens next and when.
 *
 * Don't
 * - Don't promise results you can't prove.
 * - Don't use "demo/stub/local storage/no back-end" language.
 * - Don't use "just", "obviously", "simply" as filler.
 * - Don't overload users with long paragraphs.
 * - Don't mix synonyms for the same action ("Start/Begin/Launch").
 *
 * Terminology dictionary
 * - Assessment: the multi-step 0/1/2 questionnaire.
 * - Report: your score + break-down + top fixes + plan.
 * - Plan: the check-list grouped by time-line (Today / This week / This month).
 * - Top fixes: highest-impact gaps based on your answers.
 * - Offer: what you sell (packages/services/products).
 * - Proof: evidence near decisions (outcomes, testimonials, logos, screenshots).
 * - CTA: primary call to action you want users to take.
 *
 * Style rules
 * - Case: sentence case for headings/labels; title case for brand name only.
 * - Buttons: verb + object ("View report", "Copy text", "Reset").
 * - Time estimates: use "≈" and a range ("≈ 10-12 minutes").
 * - Punctuation: avoid exclamation; prefer periods; use em dashes sparingly.
 * - Accessibility: labels match controls; error messages are specific and kind.
 */

export const COPY = {
  brand: {
    appName: "Website Readiness Kit",
    siteDescription:
      "Score your website, spot your highest-impact gaps, and get a prioritized action plan.",
  },

  nav: {
    assessment: "Assessment",
    report: "Report",
    startAssessment: "Start assessment",
    privacy: "Privacy",
    contact: "Contact",
  },

  landing: {
    badge: "≈ 10-12 minutes • simple score • clear next steps",
    hero: {
      titlePrefix: "Make your website",
      rotatingPhrases: [
        "clearer",
        "more credible",
        "easier to act on",
        "conversion-ready",
      ] as const,
      description:
        "Answer 28 quick questions. Get your readiness level, your top gaps, and a plan you can ship in days—not weeks.",
      cta: "Start assessment",
    },
    valueCards: {
      audit: { title: "Audit", desc: "Clarity → tracking" },
      prioritize: { title: "Prioritize", desc: "High-impact fixes" },
      ship: { title: "Ship", desc: "Today → this month" },
    },
    preview: {
      title: "Report preview",
      titleSub: "What you'll get at the end",
      badge: "Sample",
      scoreLabel: "Readiness score",
      topFixesTitle: "Top fixes",
      planTitle: "7-day plan",
      footerNote: "Completion is tracked so you can actually finish.",
      fixes: [
        "Clarify your outcome + audience",
        "Put proof next to your CTA",
        "Reduce contact form friction",
      ],
      plan: [
        "Today: tighten hero + CTA",
        "This week: package offers",
        "This month: improve tracking",
      ],
    },
    sections: {
      bestForTitle: "Best for",
      bestForBody:
        "Founders, studios, agencies, and service businesses who want clearer positioning and a cleaner path to one primary CTA.",
      takeawayTitle: "What you'll walk away with",
      takeaway: [
        "Readiness score + level",
        "Top fixes (ranked by payoff)",
        "A Today / This week / This month check-list",
      ],
    },
  },

  meta: {
    landing: {
      title: "Website Readiness Kit",
      ogTitle: "Website Readiness Kit",
    },
    assessment: {
      title: "Assessment",
      ogTitle: "Website assessment",
      description:
        "Answer 28 quick questions to score your website and reveal your highest-impact gaps.",
    },
    report: {
      title: "Report",
      ogTitle: "Website readiness report",
      description: "View your score, top fixes, and a prioritized plan.",
    },
    privacy: {
      description:
        "How we use your information when you un-lock your Website Readiness Kit report.",
    },
  },

  assessment: {
    title: "Assessment",
    titleSub: (remaining: number) =>
      `≈ 12-15 minutes • ${remaining} left • Score 0/1/2 • Saves as you go`,
    viewReport: "View report",
    reset: "Reset",
    resetDialog: {
      title: "Reset your assessment?",
      body: "This clears your answers on this device.",
      cancel: "Cancel",
      confirm: "Reset",
    },
    stepLabel: (current: number, total: number, title: string) =>
      `Step ${current} of ${total}: ${title}`,
    progressLabel: "Progress",
    tipNotSure: 'Tip: if you\'re not sure, choose "Partly."',
    saved: "Saved",
    help: "Help",
    stepCompletion: (done: number, total: number) =>
      `Step completion: ${done}/${total}`,
    back: "Back",
    next: "Next",
    finish: "Finish & view report",
  },

  report: {
    title: "Report",
    titleSub: "Your score and the fixes with the biggest pay-off.",
    actions: {
      print: "Print",
      export: "Export",
      reset: "Reset",
    },
    resetDialog: {
      title: "Reset your assessment?",
      body: "This clears your answers and un-locked report on this device.",
      cancel: "Cancel",
      confirm: "Reset",
    },
    empty: {
      title: "No answers yet",
      body: "Take the assessment first. We'll generate a report from your answers.",
      primary: "Start assessment",
      secondary: "Back to home",
    },
    summaryLabel: "Website readiness",
    scoreLabel: "Score",
    tabs: {
      topFixes: "Top fixes",
      plan: "Plan",
      breakdown: "Break-down",
    },
    topFixesEmpty: {
      title: "You're in great shape.",
      body: "No priority fixes right now. In case you want optional maintenance items, open the Plan tab.",
    },
    resourcesTabs: {
      copy: "Copy Builder",
      references: "Why these questions?",
      loadingCopy: "Loading Copy Builder...",
    },
    copyEmail: {
      title: "Report copy",
      bodyPrefix: "We'll email a copy to",
      status: "Status: sending...",
    },
    tipCard: {
      title: "Tip",
      body: "Start with the lowest-scoring step. Improving clarity + proof often lifts everything else.",
      CTA: "Edit answers",
    },
    exportText: ({
      total,
      max,
      level,
      fixes,
      next7,
    }: {
      total: number;
      max: number;
      level: string;
      fixes: Array<{ title: string; impact: string }>;
      next7: string[];
    }) =>
      [
        COPY.brand.appName,
        `Score: ${total}/${max} (${level})`,
        ``,
        `Top fixes:`,
        ...fixes.map((f) => `- ${f.title} (${f.impact})`),
        ``,
        `Next 7 days:`,
        ...next7.map((p) => `- ${p}`),
      ].join("\n"),
  },

  planPanel: {
    title: "Fixes & plan",
    titleSub:
      'Fixes are suggested from your answers. "Yes" items are marked complete automatically.',
    maintenanceTitle: "You're in great shape.",
    maintenanceBody:
      "No priority fixes. Here's a short maintenance list you can revisit.",
    maintenanceCta: "Open full check-list",
    showTop: "Show top fixes",
    showAll: "Show all fixes",
    timelines: { today: "Today", week: "This week", month: "This month" },
    completionLabel: (timeline: string) => `Completion (${timeline})`,
    markAllInSection: "Mark all in this section",
  },

  unlock: {
    title: "Un-lock your report",
    body: "Get your prioritized plan, top fixes, and copy templates.",
    successTitle: "Un-locked",
    successBody: "Your full report and prioritized plan are ready.",
    successCTA: "View full report",
    noTipEmail: "Tip: you can revisit this report anytime.",
    sendingCopyTitle: "Email me a copy",
    sendingCopyHint: "Recommended. No spam—just your report.",
    headerOptional: "Optional (helps tailor recommendations)",
    CTAOptional: "Add details",
    fields: {
      name: { label: "Name", placeholder: "Your name" },
      email: { label: "Email", placeholder: "you@company.com" },
      role: { label: "Role", placeholder: "Choose" },
      timeline: { label: "Time-line", placeholder: "Choose" },
      budget: { label: "Budget range", placeholder: "Choose" },
    },
    privacyLinePrefix:
      "By un-locking, you agree to receive your report by email (if selected). You can un-subscribe anytime.",
    privacyLinkLabel: "Privacy",
    CTA: "Un-lock report",
    toasts: {
      titleUnLocked: "Report un-locked",
      withEUnLocked: "We'll email you a copy shortly.",
      noEUnLocked: "You're all set.",
      errorTitle: "Something went wrong",
      errorBody: "Please try again.",
    },
    validation: {
      nameRequired: "Please enter your name.",
      eInValid: "Please enter a valid email.",
    },
  },

  reportCTA: {
    title: "Want a second set of eyes?",
    body: "Send your score + site link. You'll get a short teardown with the next steps that matter most.",
    primary: "Request a teardown",
    secondary: "Edit answers",
  },

  share: {
    title: "Share your score",
    copy: "Copy",
    share: "Share",
    toastTitleCopied: "Copied",
    toastBodyCopied: "Share text copied to clipboard.",
    copyTitleFailed: "Copy failed",
    copyBodyFailed: "Your browser blocked clipboard access.",
    buildingText: ({
      total,
      max,
      level,
      topFixTitles,
      link,
    }: {
      total: number;
      max: number;
      level: string;
      topFixTitles: string[];
      link: string;
    }) => {
      const top = topFixTitles.slice(0, 2).filter(Boolean);
      const topLine = top.length ? `Top fix: ${top[0]}` : "";
      return [
        `I scored ${total}/${max} (${level}) on the Website Readiness Kit.`,
        topLine,
        `Try it: ${link}`,
      ]
        .filter(Boolean)
        .join("\n");
    },
  },

  common: {
    copyToClipboard: "Copied to clipboard.",
  },

  copyBuilder: {
    title: "Copy Builder",
    intro:
      "Generic templates are safe defaults. Personalized outputs use your inputs and tone.",
    toneLabel: "Tone preset",
    tonePlaceholder: "Choose tone",
    tabs: { generic: "Generic", personalized: "Personalized" },
    guidanceTabs: {
      generic: "Safe starting points. Keep claims grounded.",
      personalized: {
        before: "Proof-led snippets require proof. Replace ",
        after: " parts before publishing.",
      },
    },
    filters: {
      websiteType: "Website type",
      placement: "Placement",
      style: "Style",
      search: "Search",
      all: "All",
      placeholdersSearch: "Search templates...",
    },
    inputs: {
      brand: { label: "Brand", placeholder: "e.g., North-wind Studio" },
      proof: {
        label: "Proof",
        placeholder: "e.g., 50+ launches, 120+ reviews",
      },
      audience: { label: "Audience", placeholder: "e.g., seed-stage founders" },
      outcome: { label: "Outcome", placeholder: "e.g., more booked calls" },
      pain: { label: "Pain", placeholder: "e.g., unclear positioning" },
      differentiator: {
        label: "Differentiator",
        placeholder: "e.g., niche expertise, speed, outcomes",
      },
      liveExample: "Live example (rotates)",
    },
    noMatches: "No matches. Try clearing filters.",
    requireProof: {
      linePrefix: "Add",
      emphasis: "Proof",
      lineSuffix: "to enable copying proof-led snippets.",
    },
    meta: {
      bestFor: "Best for:",
      placement: "Best placement:",
      caution: "Caution:",
      why: "Why this works:",
    },
    saved: {
      title: "Saved",
      titleSub: "Your favorites are stored in this browser.",
      clear: "Clear",
      empty: "Star any snippet to save it here.",
    },
  },

  references: {
    title: "References",
    intro:
      "These sources shape the assessment and guidance. They're practical fundamentals: clarity, accessibility, performance, and search hygiene.",
    dialogTrigger: "Why these questions?",
  },

  ad: {
    label: "Partner",
    body: "Your placement here. Keep it relevant and genuinely helpful.",
  },

  privacy: {
    title: "Privacy",
    intro:
      "This kit is designed to be helpful and respectful. Here's how we use the info you provide when un-locking your report.",
    sections: {
      collectTitle: "What we collect",
      collectBody:
        "Your name and email. Optional qualification answers (role, time-line, budget range) if you choose to provide them.",
      useTitle: "How we use it",
      useBullets: [
        "To un-lock and send you your report (if you choose email).",
        "To follow up with relevant guidance about your results.",
      ],
      doNotTitle: "What we don't do",
      doNotBullets: [
        "No selling of your personal information.",
        "No irrelevant spam.",
      ],
      questionsTitle: "Un-subscribe and questions",
      questionsBody:
        "Every email includes an un-subscribe option. In case you have questions, reply to the email you receive after un-locking.",
    },
  },
} as const;

export type Copy = typeof COPY;
