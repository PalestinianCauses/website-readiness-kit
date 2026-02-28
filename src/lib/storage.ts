// REVIEWED

import type { Answers, FixCheckListState } from "@/lib/types";

const CHANGE_EVENT = "lrc:storage";

const KEY_ANSWERS = "lrc_answers_v1";
const KEY_CONSENT = "lrc_consent_v1";
const KEY_EMAIL = "lrc_email_v1";
const KEY_FIX_CHECKLIST = "lrc_fix_checklist_v1";
const KEY_UNLOCKED = "lrc_unlocked_v1";

const canUseDOM = function canUseDOM() {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
};

const safeJSONParse = function safeJSONParse<T>(
  value: string | null,
): T | null {
  if (!value) return null;

  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
};

const emitChange = function emitChange() {
  if (!canUseDOM()) return;

  window.dispatchEvent(new Event(CHANGE_EVENT));
};

export const subscribeToStorage = function subscribeToStorage(cb: () => void) {
  if (!canUseDOM()) return () => undefined;

  const handler = function handler() {
    cb();
  };

  window.addEventListener(CHANGE_EVENT, handler);
  window.addEventListener("storage", handler);

  return () => {
    window.removeEventListener(CHANGE_EVENT, handler);
    window.removeEventListener("storage", handler);
  };
};

export const getAnswers = function getAnswers(): Answers {
  if (!canUseDOM()) return {};

  return safeJSONParse<Answers>(localStorage.getItem(KEY_ANSWERS)) ?? {};
};

export const setAnswers = function setAnswers(answers: Answers) {
  if (!canUseDOM()) return;

  localStorage.setItem(KEY_ANSWERS, JSON.stringify(answers));

  emitChange();
};

export const getEmail = function getEmail(): string | null {
  if (!canUseDOM()) return null;

  const v = localStorage.getItem(KEY_EMAIL);

  return typeof v === "string" && v.trim().length !== 0 ? v : null;
};

export const setEmail = function setEmail(email: string) {
  if (!canUseDOM()) return;

  localStorage.setItem(KEY_EMAIL, email.trim());

  emitChange();
};

export const getUnLocked = function getUnLocked(): boolean {
  if (!canUseDOM()) return false;

  return localStorage.getItem(KEY_UNLOCKED) === "true";
};

export const setUnLocked = function setUnLocked(unlocked: boolean) {
  if (!canUseDOM()) return;

  localStorage.setItem(KEY_UNLOCKED, unlocked ? "true" : "false");

  emitChange();
};

export const getConsent = function getConsent(): boolean | null {
  if (!canUseDOM()) return null;

  const raw = localStorage.getItem(KEY_CONSENT);

  if (raw === null) return null;

  return raw === "true";
};

export const setConsent = function setConsent(consent: boolean) {
  if (!canUseDOM()) return;

  localStorage.setItem(KEY_CONSENT, consent ? "true" : "false");

  emitChange();
};

export const getFixCheckListState =
  function getFixCheckListState(): FixCheckListState {
    if (!canUseDOM()) return {};

    return (
      safeJSONParse<FixCheckListState>(
        localStorage.getItem(KEY_FIX_CHECKLIST),
      ) ?? {}
    );
  };

export const setFixCheckListState = function setFixCheckListState(
  state: FixCheckListState,
) {
  if (!canUseDOM()) return;

  localStorage.setItem(KEY_FIX_CHECKLIST, JSON.stringify(state));

  emitChange();
};

export const resetLRCData = function resetLRCData() {
  if (!canUseDOM()) return;

  localStorage.removeItem(KEY_ANSWERS);
  localStorage.removeItem(KEY_CONSENT);
  localStorage.removeItem(KEY_EMAIL);
  localStorage.removeItem(KEY_FIX_CHECKLIST);
  localStorage.removeItem(KEY_UNLOCKED);

  emitChange();
};
