import { mockApis, getResponse } from "@/mock";

export const fetchHeader = async () => {
  // return fetch(`${prefix}/api/header.json`).catch(() => ({}));
  return getResponse(mockApis.header);
};

export const fetchFooter = async () => {
  // return fetch(`${prefix}/api/footer.json`).catch(() => ({}));
  return getResponse(mockApis.footer);
};

export const fetchCurrencys = async () => {
  // return fetch(`${prefix}/api/currency.json`).catch(() => []);
  return getResponse(mockApis.currency);
};

export const fetchLanguages = async () => {
  // return fetch(`${prefix}/api/language.json`).catch(() => []);
  return getResponse(mockApis.language);
};
