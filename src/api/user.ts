import { mockUserInfo, getResponse } from "./interface";
//
export const getUserInfo = async () => {
  return getResponse(mockUserInfo(), 2000);
};

export const postLogin = async (params: any) => {
  console.log("post login api", params);
  return getResponse(true, 1000);
};

export const postRegister = async (params: any) => {
  console.log("post register", params);
  return getResponse(true, 1000);
};
