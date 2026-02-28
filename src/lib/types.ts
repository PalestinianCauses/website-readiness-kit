// REVIEWED
export type QuestionId = string;
export type AnswerValue = "yes" | "no" | "may-be" | null;
export type Answers = Record<QuestionId, AnswerValue>;

export type CategoryId =
  | "clarity"
  | "conversion"
  | "offers"
  | "proofs"
  | "technical";

export type Priority = "Must" | "Should" | "Nice";
export type ReadinessLabel = "Ready" | "Nearly Ready" | "Not ready";

export type ReferenceLink = {
  title: string;
  url: string;
};

export type QuestionDefinition = {
  id: QuestionId;
  category: CategoryId;
  label: string;
  helper: string;
  whyItMatters: string;
  references: ReferenceLink[];
};

export type CategoryDefinition = {
  id: CategoryId;
  title: string;
  description: string;
  order: number;
};

export type FixItem = {
  id: string;
  category: CategoryId;
  priority: Priority;
  area?: string;
  title: string;
  description: string;
  checked: boolean;
  impact?: 1 | 2 | 3 | 4 | 5;
  confidence?: 1 | 2 | 3 | 4 | 5;
  effort?: 1 | 2 | 3 | 4 | 5;
  priorityScore?: number;
};

export type FixItemState = {
  checked?: boolean;
  note?: string;
};

export type FixCheckListState = Record<string, FixItemState>;
