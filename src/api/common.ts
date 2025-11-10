import { fetchRequest as fetch } from "@/util/http";
const prefix = typeof window === "undefined" ? "http://127.0.0.1:3000" : "";

export const fetchHeader = async () => {
  return fetch(`${prefix}/api/header.json`).catch(() => ({}));
};

export const fetchFooter = async () => {
  return fetch(`${prefix}/api/footer.json`).catch(() => ({}));
};

export const fetchCurrencys = async () => {
  return fetch(`${prefix}/api/currency.json`).catch(() => []);
};

export const fetchLanguages = async () => {
  return fetch(`${prefix}/api/language.json`).catch(() => []);
};
