import { atom, useAtom } from "jotai";

const isClient = atom(false);

export const useClient = () => useAtom(isClient);
