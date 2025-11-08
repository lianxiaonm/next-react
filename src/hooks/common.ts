import { useCallback, useEffect } from "react";
import { getUserInfo } from "@/api/user";
import {
  useClient,
  useAccount,
  useCurrency,
  useLanguage,
} from "@/jotai/common";

export const useFetchAccount = () => {
  const [_, setAccount] = useAccount();
  const [_1, setCurrency] = useCurrency();
  return useCallback(async () => {
    try {
      throw 123;
      const user = await getUserInfo();
      setCurrency(user.currency);
      setAccount({ user, isLogin: true });
    } catch {
      setAccount({ isLogin: false });
    }
  }, []);
};

export const useInitSimpleState = () => {
  const [client, setClient] = useClient();
  useEffect(() => {
    client || setClient(typeof window !== "undefined");
  }, []);
};

export const useInitCommonState = () => {
  const [client] = useClient();
  const [_, setCurrency] = useCurrency();
  const [_1, setLanguage] = useLanguage();
  const fetchAccount = useFetchAccount();

  useEffect(() => {
    // init once
    if (!client) {
      console.log("---initCommonState----");
      const _language = "zh-CN"; // read language
      const _currency = "usd";
      setLanguage(_language);
      setCurrency(_currency);
      // check auth & get account info
      fetchAccount();
    }
  }, []);
};
