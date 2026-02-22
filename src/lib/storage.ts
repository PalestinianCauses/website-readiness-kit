// REVIEWED

import type { AssessmentState } from "@/lib/types";

const ASSESSMENT_KEY = "wrk_assessment_v1";
const UNLOCK_KEY = "wrk_report_unlocked_v1";
const LEAD_KEY = "wrk_lead_v1";

const isBrowser = () => typeof window !== "undefined";

export const storageKeys = {
  assessment: ASSESSMENT_KEY,
  unlocked: UNLOCK_KEY,
  lead: LEAD_KEY,
} as const;

export const loadingAssessmentState = (): AssessmentState | null => {
  if (!isBrowser()) return null;

  try {
    const raw = window.localStorage.getItem(ASSESSMENT_KEY);

    if (!raw) return null;

    const parsed = JSON.parse(raw) as AssessmentState;

    if (!parsed || parsed.version !== 1) return null;

    return parsed;
  } catch {
    return null;
  }
};

export const savingAssessmentState = (state: AssessmentState) => {
  if (!isBrowser()) return;

  try {
    window.localStorage.setItem(ASSESSMENT_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
};

export const clearingAssessmentState = () => {
  if (!isBrowser()) return;

  try {
    window.localStorage.removeItem(ASSESSMENT_KEY);
  } catch {
    // ignore
  }
};

export const loadingUnLocked = (): boolean => {
  if (!isBrowser()) return false;

  try {
    return window.localStorage.getItem(UNLOCK_KEY) === "true";
  } catch {
    return false;
  }
};

export const savingUnLocked = (value: boolean) => {
  if (!isBrowser()) return;

  try {
    window.localStorage.setItem(UNLOCK_KEY, value ? "true" : "false");
  } catch {
    // ignore
  }
};

export const loadingLeadingRaw = (): string | null => {
  if (!isBrowser()) return null;

  try {
    return window.localStorage.getItem(LEAD_KEY);
  } catch {
    return null;
  }
};

export const savingLeadingRaw = (raw: string) => {
  if (!isBrowser()) return;

  try {
    window.localStorage.setItem(LEAD_KEY, raw);
  } catch {
    // ignore
  }
};

export const clearingLead = () => {
  if (!isBrowser()) return;

  try {
    window.localStorage.removeItem(LEAD_KEY);
  } catch {
    // ignore
  }
};

export const clearingUnLock = () => {
  if (!isBrowser()) return;

  try {
    window.localStorage.removeItem(UNLOCK_KEY);
  } catch {
    // ignore
  }
};
