import { getResponse, mockUserInfo } from "@/mock";

//
export const getUserInfo = async () => {
  return getResponse(mockUserInfo(), { random: true });
};

export const postLogin = async (params: any) => {
  console.log("post login api", params);
  return getResponse(true);
};

export const postRegister = async (params: any) => {
  console.log("post register", params);
  return getResponse(true);
};
