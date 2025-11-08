import { atom, useAtom } from "jotai";

const isClientAtom = atom(false);
export const useClient = () => useAtom(isClientAtom);

const accountAtom = atom<{
  isLogin: boolean | null;
  user?: Record<string, any>;
}>({ isLogin: null });
export const useAccount = () => useAtom(accountAtom);

export const modeLightAtom = atom(true);
export const useLightMode = () => useAtom(modeLightAtom);

const lanugageAtom = atom("zh-CN");
export const useLanguage = () => useAtom(lanugageAtom);

const currencyAtom = atom("usd");
export const useCurrency = () => useAtom(currencyAtom);
