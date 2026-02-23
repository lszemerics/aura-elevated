import { createContext, useContext } from "react";

export type Lang = "hu" | "en";

const LangContext = createContext<Lang>("hu");

export const LangProvider = LangContext.Provider;

export const useLang = () => useContext(LangContext);

export function t(lang: Lang, hu: string, en: string): string {
  return lang === "hu" ? hu : en;
}
