// REVIEWED

export type StepId =
  | "clarity"
  | "conversion"
  | "offers"
  | "proof"
  | "technical_tracking";

export type QuestionId =
  | "analytics_key_events"
  | "clarity_cta"
  | "clarity_differentiator"
  | "clarity_nav_labels"
  | "clarity_outcome"
  | "clarity_primary_cta_visibility"
  | "conversion_contact_friction"
  | "conversion_next_steps"
  | "conversion_process_page"
  | "conversion_reduce_anxiety"
  | "conversion_two_clicks"
  | "offers_boundaries"
  | "offers_not_for"
  | "offers_packaged"
  | "offers_pricing_guidance"
  | "offers_service_pages"
  | "perf_mobile_fast"
  | "proof_about"
  | "proof_case_studies"
  | "proof_near_cta"
  | "proof_testimonials_specific"
  | "proof_trust_signals"
  | "seo_indexation_basics"
  | "seo_og_image"
  | "seo_titles_meta"
  | "tech_hygiene_404"
  | "ux_accessibility_contrast"
  | "ux_writing_scannable";

export type AnswerScore = 0 | 1 | 2;

export type FixTimeLine = "today" | "week" | "month";

export type FixBucket =
  | "accessibility"
  | "analytics_tracking"
  | "clarity"
  | "cta_path"
  | "offers"
  | "proof"
  | "seo"
  | "performance_tech"
  | "ux_writing";

export type Step = {
  id: StepId;
  title: string;
  description: string;
  questionIds: QuestionId[];
};

export type Question = {
  id: QuestionId;
  stepId: StepId;
  title: string;
  helper?: string;
  timeline: FixTimeLine;
  bucket: FixBucket;
};

export type AssessmentAnswers = Partial<Record<QuestionId, AnswerScore>>;

export type AssessmentState = {
  version: 1;
  stepIndex: number;
  updateAt: number;
  answers: AssessmentAnswers;
};

export type ScoreIDLevel = "not_ready" | "nearly_ready" | "ready";

export type ScoreLevel = {
  id: ScoreIDLevel;
  label: string;
  description: string;
};

export type CategoryBreakDown = Array<{
  stepId: StepId;
  title: string;
  score: number;
  maxScore: number;
}>;

export type PriorityFix = {
  stepId: StepId;
  questionId: QuestionId;
  title: string;
  score: AnswerScore;
  impact: "High" | "Medium" | "Low";
};

export type Lead = {
  name: string;
  email: string;
  sendingReportToEmail?: boolean;
  role?: "Founder/Owner" | "Marketing" | "Ops" | "Sales" | "Other";
  timeline?: "This month" | "1-3 months" | "3+ months" | "Just researching";
  budget?: "< $5k" | "$5-15k" | "$15-50k" | "$50k+";
  createAt: number;
};
